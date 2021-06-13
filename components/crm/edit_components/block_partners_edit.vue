<template>
  <section>
    <v-card class="slider pa-3 my-12">
      <v-list-group>
        <template v-slot:activator>
          <h1>Блок партнеры</h1>
        </template>

        <v-card class="pa-3 my-12">
          <h2>{{ CONTENT.CONTENT.PARTNERS_BLOCK.TITLE }}</h2>
          <v-divider></v-divider>
          <v-list-item-content>{{ CONTENT.CONTENT.PARTNERS_BLOCK.TEXT }}</v-list-item-content>
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
      <modal-partners @close="close" :CONTENT="CONTENT" />
    </v-dialog>
  </section>
</template>

<script>
import ModalPartners from '@/components/crm/modal_components/modal_parners.vue'
export default {
  props: ["CONTENT"],

  components: {
    ModalPartners
  },

  data() {
    return {
      modal: false,
    };
  },
  methods: {
    open() {
      this.$store.commit("crmSetting/SAVE_CONTENT", this.CONTENT);
      this.modal = true;
    },
    close() {
      this.modal = false
      this.$store.commit("crmSetting/CLEAN");
    },
  },
};
</script>