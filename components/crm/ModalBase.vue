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
      <v-divider></v-divider>
      <v-text-field
        label="Дополнительный контент"
        prepend-inner-icon="mdi-cog-outline"
        outlined
        clearable
        :value="content.subtitle"
        @change="getSubtitle($event)"
        ref="inputSubtitle"
      ></v-text-field>
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
  props: ["content"], //Должен принимать обьект
  data() {
    return {
      text: null,
      title: null,
      subtitle: null,
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
        subtitle: this.subtitle
          ? this.subtitle
          : this.$refs.inputSubtitle.value,
      };
      
      this.$store.commit("crmSetting/saveContentBlock", obj);
      this.$emit("save");
    },
    getText(e) {
      this.text = e;
    },
    getTitle(e) {
      this.title = e;
    },
    getSubtitle(e) {
      this.subtitle = e;
    },
  },
};
</script>