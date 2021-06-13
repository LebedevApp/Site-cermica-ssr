<template>
  <v-card>
    <v-container>
      <v-text-field
        label="Название карточки"
        outlined
        clearable
        :value="CONTENT.CONTENT.CONTENT_BLOCK.TITLE"
        @input="getTitle($event)"
        ref="inputTitle"
      ></v-text-field>
      <v-divider></v-divider>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Описание"
        :value="CONTENT.CONTENT.CONTENT_BLOCK.TEXT"
        @input="getText($event)"
        ref="inputText"
      ></v-textarea>
      <v-divider></v-divider>
      <v-text-field
        label="Дополнительный контент"
        prepend-inner-icon="mdi-cog-outline"
        outlined
        clearable
        :value="CONTENT.CONTENT.CONTENT_BLOCK.DESCRIPTION"
        @input="getDescription($event)"
        ref="inputSubtitle"
      ></v-text-field>
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
  name: "modal_content",

  props: ["CONTENT"],

  data() {
      return {
          isActive: true,
          loading: false,
          title: '',
          text: '',
          description: ''
      }
  },

  methods: {
      close() {
          this.$emit('close')

      },
      async saveContent() {
          this.loading = true
          const ctx = {
              title: this.title == '' ? (this.title = this.CONTENT.CONTENT.CONTENT_BLOCK.TITLE) : (this.title = this.title),
              text: this.text == '' ? (this.text = this.CONTENT.CONTENT.CONTENT_BLOCK.TEXT) : (this.text = this.text),
              description: this.description == '' ? (this.CONTENT.CONTENT.CONTENT_BLOCK.DESCRIPTION) : (this.description = this.description),
          }
          this.$store.commit('crmSetting/EDIT_CONTENT', ctx)
          await this.$store.dispatch('crm/ADD_ON_DATABASE')
          this.loading = false
          this.$emit('close')
      },
      getTitle(e) {
          this.isActive = false
          e == null
        ? (this.title = this.CONTENT.CONTENT.CONTENT_BLOCK.TITLE)
        : (this.title = e);
      },
      getText(e) {
          this.isActive = false
          e == null
        ? (this.text = this.CONTENT.CONTENT.CONTENT_BLOCK.TEXT)
        : (this.text = e);
      },
      getDescription(e) {
          this.isActive = false
          e == null
        ? (this.description = this.CONTENT.CONTENT.CONTENT_BLOCK.DESCRIPTION)
        : (this.description = e);
      }

  }
};
</script>