<template>
  <section class="my-5 channelbox section-time-line py-6">
    <v-container>
      <v-list-item-title class="text-button font-weight-bold grey--text"
        >Наши события</v-list-item-title
      >
    </v-container>

    <VueSlickCarousel v-bind="settings" ref="carousel">
      <div class="ma-3" v-for="(card, i) in content" :key="i">
        <v-card
            class="ma-3"
            min-width="250"
            max-width="350"
            height="600"
            flat
          >
          <v-card-title
              class="
                subtitle
                text-body-2 text-md-h6 text-center text-md-left
              "
              >{{ card.date }} <v-divider class="mx-8"></v-divider
          ></v-card-title>
          <v-img class="img" height="250" :src="card.img" alt=""> </v-img>
          <v-card-text>
            <v-card-title
                class="text-body-1 text-md-body-2 my-3 font-weight-bold text-center text-md-left"
                >{{ card.title }}</v-card-title
              >
            <v-card-subtitle>{{ card.description }}</v-card-subtitle>
          </v-card-text>
        </v-card>
      </div>
    </VueSlickCarousel>

    <v-container>
      <v-list-item class="mt-4">
        <v-btn class="mx-4" icon dark color="blue" @click="prev">
          <v-icon dark size="48"> mdi-arrow-left-circle </v-icon>
        </v-btn>
        <v-btn class="mx-4" icon dark color="blue" @click="next">
          <v-icon dark size="48"> mdi-arrow-right-circle </v-icon>
        </v-btn>
      </v-list-item>
    </v-container>
    
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "time-line",

  props: {
    content: {
      type: Array,
      require: true,
    },
  },

  components: {
    VueSlickCarousel
  },

  data() {
    return {
      currentSlide: 0,
      settings: {
        dots: false,
        arrows: false,
        infinite: true,
        initialSlide: 5,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        rtl: false,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
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
    prev() {
      this.$refs.carousel.prev()
    },
    next() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style lang="scss" scoped>
.section-time-line {
}
.wrapper_slide {
  transition: all ease-in-out 0.5s;
  width: 100%;
  height: 100%;
}
.gradient {
  background: rgba(0, 0, 0, 0.4);
}
.img {
  width: 100%;
}
</style>