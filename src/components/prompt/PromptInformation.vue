
<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <v-text-field
          label="Collection Title"
          :value="prompt.title"
          @input="updateTitle"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Collection Description"
          multi-line
          :value="prompt.description"
          @input="updateDescription"
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';
  import { UPDATE_INFORMATION } from '@/store/prompt/mutations';
  export default {
    name: "prompt-information",
    computed: {
      ...mapGetters('prompt', {
        prompt: 'newPrompt'
      })
    },
    methods: {
      ...mapMutations('prompt', {
        updateInformation: UPDATE_INFORMATION
      }),
      updateTitle(value) {
        this.updateInformation({
          title: value,
          description: this.prompt.description
        })
      },
      updateDescription(value) {
        this.updateInformation({
          description: value,
          title: this.prompt.title
        })
      }
    }
  }
</script>