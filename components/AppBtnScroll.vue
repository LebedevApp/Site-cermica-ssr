<template>
  <v-btn class="mx-2 scroll" fab dark color="blue" @click="scrollTo">
    <v-icon size="36" class="ml-1" dark> mdi-arrow-up-bold  </v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    scrollTo() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  position: fixed;
  bottom: 5%;
  right: 1%;
  z-index: 25;
}
</style>