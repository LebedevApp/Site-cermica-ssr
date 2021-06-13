<template>
  <v-card>
    <v-container>
      <v-text-field
        label="Название карточки"
        outlined
        clearable
        :value="CONTENT.CONTENT.OUR_SERVICE.EXTRA_TITLE"
        @input="getExtraTitle($event)"
        ref="inputTitle"
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Заголовок"
        :value="CONTENT.CONTENT.OUR_SERVICE.TITLE"
        @input="getTitle($event)"
        ref="inputText"
      ></v-textarea>
      <v-divider></v-divider>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Описание"
        :value="CONTENT.CONTENT.OUR_SERVICE.TEXT"
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
  name: "modal_service",

  props: ["CONTENT"],

  data() {
    return {
      isActive: true,
      loading: false,
      title: "",
      extra: "",
      text: "",
    };
  },

  methods: {
    getExtraTitle(e) {
      this.isActive = false;
      e == null
        ? (this.extra = this.CONTENT.CONTENT.OUR_SERVICE.EXTRA_TITLE)
        : (this.extra = e);
    },
    getTitle(e) {
      this.isActive = false;
      e == null
        ? (this.title = this.CONTENT.CONTENT.OUR_SERVICE.TITLE)
        : (this.title = e);
    },
    getText(e) {
      this.isActive = false;
      e == null
        ? (this.text = this.CONTENT.CONTENT.OUR_SERVICE.TEXT)
        : (this.text = e);
    },
    close() {
      this.$emit("close");
    },
    async saveContent() {
      this.loading = true;
      const ctx = {
        extra:
          this.extra == ""
            ? (this.extra = this.CONTENT.CONTENT.OUR_SERVICE.TITLE)
            : (this.extra = this.extra),
        title:
          this.title == ""
            ? (this.title = this.CONTENT.CONTENT.OUR_SERVICE.TEXT)
            : (this.title = this.title),
        text:
          this.text == ""
            ? (this.text = this.CONTENT.CONTENT.OUR_SERVICE.TITLE)
            : (this.text = this.text),
      };
      this.$store.commit('crmSetting/EDIT_SERVISE', ctx)
      await this.$store.dispatch('crm/ADD_ON_DATABASE')
      this.loading = false;
      this.$emit("close");
    },
  },
};
</script>