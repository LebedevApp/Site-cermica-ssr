<template>
  <section class="channelbox">
    <div>
      <VueSlickCarousel v-bind="settings">
        <div v-for="(card, i) in content" :key="i">
          <v-card flat width="150">
            <v-img class="ma-2" :src="card.img"></v-img>
          </v-card>
        </div>
        
      </VueSlickCarousel>
    </div>
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
    settings: {
      type: Object
    }
  },

  components: {
    VueSlickCarousel,
  },

  data() {
    return {
      currentSlide: 0,
      
    };
  },

  methods: {
    prev() {
      if (this.currentSlide <= 0) {
        this.currentSlide = this.content.length - 1;
      } else {
        this.currentSlide--;
      }
    },
    next() {
      if (this.currentSlide >= this.content.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.channelbox {
  position: relative;
}
.arrow {
  position: absolute;
  bottom: 0;
  right: 0;
}
.wrapper {
  overflow: hidden;
  height: 350px;
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