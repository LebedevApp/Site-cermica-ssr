<template>
  <v-card>
    <v-container>
      <v-text-field
        label="Название кнопки"
        outlined
        clearable
        :value="CARD.BUTTON_NAME"
        @input="getButton($event)"
        ref="inputTitle"
      ></v-text-field>
      <v-divider></v-divider>
      <v-text-field
        label="Название карточки"
        outlined
        clearable
        :value="CARD.EXTRA_TITLE"
        @input="getExTitle($event)"
        ref="inputTitle"
      ></v-text-field>
      <v-divider></v-divider>
      <v-text-field
        label="Название текста"
        outlined
        clearable
        :value="CARD.TITLE"
        @input="getTitle($event)"
        ref="inputTitle"
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Описание"
        :value="CARD.TEXT"
        @input="getText($event)"
        ref="inputText"
      ></v-textarea>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="red" @click="close">
        <v-icon>mdi-pencil</v-icon>Отменить
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="green darken-1"
        :disabled="isActive"
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
  name: "modal_tabs",

  props: ["CARD"],

  data() {
    return {
      button: "",
      extra: "",
      title: "",
      text: "",
      isActive: true,
      loading: false,
    };
  },
  methods: {
    getButton(e) {
      this.isActive = false;
      e == null ? (this.button = this.CARD.BUTTON_NAME) : (this.button = e);
    },
    getExTitle(e) {
      this.isActive = false;
      e == null ? (this.extra = this.CARD.EXTRA_TITLE) : (this.extra = e);
    },
    getTitle(e) {
      this.isActive = false;
      e == null ? (this.title = this.CARD.TITLE) : (this.title = e);
    },
    getText(e) {
      this.isActive = false;
      e == null ? (this.text = this.CARD.TEXT) : (this.text = e);
    },
    close() {
      this.$emit("close");
    },
    async saveContent() {
      this.loading = true;
      const ctx = {
        button:
          this.button == ""
            ? (this.button = this.CARD.BUTTON_NAME)
            : (this.button = this.button),
        extra:
          this.extra == ""
            ? (this.extra = this.CARD.EXTRA_TITLE)
            : (this.extra = this.extra),
        title:
          this.title == ""
            ? (this.title = this.CARD.TITLE)
            : (this.title = this.title),
        text:
          this.text == ""
            ? (this.text = this.CARD.TEXT)
            : (this.text = this.text),
      };
      this.$store.commit("crmSetting/EDIT_TABS", ctx);
      await this.$store.dispatch("crm/ADD_ON_DATABASE");
      this.loading = false;
      this.$emit("close");
    },
  },
};
</script>