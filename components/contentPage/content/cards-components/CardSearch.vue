<template>
  <v-card class="my-3" min-height="350" style="cursor: pointer" @click="toArticle">
    <v-img height="200" :src="card.img"></v-img>
    <v-card-text>{{card.title}}</v-card-text>
    <v-divider></v-divider>
    <v-card-text>{{ card.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "card_search",

  props: {
    card: {
      type: Object,
    },
  },

  methods: {
    toArticle() {
      this.$router.push({
        path: "/article/" + this.card.title,
        query: this.card,
      });
      this.$emit('closeMenu')
    },
  },
};
</script>