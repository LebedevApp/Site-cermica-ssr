<template>
  <section>
    <v-card class="slider pa-3 my-12">
      <v-list-group>
        <template v-slot:activator>
          <h1>Описание страницы</h1>
        </template>

        <v-card class="pa-3 my-12">
          <h2>{{ CONTENT.TITLE }}</h2>
          <v-divider></v-divider>
          <v-list-item-content>{{ CONTENT.TEXT }}</v-list-item-content>
          <v-divider></v-divider>
          <v-row class="my-2">
            <v-spacer></v-spacer>

            <v-btn
              class="ma-2"
              outlined
              color="indigo"
              @click="open"
            >
              <v-icon>mdi-pencil</v-icon>Редактировать
            </v-btn>
          </v-row>
        </v-card>
      </v-list-group>
    </v-card>

    <v-dialog
      v-model="modal_img"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <modal-img @close="close" :CONTENT="CONTENT" />
    </v-dialog>
  </section>
</template>

<script>
import ModalImg from "@/components/crm/modal_components/modal_img";
export default {
  props: ["CONTENT"],

  components: {
    ModalImg,
  },

  data() {
    return {
      modal_img: false,
    };
  },

  methods: {
    close() {
      this.modal_img = false;
    },
    async open() {
      await this.$store.dispatch('crmSetting/SAVE_CONTENT_IMG', this.CONTENT)
      this.modal_img = true
    }
  },
};
</script>