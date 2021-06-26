<template>
  <v-container>
    <h1 class="text-center">Пористая керамика</h1>

    <app-content :card="database.content" name="Вступительный текст" />

    <app-content :card="database.content_block" name="Блок с контентом" />

    <app-content :card="database.our_servise" name="Наш сервис" />

    <app-cards :cards="database.characteristic" name="Характеристики" />

    <app-cards :cards="database.tab" name="Табы" />
  </v-container>
</template>

<script>
import AppCards from "@/components/customCRM/Cards";
import AppContent from "@/components/customCRM/Content";

export default {
  name: "crm_porous_ceramic_page",

  layout: "customCRM",

  components: {
    AppCards,
    AppContent,
  },

  computed: {
    database() {
      return this.$store.getters["GET_POROUS_CERAMIC_PAGE"];
    },
  },
};
</script>