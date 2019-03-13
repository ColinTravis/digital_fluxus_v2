<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">
          <v-icon>question_answer</v-icon>New Prompt
        </div>
      </div>
    </v-card-title>
    <v-subheader>Prompt Information</v-subheader>
    <prompt-information/>

    <v-subheader>Prompt Questions</v-subheader>
    <prompt-questions/>

    <prompt-actions 
        :action="createPrompt" 
        actionName="Create"
    />
        
  </v-card>
</template>

<script>
import {mapActions} from 'vuex';


import PromptInformation from "@/components/prompt/PromptInformation";
import PromptQuestions from "@/components/prompt/PromptQuestions";
import PromptActions from "@/components/prompt/PromptActions";

export default {
  name: "create-prompt",
  components: {
    PromptInformation,
    PromptQuestions,
    PromptActions
  },
  methods: {
    ...mapActions("prompt", {
      create: "create"
    }),
    async createPrompt() {
      try {
        await this.create();
        this.$router.push("/");
      } catch (error) {
        alert("Something went wrong");
      }
    }
  }
};
</script>