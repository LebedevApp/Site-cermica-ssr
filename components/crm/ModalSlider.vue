<template>
  <v-card>
    <v-container>
      <h2>{{ content.title }}</h2>
      <v-divider></v-divider>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Описание"
        :value="content.text"
        @change="moveText($event)"
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
  props: ["content"],
  data() {
    return {
      text: null,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    moveBlock() {
      if (this.text != null) {
        this.$store.commit("crmSetting/saveBlock", this.text);
      }
      this.$emit("saveSlider");
    },
    moveText(e) {
      this.text = e;
    },
  },
};
</script>