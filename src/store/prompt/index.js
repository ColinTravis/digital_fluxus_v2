import db from "@/db";
import firebase from "@/firebase";

import {
  UPDATE_INFORMATION,
  ADD_QUESTION,
  UPDATE_QUESTION,
  REMOVE_QUESTION,
  ADD_ANSWER,
  REMOVE_ANSWER,
  UPDATE_ANSWER,
  RESET_PROMPT
} from "./mutations";

const state = {
  newPrompt: {
    title: "Prompt 2019",
    description: 100,
    questions: [
      {
        question: "First Prompt",
        // points: "First Points",
        answers: [
          {
            answer: "First answer"
          }
        ]
      }
    ]
  }
};

const getters = {
  newPrompt: ({ newPrompt }) => newPrompt
};

const mutations = {
  [RESET_PROMPT](state) {
    this.newPrompt = {
      title: "",
      description: "",
      questions: []
    };
  },
  [UPDATE_INFORMATION](state, info) {
    state.newPrompt.title = info.title;
    state.newPrompt.description = info.description;
  },
  [ADD_QUESTION](state) {
    state.newPrompt.questions.push({
      question: "Question",
      // points: 0,
      answers: []
    });
  },
  [UPDATE_QUESTION](state, payload) {
    const question = state.newPrompt.questions[payload.questionIndex];

    question.question = payload.question;
    // question.points = payload.points;
  },
  [REMOVE_QUESTION](state, questionIndex) {
    if (state.newPrompt.questions.length > 1) {
      state.newPrompt.questions.splice(questionIndex, 1);
    }
  },
  [ADD_ANSWER](state, questionIndex) {
    const answers = state.newPrompt.questions[questionIndex].answers;
    if (answers.length < 5) {
      answers.push({
        answer: "Anotha Answer!",
        isRight: false
      });
    }
  },
  [REMOVE_ANSWER](state, payload) {
    const questionIndex = payload.questionIndex;
    const answerIndex = payload.answerIndex;

    const question = state.newPrompt.questions[questionIndex];

    if (question.answers.length > 1) {
      question.answers.splice(answerIndex, 1);
    }
  },
  [UPDATE_ANSWER](state, payload) {
    const questionIndex = payload.questionIndex;
    const answerIndex = payload.answerIndex;
    const answerText = payload.answer;
    const isRight = payload.isRight;

    const answer =
      state.newPrompt.questions[questionIndex].answers[answerIndex];

    answer.isRight = isRight;
    answer.answer = answerText;
  }
};

const actions = {
  async create({ state }) {
    const user = firebase.auth().currentUser;
    if (user) {
      // check if there is a question without a right answer
      state.newPrompt.questions.map(question => {
        let hasRightAnswer = false;

        question.answers.map(answer => {
          if (answer.isRight) hasRightAnswer = true;
        });

        // if (!hasRightAnswer) {
        //   alert(
        //     `Question: '${question.question}' doesn't have a right answer!`
        //   );
        //   throw new Error();
        // }
      });


      // save to database
      await db.collection('prompts').add({
        ...state.newPrompt,
        userId: user.uid
      });

      alert('Prompt created');

    } else {
      alert('Unauthorized');
    }
    //db.collection('prompts')
  },

  list({ commit }) {
    commit(RESET_PROMPT_LIST);

    db.collection('prompts').onSnapshot(snapshot => {
      snapshot.docChanges.forEach(function (change) {
        if (change.type === "added") {
          commit(PUSH_PROMPT, {
            id: change.doc.id,
            ...change.doc.data()
          });
        }
      });
    });
  },

  async get({ commit }, id) {
    const prompt = await db.collection('prompts').doc(id).get();

    if (prompt.exists) {
      commit(SET_PROMPT, {
        id: prompt  .id,
        ...prompt.data()
      });
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
