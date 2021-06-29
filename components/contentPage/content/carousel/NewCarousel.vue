<template>
  <section class="works" v-cloak>
    <v-card tile img="pexels-pixabay-209251-min.jpg">
      <div class="gradient py-5">
        <v-container>
          <v-card-title
            class="text-body-1 text-md-h4 font-weight-bold white--text"
            >Статьи</v-card-title
          >
          <div>
            <section id="app">
              <div class="wrapper d-flex">
                <div
                  class="wrapper_slide mx-10"
                  v-for="card in cards"
                  :key="card.title"
                  :style="{
                    transform: 'translateX(-' + 100 * currentSlide + '%)',
                  }"
                >
                  <v-card class="ma-3" min-width="250" max-width="350">
                    <v-img class="img" :src="card.img" alt=""> </v-img>
                    <v-card-text style="position: relative">
                      <v-card-title
                        class="text-body-2 text-md-h6 text-center text-md-left"
                        >{{ card.title }}</v-card-title
                      >
                      <v-card-subtitle>{{ card.description }}</v-card-subtitle>
                      <v-divider class="my-2"></v-divider>
                      <v-card-actions class="mb-n6 mt-n1">
                        <v-spacer></v-spacer>
                        <v-btn
                          class="mb-3"
                          rounded
                          color="blue darken-2"
                          dark
                          x-large
                          elevation="10"
                          @click="toArticle(card)"
                          ><v-icon size="36" class="mx-2">
                            mdi-book-open-page-variant
                          </v-icon>
                          Читать</v-btn
                        >
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
              <div class="control d-flex my-10">
                <v-btn class="mx-4" icon dark color="white" @click="prev">
                  <v-icon dark size="48"> mdi-arrow-left-circle </v-icon>
                </v-btn>
                <v-btn class="mx-4" icon dark color="white" @click="next">
                  <v-icon dark size="48"> mdi-arrow-right-circle </v-icon>
                </v-btn>
              </div>
            </section>
          </div>
        </v-container>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "caorusel_new",

  props: {
    cards: {
      type: Array,
      require: true,
    },
  },

  data() {
    return {
      currentSlide: 0,
    };
  },

  methods: {
    prev() {
      if (this.currentSlide <= 0) {
        this.currentSlide = this.cards.length - 1;
      } else {
        this.currentSlide--;
      }
    },
    next() {
      if (this.currentSlide >= this.cards.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
    toArticle(card) {
       this.$router.push({
        path: '/article/' + card.title,
        query: card,
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper_slide {
  transition: all ease-in-out 0.5s;
}
.gradient {
  background: rgba(0, 0, 0, 0.4);
}
.img {
  width: 100%;
}
</style>