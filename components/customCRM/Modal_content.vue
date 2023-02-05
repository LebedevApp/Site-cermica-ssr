<template>
  <v-card>
    <v-container>
      <v-text-field
        v-if="card.button_name"
        label="Название кнопки"
        outlined
        clearable
        v-model="button_name"
        @blur="$v.button_name.$touch()"
        :error-messages="getError($v.button_name)"
      ></v-text-field>

      <v-text-field
        v-if="card.date"
        label="Название кнопки"
        outlined
        clearable
        v-model="date"
        @blur="$v.date.$touch()"
        :error-messages="getError($v.date)"
      ></v-text-field>

      <v-divider></v-divider>

      <v-text-field
        v-if="card.title"
        label="Название карточки"
        outlined
        clearable
        v-model="title"
        @blur="$v.title.$touch()"
        :error-messages="getError($v.title)"
      ></v-text-field>

      <v-divider></v-divider>

      <v-text-field
        v-if="card.description"
        label="Описание карточки"
        prepend-inner-icon="mdi-cog-outline"
        outlined
        clearable
        v-model="description"
        @blur="$v.description.$touch()"
        :error-messages="getError($v.description)"
      ></v-text-field>

      <v-divider></v-divider>

      <v-textarea
        v-if="card.text"
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Текст карточки"
        v-model="text"
        @blur="$v.text.$touch()"
        :error-messages="getError($v.text)"
      ></v-textarea>

      <v-divider></v-divider>

      <v-textarea
        v-if="card.article"
        clearable
        counter
        clear-icon="mdi-close-circle"
        label="Статья"
        v-model="article"
        @blur="$v.article.$touch()"
        :error-messages="getError($v.article)"
      ></v-textarea>

      <v-divider></v-divider>

      <v-text-field
        v-if="card.imgs"
        label="Описание карточки"
        prepend-inner-icon="mdi-cog-outline"
        outlined
        clearable
        v-model="description"
        @blur="$v.description.$touch()"
        :error-messages="getError($v.description)"
      ></v-text-field>

      <v-card-actions>
        <v-btn class="ma-2" outlined color="red" @click="close">
          <v-icon>mdi-pencil</v-icon>Отменить
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
          class="ma-2"
          outlined
          color="green darken-1"
          :disabled="($v.$invalid)"
          :loading="loading"
          @click="editCard(card)"
        >
          <v-icon>mdi-pencil</v-icon>Применить
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Card from "@/js/cards.js";

export default {
  name: "modal_content",

  props: {
    card: {
      type: Object,
      require: true,
    },
  },

  created() {
    Object.keys(this.card).forEach((item) => {
        if(this.card[item]) {
          this[item] = this.card[item]
        }
      })
  },

  watch: {
    card() {
      Object.keys(this.card).forEach((item) => {
        if(this.card[item]) {
          this[item] = this.card[item]
        }
      })
    }
  },

  validations: {
    title: {
      required,
    },
    description: {
      required,
    },
    text: {
      required,
    },
    article: {
      required,
    },
    button_name: {
      required
    },
    date: {
      required
    }
  },

  data() {
    return {
      isActive: true,
      loading: false,
      title: "текст",
      text: "текст",
      description: "текст",
      article: "текст",
      button_name: "текст",
      date: 'текст'
    };
  },
  methods: {
    close() {
      Object.keys(this.card).forEach((item) => {
        if(this.card[item]) {
          this[item] = this.card[item]
        }
      })
      this.$store.commit("shared/CLEAN_CARD");
      this.$emit("close");
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
    editCard(card) {
      this.loading = true;
      const res = new Card(this.button_name,this.title,this.description,this.text,this.article, this.date)

      this.$store.commit("shared/CLEAN_CARD");
      this.$store.commit("shared/ADD_CARD", card);
      this.$store.commit("shared/EDIT_CARD", res);
      this.$store
        .dispatch("RE_CONTENT")
        .then(() => {
          this.loading = false;
          this.$emit("close");
        })
        .catch(() => {
          const err = "Не удалось загрузить";
          this.$store.commit("user/SET_ERRORS", err);
          this.loading = false;
        });
      this.loading = false;
    },
  },
};
</script>