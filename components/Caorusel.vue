<template>
  <div class="carouselBlock">
    <VueSlickCarousel v-bind="settings" ref="carousel">
      <div v-for="slide in page_slider.sliders" :key="slide.img">
        <v-img class="img" :src="slide.img">
          <div class="gradient"></div>
          <v-row justify="center" align="center">
            <v-col class="content" cols="10">
              <v-list color="rgba(0,0,0,0)">
                <v-list-item-content>
                  <h1
                    class="white--text text-h6 text-md-h2 text-center font-weight-medium"
                  >
                    <span
                      class="light-blue--text text-h6 text-md-h2 font-weight-black"
                      >{{ slide.title.split("").slice(0, 3).join("") }}</span
                    >{{ slide.title.split("").splice(3).join("") }}
                  </h1>
                </v-list-item-content>
                <v-list-item-content
                  class="white--text text-body-2 text-md-h6 font-weight-medium text-center mt-n3"
                >
                  {{ slide.text }}
                </v-list-item-content>
                <div class="text-center my-4">
                  <v-btn rounded color="light-blue" dark> Подробней</v-btn>
                </div>
              </v-list>
            </v-col>
          </v-row>
        </v-img>
      </div>
    </VueSlickCarousel>
    <div v-if="page_slider.sliders" class="all-dots">
      <div
        class="dots my-3"
        v-for="(slide, i) in page_slider.sliders"
        :key="i"
        @click="goTo(i)"
        ref="dot"
      ></div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["page_slider"],
  data() {
    return {
      settings: {
        dots: false,
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    };
  },
  computed: {},
  methods: {
    goTo(i) {
      //console.log(i)
      this.$refs.carousel.goTo(i);
      //console.log(this.$refs.carousel)
      //this.$refs.dot[i].className = "active";
    },
  },
  name: "AppCaorusel",
  components: { VueSlickCarousel },
};
</script>

<style lang="scss" scoped>
.all-dots {
  position: absolute;
  top: 50%;
  left: 5%;
  z-index: 20;
  transform: translateY(-25%);
}
.dots {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid rgba(117, 193, 255, 1);
}
@media (max-width: 1025px) {
  .all-dots {
    display: none;
  }
}
.carouselBlock {
  width: 100%;
  height: 80vh;
}
.img {
  object-fit: cover;
  height: 80vh;
  position: relative;
}
.content {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.gradient {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.15)
  );
}
</style>