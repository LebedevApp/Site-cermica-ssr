<template>
  <v-card>
    <v-container>
      <v-text-field
        label="Название карточки"
        outlined
        clearable
        :value="CONTENT.TITLE"
        @input="saveTitle($event)"
        ref="inputTitle"
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Описание"
        :value="CONTENT.TEXT"
        @input="saveText($event)"
        ref="inputText"
      ></v-textarea>

      <v-spacer></v-spacer>
      <v-btn class="ma-2" outlined color="red" @click="close">
        <v-icon>mdi-pencil</v-icon>Отменить
      </v-btn>
      <v-btn class="ma-2"  outlined color="green darken-1" :disabled='isActive' :loading="loading" @click="saveContent">
        <v-icon>mdi-pencil</v-icon>Применить
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "modal_img",

  props: ["CONTENT"],

  data() {
    return {
      title: "",
      text: "",
      isActive: true,
      loading: false
    };
  },
  
  methods: {
    close() {
      this.$emit("close");
    },
    saveTitle(e) {
      this.isActive = false
      e == null ? (this.title = this.CONTENT.TITLE) : (this.title = e);
    },
    saveText(e) {
      this.isActive = false
      e == null ? (this.text = this.CONTENT.TEXT) : (this.text = e);
    },
    async saveContent() {
      this.loading = true
        const ctx = {
            title: this.title == '' ? (this.title = this.CONTENT.TITLE) : (this.title = this.title),
            text: this.text == '' ? (this.text = this.CONTENT.TEXT) : (this.text = this.text),
        }
        console.log(ctx)
        await this.$store.dispatch('crmSetting/EDIT_CONTENT_IMG', ctx)
        await this.$store.dispatch('crm/ADD_ON_DATABASE')
        this.$store.commit('crmSetting/CLEAN')
        this.$emit("close");
        this.loading = false
    }
  },
};
</script>