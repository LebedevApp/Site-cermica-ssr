<template>
  <section>
    <v-card class="pa-3 my-12">
      <h1 class="my-4">Вступительный текст</h1>
      <v-divider></v-divider>
      <h4 class="my-4">{{ CONTENT.DESCRIPTION }}</h4>
      <v-row class="my-2">
        <v-spacer></v-spacer>

        <v-btn class="ma-2" outlined color="indigo" @click="open">
          <v-icon>mdi-pencil</v-icon>Редактировать
        </v-btn>
      </v-row>
    </v-card>

    <v-dialog
      v-model="modal"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <modal-description @close="close" :CONTENT="CONTENT" />
    </v-dialog>
  </section>
</template>

<script>
import ModalDescription from '@/components/crm/modal_components/modal_description'
export default {
  props: ["CONTENT"],

  components: {
    ModalDescription
  },

  data() {
    return {
      modal: false,
      
    }
  },

  methods: {
    close() {
      this.modal = false
      //this.DESCRIPTION = 0
      //console.log(this.CONTENT)
      
    },
    async open() {
      await this.$store.dispatch('crmSetting/SAVE_DESCRIPTION', this.CONTENT)
      this.modal = true
    }
  }
};
</script>