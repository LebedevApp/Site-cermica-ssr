<template>
  <v-container>
    <h1 class="text-center">Главная страница</h1>

    <app-cards :cards="database.caorusel" name="Слайдер" />

    <app-cards :cards="database.cards" name="Карточки" />

    <app-content :card="database.content" name="Вступительный текст" />

    <app-content :card="database.content_block" name="Блок с контентом" />

    <app-content :card="database.partners_block" name="Партнерский блок" />

    <app-content :card="database.last_content_block" name="Блок с контентом" />
  </v-container>
</template>

<script>
import AppCards from "@/components/customCRM/Cards";
import AppContent from "@/components/customCRM/Content";

export default {
  name: "crm_main_page",

  layout: "customCRM",

  components: {
    AppCards,
    AppContent,
  },

  computed: {
    database() {
      return this.$store.getters["GET_MAIN_PAGE"];
    },
  },
};
</script>