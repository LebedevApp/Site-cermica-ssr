<template>
  <div class="carouselBlock">
    <VueSlickCarousel v-bind="settings">
      <div v-for="slide in page_slider.sliders" :key="slide.img">
        <v-img class="img" :src="slide.img">
          <div class="gradient"></div>
          <v-row justify="center" align="center">
            <v-col class="content" cols="10">
              <v-list color="rgba(0,0,0,0)">
                <v-list-item-content
                >
                <h1 class="white--text text-h6 text-md-h2 text-center font-weight-medium"><span class="light-blue--text text-h6 text-md-h2 font-weight-black">{{slide.title.split('').slice(0,3).join('')}}</span>{{ slide.title.split('').splice(3).join('') }}</h1>
                  
                </v-list-item-content>
                <v-list-item-content
                  class="white--text text-body-2 text-md-h6 font-weight-medium text-center"
                >
                  {{ slide.text }}
                </v-list-item-content>
                <div class="text-center my-8">
                  <v-btn rounded color="light-blue" dark> Подробней</v-btn>
                </div>
              </v-list>
            </v-col>
          </v-row>
        </v-img>
      </div>
    </VueSlickCarousel>
    
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ['page_slider'],
  data() {
    return {
      settings: {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    };
  },
  computed: {
    
  },
  name: "AppCaorusel",
  components: { VueSlickCarousel },
};
</script>

<style lang="scss" scoped>
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
  top: 50%;
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