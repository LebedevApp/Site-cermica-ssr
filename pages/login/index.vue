<template>
  <div class="login">
    <v-img src="img/login/login.jpg" class="login_img"></v-img>
    <v-row class="login_card card" justify="center" align="center">
      <v-card
        min-width="300"
        min-height="300"
        elevation="15"
        class="rounded-xl"
      >
        <div class="card_header">
          <h1 class="text-center text-subtitle-1 pt-3 font-weight-light">
            Вход в систему
          </h1>
        </div>
        <v-divider></v-divider>
        <v-container class="mt-3">
          <v-form @submit.prevent="onSubmit" ref="form">
            <v-text-field
              class="text-subtitle-1 font-weight-light"
              label="Email"
              placeholder="Email"
              outlined
              clearable
              prepend-inner-icon="mdi-at"
              :error-messages="getError($v.email)"
              v-model="email"
              @blur="$v.email.$touch()"
              type="email"
            ></v-text-field>
            <v-text-field
              class="text-subtitle-1 font-weight-light"
              label="Password"
              placeholder="Password"
              outlined
              clearable
              prepend-inner-icon="mdi-lock-outline "
              type="password"
              :error-messages="getError($v.password)"
              v-model="password"
              @blur="$v.password.$touch()"
            ></v-text-field>

            <v-card-actions>
              <v-btn
                to="/"
                outlined
                color="blue darken-1"
                class="font-weight-light"
                ><v-icon class="mx-1">mdi-home</v-icon>Назад</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                outlined
                color="blue darken-1"
                class="font-weight-light"
                :disabled="$v.$invalid"
                :loading="loading"
                ><v-icon class="mx-1">mdi-login</v-icon>Логин</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "login",

  layout: "login",

  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },

  computed: {
    loading() {
      return this.$store.getters["user/GET_LOADING"];
    },
    isUserLogginIn() {
      return this.$store.getters["user/IS_USER_LIGGIN_IN"];
    },
  },

  created() {
    if(this.isUserLogginIn) {
      this.$router.push('/customCRM')
    }
  },

  data() {
    return {
      email: "info@ceramicfilter.ru",
      password: "Ceramic-filters-2021",
    };
  },

  methods: {
    getError(validations) {
      const errors = [];
      if (!validations.$dirty) return errors;
      if (!validations.required) {
        errors.push("Заполние поле");
        return errors;
      } else if (!validations.email && validations.hasOwnProperty("email")) {
        errors.push("Введите Email");
        return errors;
      }
      return errors;
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password,
        };
        this.$store
          .dispatch("user/LOGIN_USER", user)
          .then(() => this.$router.push("/customCRM"))
          .catch(() => {});
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  &_img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
    filter: blur(2px);
  }

  &_card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
}
.card {
  &_header {
    width: 100%;
    height: 50px;
  }
}
</style>