<template>
  <section class="custom-carousel">
    <transition name="slide" appear mode="out-in" >
      <v-img
        class="custom-carousel_img"
        :src="slider.img"
        v-for="(slider, i) in sliders"
        :key="i"
        eager
        v-if="i === idx"
      >
        <div class="gradient ma-n-2">
          <v-row
            justify="center"
            align="center"
            class="ma-0"
            style="width: 100%; height: 81vh"
          >
            <v-col class="content" cols="8">
              <v-list color="rgba(0,0,0,0)">
                <v-list-item-content>
                  <h1
                    class="white--text text-h6 text-md-h2 text-center font-weight-medium"
                  >
                    <span
                      class="light-blue--text text-h6 text-md-h2 font-weight-black"
                      >{{ slider.title.split("").slice(0, 3).join("") }}</span
                    >{{ slider.title.split("").splice(3).join("") }}
                  </h1>
                </v-list-item-content>
                <v-list-item-content
                  class="text-carousel white--text text-body-2 text-md-h6 font-weight-medium text-center mt-n3"
                >
                  {{ slider.description }}
                </v-list-item-content>
              </v-list>
            </v-col>
          </v-row>
          <div class="text-center btn mt-n16">
            <v-btn rounded color="btn light-blue" dark :to="slider.to"
              >Подробней</v-btn
            >
          </div>
        </div>
      </v-img>
    </transition>

    <div class="custom-carousel_nav-link">
      <div
        class="nav-link_btn-item my-2"
        v-for="(slide, i) in sliders"
        :key="i"
        @click="change_slide(slide, i)"
        :class="{ active: i === idx }"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'carousel',

  props: {
    sliders: {
      type: Array,
      require: true
    }
  },
  
  data() {
    return {
      idx: 1,
      show: true,
      slide: null,
      timout: 10000,
      
    };
  },

  watch: {
    idx() {
      if (this.idx > 3) {
        this.idx = 0;
      }
    },
  },

  created() {
    this.slide = this.sliders.find((item, i) => {
      if (this.idx === i) {
        return item;
      }
    });
    this.setTime();
  },

  methods: {
    change_slide(slide, i) {
      this.idx = i;
      this.slide = slide;
    },
    setTime() {
      setInterval(() => {
        this.idx++;
      }, this.timout);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-carousel {
  position: relative;
  width: 100%;
  height: 80vh;
  &_nav-link {
    position: absolute;
    z-index: 25;
    top: 50%;
    left: 5%;
    transform: translateY(-30%);
  }
  &_img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
}
.nav-link_btn-item {
  width: 20px;
  height: 20px;
  background-color: white;
  border: 3px solid rgb(4, 138, 248);
  border-radius: 50%;
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
@media (max-height: 340px) {
  .text-carousel {
    display: none;
  }
}
@media (max-width: 340px) {
  .text-carousel {
    display: none;
  }
}
.active {
  background-color: rgba(0, 0, 0, 0.1);
  border: 3px solid rgba(4, 138, 248, 0.9);
  transition: all ease-in-out 1s;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-to {
  opacity: 1;
  transition: all 0.6s;
}
.slide-leave {
  opacity: 1;
}
.slide-leave-to {
  opacity: 0;
  transition: all 0.6s;
}
</style>