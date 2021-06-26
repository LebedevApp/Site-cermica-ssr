<template>
  <section class="my-5 channelbox section-time-line">
    <div>
      <v-container>
      <v-list-item-title class="text-button font-weight-bold grey--text">Наши события</v-list-item-title>
        <VueSlickCarousel v-bind="settings" ref="carousel">
          <div v-for="(card, i) in cards" :key="i">
            <v-card class="ma-3" min-width="250" max-width="350" flat>
              <v-card-title
                class="subtitle text-body-2 text-md-h6 text-center text-md-left"
                >{{ card.subtitle }}  <v-divider class="mx-8"></v-divider></v-card-title
              >
              <v-img class="img" :src="card.img" alt=""> </v-img>
              <v-card-text>
                <v-card-title
                  class="text-body-2 text-md-h6 text-center text-md-left"
                  >{{ card.title }}</v-card-title
                >
                <v-card-subtitle>{{ card.text }}</v-card-subtitle>
              </v-card-text>
             
            </v-card>
          </div>
        </VueSlickCarousel>
        <v-list-item class="mt-4">
          <v-btn class="mx-4" icon dark color="light-blue" @click="prev">
            <v-icon dark size="48"> mdi-arrow-left-circle </v-icon>
          </v-btn>
          <v-btn class="mx-4" icon dark color="light-blue" @click="next">
            <v-icon dark size="48"> mdi-arrow-right-circle </v-icon>
          </v-btn>
        </v-list-item>
      </v-container>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: 'time-line',

  components: {
    VueSlickCarousel,
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
      cards: [
        {
          id: 1,
          img: "img/pexels-marian.jpg",
          subtitle: "Март 2019",
          title: "Событие",
          text:
            "GM reimagines existing assembly plant to create Factory ZERO, solely dedicated to electric vehicles and autonomous vehicles.",
        },
        {
          id: 2,
          img: "img/pexels-marian.jpg",
          subtitle: "Январь 2019",
          title: "Событие",
          text:
            "A shared mobility experience where self-driving is fueled by cutting-edge artificial intelligence.",
        },
        {
          id: 3,
          img: "img/pexels-marian.jpg",
          subtitle: "Феврвль 2018",
          title: "Событие",
          text:
            "GM begins a relationship with San Francisco-based start-up Cruise to accelerate AV deployment.",
        },
        {
          id: 4,
          img: "img/pexels-marian.jpg",
          subtitle: "Сентябрь 2020",
          title: "Событие",
          text:
            "Cruise and GM team up with Microsoft to accelerate the commercialization of self-driving vehicles.",
        },
        {
          id: 5,
          img: "img/pexels-marian.jpg",
          subtitle: "Май 2021",
          title: "Событие",
          text:
            "Cruise began operating its self-driving test vehicles on the streets of San Francisco without a driver behind the wheel.",
        },
      ],
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
.img {
  width: 100%;
}
</style>