import {
  UPDATE_INFORMATION,
  REMOVE_QUESTION,
  ADD_ANSWER,
  REMOVE_ANSWER
} from "./mutations";

const state = {
  newPrompt: {
    title: "Prompt 2019",
    description: 100,
    questions: [
      {
        question: "First Question",
        points: "First Points",
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
  [UPDATE_INFORMATION](state, info) {
    state.newPrompt.title = info.title;
    state.newPrompt.description = info.description;
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
  [REMOVE_ANSWER](state, payload){
    const questionIndex = payload.questionIndex;
    const answerIndex = payload.answerIndex;

    const question = state.newPrompt.questions[questionIndex];

    if (question.answers.length > 1) {
        question.answers.splice(answerIndex, 1);
    }
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
