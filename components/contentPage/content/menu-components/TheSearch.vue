<template>
  <section>
    <v-container>
      <div v-if="search.length > 0">
        <v-row align="center">
          <v-col cols="12" sm="4" v-for="(card, i) in search" :key="i">
            <app-card :card="card" @closeMenu="closeMenu" />
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <p
          class="
            my-1 my-md-3
            font-weight-light
            text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center
          "
        >
          К сожалению ничего не найдено
        </p>
      </div>
    </v-container>
  </section>
</template>

<script>
import AppCard from "@/components/contentPage/content/cards-components/CardSearch";

export default {
  name: "search",

  components: {
    AppCard,
  },

  computed: {
    search() {
      return this.$store.getters["search/GET_DATA"];
    },
  },

  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>