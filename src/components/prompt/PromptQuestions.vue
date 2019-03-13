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
                <v-layout class="pl-2">
                  
                  <!-- HTML... -->
                  
                  <v-btn
                    v-if="item.answers.length < 5"
                    class="mt-4"
                    color="primary"
                    @click="addAnswer(questionIndex)"
                    >Add Answer
                  </v-btn>  
                  
                  <!-- HTML... -->
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
  import { mapMutations, mapGetters } from 'vuex';
  import { ADD_ANSWER } from '@/store/prompt/mutations';
  export default {
    name: 'prompt-questions',
    computed: {
      ...mapGetters('prompt', {
        prompt: 'newPrompt'
      })
    },
    methods: {
      ...mapMutations('prompt', {
        addAnswer: ADD_ANSWER
      })      
    }
  }
</script>