<template>
    <section>
        <v-card class="slider pa-3 my-12">
      <v-list-group>
        <template v-slot:activator>
          <h1>Блок сервис</h1>
        </template>

        <v-card class="pa-3 my-12">
          <h2>{{ CONTENT.CONTENT.OUR_SERVICE.EXTRA_TITLE }}</h2>
          <v-divider></v-divider>
          <v-list-item-content>{{ CONTENT.CONTENT.OUR_SERVICE.TITLE }}</v-list-item-content>
          <v-list-item-content>{{ CONTENT.CONTENT.OUR_SERVICE.TEXT }}</v-list-item-content>
          
          <v-divider></v-divider>
          <v-row class="my-2">
            <v-spacer></v-spacer>

            <v-btn class="ma-2" outlined color="indigo" @click="open">
              <v-icon>mdi-pencil</v-icon>Редактировать
            </v-btn>
          </v-row>
        </v-card>
      </v-list-group>
    </v-card>

    <v-dialog
      v-model="modal"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <modal-service @close="close" :CONTENT="CONTENT" />
    </v-dialog>
    </section>
</template>

<script>
import ModalService from '../../../components/crm/modal_components/modal_service.vue'

export default {
    props: ['CONTENT'],

    components: {
      ModalService
    },

    data() {
      return {
        modal: false
      }
    },
    methods: {
      open() {
        this.modal = true
        this.$store.commit("crmSetting/SAVE_CONTENT", this.CONTENT);
      },
      close() {
        this.modal = false
        this.$store.commit("crmSetting/CLEAN");
      }
    }
}
</script>