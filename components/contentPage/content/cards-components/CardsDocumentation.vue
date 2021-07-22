<template>
  <v-card class="my-5">
    <v-container>
      <v-img height="200" :src="card.img"></v-img>
      <v-card-text>{{ card.title }}</v-card-text>
      <v-divider></v-divider>
      <div class="mt-4 mr-5">
        <v-btn outlined color="blue" @click="isOpen(card)"
          ><v-icon class="mr-2">mdi-book-open-outline </v-icon>Посмотреть</v-btn
        >
      </div>
      
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "card_document",

  props: {
    card: {
      type: Object,
    },
  },

  

  methods: {
    isOpen(card) {
      this.$emit('open', card)
    }
  }
};
</script>