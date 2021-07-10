<template>
  <v-card class="my-5">
    <v-container>
        <v-row align="center" justify="center">
            <h2 class="ml-15 pt-4">{{ card.title }}</h2>
            <v-spacer></v-spacer>
            <div class="mt-4 mr-5">
                <v-btn outlined color="blue" @click="isOpen = !isOpen"><v-icon class="mr-2">mdi-book-open-outline </v-icon>Читать</v-btn>
            </div>
        </v-row>
      <v-container>
        <iframe
          class="my-5"
          v-if="isOpen"
          height="600"
          :src="card.link"
          width="100%"
        ></iframe>
      </v-container>
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

  data() {
    return {
      isOpen: false,
    };
  },
};
</script>