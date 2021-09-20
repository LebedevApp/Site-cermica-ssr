<template>
  <v-card class="rounded-xl">
    <div class="headr">
      <p class="headline pt-3 text-h6 white--text text-center">
        Заказать обратный звонок
      </p>
    </div>

    <v-divider></v-divider>

    <v-container>
      <v-form @submit.prevent="post" ref="callBack">
        <v-card-text class="mb-n5">
          <p class="text-center">С кем вы хотите связаться?</p>
          <v-radio-group
            v-model="radio"
            mandatory
            column
            @blur="$v.radio.$touch()"
          >
            <v-radio
              v-for="(card, i) in contact"
              :key="i"
              :label="card.prof"
              :value="card"
            ></v-radio>
          </v-radio-group>
          <v-text-field
            label="Введите имя"
            placeholder="Ваше имя?"
            outlined
            dense
            type="text"
            v-model="name"
            @blur="$v.name.$touch()"
            :error-messages="getError($v.name)"
          ></v-text-field>
          <v-text-field
            label="Введите телефон"
            placeholder="Ваш номер телефона?"
            outlined
            dense
            type="phone"
            v-mask="'+ # (###) ###-##-##'"
            v-model="phone"
            @blur="$v.phone.$touch()"
            :error-messages="getError($v.phone)"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="mt-2">
          <v-btn color="red darken-1" outlined text @click="close">
            Назад
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            outlined
            :disabled="$v.$invalid"
            :loading="loading"
            text
            type="submit"
          >
            Заказать
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "card_call",

  computed: {
    contact() {
      return this.$store.getters["GET_CONTACT_INFO"].tel;
    },
  },

  data() {
    return {
      phone: "",
      name: "",
      radio: null,
      loading: false,
    };
  },

  validations: {
    name: {
      required,
    },
    phone: {
      required,
      minLength: minLength(19),
    },
    radio: {
      required,
    },
  },

  methods: {
    async post() {
      const message = {
        name: this.name,
        phone: this.phone,
        radio: this.radio,
      };
      await fetch("/server/index", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          message: message,
        }),
      })
        .then((response) => {
          this.close();
          return response.json();
        })
        .then((data) => {
          console.log(
            "is send? (" + data.success + ") message: " + data.message
          );
          this.close();
        });
    },
    close() {
      this.$emit("closeDialog");
    },
    getError(validations) {
      const errors = [];
      if (!validations.$dirty) return errors;
      if (!validations.required) {
        errors.push("Заполние поле");
        return errors;
      } else if (
        !validations.minLength &&
        validations.hasOwnProperty("minLength")
      ) {
        errors.push("Корректно заполните поле");
        return errors;
      }
      return errors;
    },
    onSubmit() {
      let obj = {};
      if (this.$refs.callBack.validate()) {
        obj = {
          name: this.name,
          phone: this.phone,
          radio: this.radio,
        };
      }
      console.log(obj);
    },
  },
};
</script>

<style lang="scss" scoped>
.headr {
  background-color: rgb(82, 143, 255);
  width: 100%;
  height: 50px;
}
</style>