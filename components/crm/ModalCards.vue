<template>
  <v-card>
    <v-container>
      <v-text-field
        label="Название карточки"
        outlined
        clearable
        :value="content.title"
        @change="getTitle($event)"
        ref="inputTitle"
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Описание"
        :value="content.text"
        @change="getText($event)"
        ref="inputText"
      ></v-textarea>
      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="red" @click="close">
        <v-icon>mdi-pencil</v-icon>Отменить
      </v-btn>
      <v-btn class="ma-2" outlined color="green darken-1" @click="moveBlock">
        <v-icon>mdi-pencil</v-icon>Применить
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["content"], // Должен принимать обьект
  data() {
    return {
      text: null,
      title: null,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    moveBlock() {
      const obj = {
        text: this.text ? this.text : this.$refs.inputText.value,
        title: this.title ? this.title : this.$refs.inputTitle.value,
      };
      this.$store.commit("crmSetting/saveCard", obj);
      this.$emit("saveCard");
    },
    getText(e) {
      this.text = e;
    },
    getTitle(e) {
      this.title = e;
    },
  },
};
</script>