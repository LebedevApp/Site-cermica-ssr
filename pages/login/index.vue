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
          <v-text-field
            class="text-subtitle-1 font-weight-light"
            label="Email"
            placeholder="Email"
            outlined
            clearable
            prepend-inner-icon="mdi-at"
          ></v-text-field>
          <v-text-field
            class="text-subtitle-1 font-weight-light"
            label="Password"
            placeholder="Password"
            outlined
            clearable
            prepend-inner-icon="mdi-lock-outline "
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
              to="/customCRM"
              outlined
              color="blue darken-1"
              class="font-weight-light"
              ><v-icon class="mx-1">mdi-login</v-icon>Логин</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "login",

  layout: "login",
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
    filter: blur(5px);
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