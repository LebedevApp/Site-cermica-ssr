<template>
  <section>
    <div>
      <AppPartnerCarousel
        class="my-6"
        :settings="settings1"
        :content="slider"
      />
    </div>
    <section class="partners py-10" style="background: #75c1ff">
      <v-row class="py-3" align="center" justify="center">
        <v-col cols="12" lg="5" md="5" sm="12">
          <v-container>
            <v-list color="rgba(0,0,0,0)">
              <v-list-item-content class="white--text">
                <v-list-item-title
                  class="
                    ml-2
                    text-body-1 text-lg-h4
                    font-weight-black
                    text-center text-md-right
                    white--text
                  "
                  >{{ content.title }}</v-list-item-title
                >
                <v-list-item-action-text
                  class="
                    my-1 my-md-3
                    font-weight-light
                    text-caption
                    text-sm-body-2
                    text-md-body-2
                    text-xl-h6
                    text-center
                    text-md-right
                  "
                  >{{ content.text }}</v-list-item-action-text
                >
                <v-list-item-subtitle
                  class="
                    my-1 my-md-3
                    font-weight-regular
                    text-caption text-center text-md-right
                  "
                >
                  {{ content.description }}
                  <v-icon color="white" class="ml-3"
                    >mdi-star</v-icon
                  ></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list>
          </v-container>
        </v-col>

        <v-col cols="12" lg="7" md="7" sm="12" class="mobile visible">
          <v-container>
            <v-img :src="icons.map" alt="" class="img visible">
              <div class="circle_one">
                <div class="circle_two">
                  <div class="circle_three">
                    <div
                      class="
                        mt-6 mt-md-0
                        mb-n4 mb-md-0
                        circle
                        d-flex
                        justify-center
                        align-center
                      "
                    >
                      <div class="text-center">
                        <img height="120" class="logo" src="../../../../static/img/logo/logo-big.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-img>
          </v-container>
        </v-col>
      </v-row>
    </section>
    <div>
      <AppPartnerCarousel
        class="my-6"
        :settings="settings2"
        :content="slider"
      />
    </div>
  </section>
</template>

<script>
import AppPartnerCarousel from "@/components/contentPage/content/carousel/PartnersCaorusel.vue";

export default {
  name: "parners",

  props: ["content"],

  components: {
    AppPartnerCarousel,
  },

  computed: {
    slider() {
      return this.$store.getters["GET_PARTNERS"];
    },
  },

  data() {
    return {
      icons: {
        map: "russia-map.png",
      },
      settings1: {
        dots: false,
        arrows: false,
        infinite: true,
        initialSlide: 5,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        rtl: false,
        pauseOnHover: false,
        autoplaySpeed: 100,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      settings2: {
        dots: false,
        arrows: false,
        infinite: true,
        initialSlide: 2,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        pauseOnHover: false,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 100,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
  position: relative;
}
.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
}

.circle_one {
  width: 230px;
  height: 230px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 500px) {
  .circle_one, .circle_two,.circle_three {
    display: none;
  }
  .mobile {
    display: none;
  }
  
}

.circle_two {
  width: 310px;
  height: 310px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.circle_three {
  width: 400px;
  height: 400px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 959px) {
  .circle_one {
    border: none;
  }
  .circle_two, .circle_three {
    border: none;
  }
}
.visible {
  overflow: visible;
}

.ros {
  position: absolute;
  top: 5%;
  left: 35%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 1s ease-out;
}
.gas {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.75s ease-out;
}
.card3d {
  transition: all 0.5s ease-out;
  transform-style: preserve-3d;
  position: relative;

  &_map {
    transition: all 0.75s ease-out;
  }
}

.slider {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 50;
}

/*@media (max-width: 1025px) {
  .desctop {
    display: none;
  }
}

@media (min-width: 1025px) {
  .mobile {
    display: none;
  }
}*/
</style>