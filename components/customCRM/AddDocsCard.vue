<template>
<v-card>
  <v-container>
    <v-text-field
      label="ссылка на картинку"
      outlined
      clearable
      v-model="img"
      @blur="$v.img.$touch()"
      :error-messages="getError($v.img)"
    ></v-text-field>
    <v-text-field
      label="ссылка на документ"
      outlined
      clearable
      v-model="url"
      @blur="$v.url.$touch()"
      :error-messages="getError($v.url)"
    ></v-text-field>
    <v-textarea
      clearable
      counter
      clear-icon="mdi-close-circle"
      label="Название карточки"
      v-model="title"
      @blur="$v.title.$touch()"
      :error-messages="getError($v.title)"
    ></v-textarea>

    <v-card-actions>
      <v-btn class="ma-2" outlined color="red" @click="closeAddModal">
        <v-icon>mdi-pencil</v-icon>Отменить
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        class="ma-2"
        outlined
        color="green darken-1"
        :disabled="$v.$invalid"
        :loading="loading"
        @click="add"
      >
        <v-icon>mdi-pencil</v-icon>{{ docs ? "Изменить" : "Создать"}}
      </v-btn>
    </v-card-actions>
  </v-container>
</v-card>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddDocsCard",

  props: {
    docs: {
      type: Object,
      default: null
    }
  },

  validations: {
    title: {
      required,
    },
    url: {
      required,
    },
    img: {
      required,
    },
  },

  data() {
    return {
      loading: false,
      title: this.docs?.title || "",
      img: this.docs?.img || "",
      url: this.docs?.url || ""
    }
  },

  methods: {
    closeAddModal() {
      this.$emit("closeAddModal");
    },
    async add() {
      this.loading = true;
      const ctx = {
        id: this.docs?.id || new Date().getTime().toString(),
        img: this.img,
        title: this.title,
        url: this.url
      };

      try {
        await this.$store.dispatch("SAVE_DOCS", ctx)
      } catch (e) {
        this.$store.commit("user/SET_ERRORS", "Не удалось загрузить");
        console.error(e)
      } finally {
        this.loading = false;
        this.closeAddModal()
      }
    },
    getError(validations) {
      const errors = [];
      if (!validations.$dirty) return errors;
      if (!validations.required) {
        errors.push("Заполните поле");
        return errors;
      }
      return errors;
    },
  }
}
</script>

<style lang="scss" scoped>
</style>