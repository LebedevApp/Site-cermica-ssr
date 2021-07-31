<template>
  <section class="works">
    <v-card tile img="img/article/back-main.jpg">
      <div class="gradient py-5">
        <v-container>
          <v-card-title
            class="text-body-1 text-md-h4 font-weight-bold white--text"
            >Статьи</v-card-title
          >
          <div>
            <VueSlickCarousel v-bind="settings" ref="carousel">
              <div v-for="card in cards" :key="card.title">
                <v-card class="ma-3" min-width="250" max-width="350">
                  <v-img class="img" :src="card.img" alt=""> </v-img>
                  <v-card-text style="position: relative">
                    <v-card-title
                      class="text-body-2 text-md-h6 text-center text-md-left"
                      >{{ card.title }}</v-card-title
                    >
                    <v-card-subtitle>{{ card.description }}</v-card-subtitle>
                    <div class="btn text-center text-md-right">
                      <v-btn
                        class="mb-3 mr-4"
                        rounded
                        color="blue darken-2"
                        dark
                        x-large
                        elevation="10"
                        to="/article"
                        ><v-icon size="36" class="mr-2">
                          mdi-book-open-page-variant
                        </v-icon>
                        Читать</v-btn
                      >
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </VueSlickCarousel>
            <v-list-item class="mt-4">
              <v-btn class="mx-4" icon dark color="white" @click="prev">
                <v-icon dark size="48"> mdi-arrow-left-circle </v-icon>
              </v-btn>
              <v-btn class="mx-4" icon dark color="white" @click="next">
                <v-icon dark size="48"> mdi-arrow-right-circle </v-icon>
              </v-btn>
            </v-list-item>
          </div>
        </v-container>
      </div>
    </v-card>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "AppCaorusel",

  components: { VueSlickCarousel },

  props: {
    cards: {
      type: Array,
      require: true
    }
  },

  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style lang="scss" scoped>
.gradient {
  background: rgba(0, 0, 0, 0.4);
}
.img {
  width: 100%;
}
</style>