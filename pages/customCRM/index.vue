<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-img class="img my-15" src="img/customCRM/logo.png"></v-img>
      </v-row>
      <h1 class="text-center my-4 text-h4 font-weight-light">
        Добро пожаловать в кастомную СРМ систему!
      </h1>
      <p class="text-center mt-6 text-body-1 font-weight-light">
        Здесь вы можете редактировать ваш контент на основном сайте, применять
        СЕО оптимизацию.
      </p>
      <v-divider></v-divider>
      <p class="text-center mt-4 text-subtitle-1 font-weight-light">
        <v-icon class="mx-3">mdi-check-outline </v-icon>В данной версии доступно
        изменение текстового контента сайта.
      </p>
      <p class="text-center mt-4 text-subtitle-1 font-weight-light">
        <v-icon class="mx-3">mdi-check-outline </v-icon>Добавление необходимых карточек у
        динамических компонентов.
      </p>
      <v-divider></v-divider>
      <v-row justify="center" align="center" class="mt-6">
        <v-col cols="8">
          <p class="text-center mt-2 text-subtitle-1 font-weight-light">
            <v-icon class="mx-3">mdi-semantic-web </v-icon>
            Подробную информацию вы можете узнать на Github
          </p>
        </v-col>
        <v-col>
          <div class="text-center text-md-left">
            <v-btn outlined class="font-weight-light"
              ><v-icon class="mr-3">mdi-github</v-icon>Github</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  layout: "customCRM",
};
</script>

<style lang="scss" scoped>
.img {
  min-width: 50px;
  max-width: 220px;
  object-fit: cover;
}
</style>