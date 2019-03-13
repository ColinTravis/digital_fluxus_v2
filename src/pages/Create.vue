<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">
          <v-icon>question_answer</v-icon> New Prompt
        </div>
      </div>
    </v-card-title>
    <v-subheader>Prompt Information</v-subheader>
    <prompt-information />    

    <v-subheader>Prompt Questions</v-subheader>
    <prompt-questions />
  </v-card>
</template>

<script>
  import PromptInformation from '@/components/prompt/PromptInformation';  
  import PromptQuestions from '@/components/prompt/PromptQuestions';

  export default {
    name: 'create-prompt',
    components: {
      PromptInformation,
      PromptQuestions
    }
  }
</script>