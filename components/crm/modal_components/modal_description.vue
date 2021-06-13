<template>
  <v-card>
    <v-container>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Описание"
        :value="CONTENT.DESCRIPTION"
        @change="saveText($event)"
        ref="inputText"
      ></v-textarea>

      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="red" @click="close">
        <v-icon>mdi-pencil</v-icon>Отменить
      </v-btn>
      <v-btn
        class="ma-2"
        :disabled="isActive"
        outlined
        color="green darken-1"
        :loading="loading"
        @click="saveContent"
      >
        <v-icon>mdi-pencil</v-icon>Применить
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "modal_description",

  props: ["CONTENT"],

  data() {
    return {
      description: "",
      isActive: true,
      loading: false,
    };
  },

  methods: {
    close() {
      this.$emit("close");
      this.$store.commit("crmSetting/CLEAN");
      //this.DESCRIPTION = 0
    },
    async saveContent() {
      this.loading = true;
      await this.$store.dispatch(
        "crmSetting/EDIT_CONTENT_DESCRIPTION",
        this.description
      );
      await this.$store.dispatch("crm/ADD_ON_DATABASE");
      this.$store.commit("crmSetting/CLEAN");
      this.$emit("close");
      this.loading = false;
    },
    saveText(e) {
      this.isActive = false;
      e == null
        ? (this.description = this.CONTENT.DESCRIPTION)
        : (this.description = e);
    },
  },
};
</script>