
<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-expansion-panel focusable>
          <v-expansion-panel-content
            v-for="(item, questionIndex) in prompt.questions"
            :key="questionIndex"
            focusable
          >
            <div slot="header">{{item.question}}</div>
            <v-card class="grey lighten-3">
              <v-container>
                <v-layout wrap>
                  <v-flex xs10>
                    <v-text-field label="Question" :value="item.question"></v-text-field>
                  </v-flex>
                  <v-flex xs2>
                    <v-text-field type="number" label="Points" :value="item.points"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-container>
                  <v-layout wrap v-for="(answer, answerIndex) in item.answers" :key="answerIndex">
                    <v-flex xs10>
                      <v-text-field label="Answer" :value="answer.answer"></v-text-field>
                    </v-flex>
                    <v-flex xs2>
                      <v-btn
                        fab
                        dark
                        small
                        color="red"
                        @click="removeAnswer({questionIndex, answerIndex})"
                      >
                        <v-icon>remove</v-icon>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-layout class="pl-2">
                  <v-btn
                    v-if="item.answers.length < 5"
                    class="mt-4"
                    color="primary"
                    @click="addAnswer(questionIndex)"
                  >Add Answer</v-btn>
                  <v-btn class="mt-4" color="red" dark>Remove Question</v-btn>
                </v-layout>
              </v-container>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

import {
  ADD_ANSWER,
  REMOVE_ANSWER,
  REMOVE_QUESTION
} from "@/store/prompt/mutations";

export default {
  name: "prompt-questions",
  computed: {
    ...mapGetters("prompt", {
      prompt: "newPrompt"
    })
  },
  methods: {
    ...mapMutations("prompt", {
      addAnswer: ADD_ANSWER,
      removeAnswer: REMOVE_ANSWER,
      removeQuestion: REMOVE_QUESTION
    })
  }
};
</script>