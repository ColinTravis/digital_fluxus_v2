import {
    UPDATE_INFORMATION,
    ADD_ANSWER
} from './mutations';

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
    [ADD_ANSWER](state, questionIndex) {
        const answers = state.newPrompt.questions[questionIndex].answers;
        if (answers.length < 5) {
            answers.push({
                answer: "Anotha one!",
                isRight: false
            });
        }
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};