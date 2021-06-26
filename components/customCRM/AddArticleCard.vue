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
        label="Название карточки"
        outlined
        clearable
        v-model="title"
        @blur="$v.title.$touch()"
        :error-messages="getError($v.title)"
      ></v-text-field>
      <v-divider class="my-3"></v-divider>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Описание карточки"
        v-model="description"
        @blur="$v.description.$touch()"
        :error-messages="getError($v.description)"
      ></v-textarea>
      <v-textarea
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Статья"
        v-model="article"
        @blur="$v.article.$touch()"
        :error-messages="getError($v.article)"
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
          <v-icon>mdi-pencil</v-icon>Создать
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "modal_add_time_line_card",

  props: {
    cards: {
      type: Array,
      require: true,
    },
  },

  validations: {
    title: {
      required,
    },
    description: {
      required,
    },
    article: {
      required,
    },
    img: {
      required,
    },
  },

  data() {
    return {
      loading: false,
      title: "",
      article: "",
      description: "",
      img: "https://demotivation.ru/wp-content/uploads/2020/06/EN6AlFYWoAA4ewo.jpg",
    };
  },

  methods: {
    closeAddModal() {
      this.$emit("closeAddModal");
    },
    add() {
      this.loading = true;
      const ctx = {
        img: this.img,
        title: this.title,
        article: this.article,
        description: this.description,
        arr: this.cards,
      };
      this.$store.dispatch("addCard/ADD_CARD", ctx);
      this.$store
        .dispatch("RE_CONTENT")
        .then(() => {
          this.loading = false;
          this.$emit("closeAddModal");
        })
        .catch(() => {
          const err = "Не удалось загрузить";
          this.$store.commit("user/SET_ERRORS", err);
          this.loading = false;
        });
        this.$store.commit('addCard/CLEAR_CARD')
        this.title = ''
        this.article = ''
        this.description = ''
      this.loading = false;
    },
    getError(validations) {
      const errors = [];
      if (!validations.$dirty) return errors;
      if (!validations.required) {
        errors.push("Заполние поле");
        return errors;
      }
      return errors;
    },
  },
};
</script>