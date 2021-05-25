<template>
  <div class="carouselBlock">
    <VueSlickCarousel v-bind="settings" ref="carousel" @click="bugs">
      
      <!-- slders one -->

      <div>
        <v-img class="img" :src="sliders.slide_one.img">
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
                      >{{ sliders.slide_one.title.split("").slice(0, 3).join("") }}</span
                    >{{ sliders.slide_one.title.split("").splice(3).join("") }}
                  </h1>
                </v-list-item-content>
                <v-list-item-content
                  class="white--text text-body-2 text-md-h6 font-weight-medium text-center mt-n3"
                >
                  {{ sliders.slide_one.text }}
                </v-list-item-content>
              </v-list>
            </v-col>
          </v-row>
          <div class="text-center btn mt-n16">
            <v-btn rounded color="btn light-blue" dark @click="bugs(sliders.slide_one)"
              >Подробней</v-btn
            >
          </div>
        </v-img>
      </div>
      
      <!-- slders two -->
      
      <div>
        <v-img class="img" :src="sliders.slide_two.img">
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
                      >{{ sliders.slide_two.title.split("").slice(0, 3).join("") }}</span
                    >{{ sliders.slide_two.title.split("").splice(3).join("") }}
                  </h1>
                </v-list-item-content>
                <v-list-item-content
                  class="white--text text-body-2 text-md-h6 font-weight-medium text-center mt-n3"
                >
                  {{ sliders.slide_two.text }}
                </v-list-item-content>
              </v-list>
            </v-col>
          </v-row>
          <div class="text-center btn mt-n16">
            <v-btn rounded color="btn light-blue" dark  @click="bugs(sliders.slide_two)"
              >Подробней</v-btn
            >
          </div>
        </v-img>
      </div>
      
      <!-- slders trhee -->
      
      <div>
        <v-img class="img" :src="sliders.slide_three.img">
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
                      >{{ sliders.slide_three.title.split("").slice(0, 3).join("") }}</span
                    >{{ sliders.slide_three.title.split("").splice(3).join("") }}
                  </h1>
                </v-list-item-content>
                <v-list-item-content
                  class="white--text text-body-2 text-md-h6 font-weight-medium text-center mt-n3"
                >
                  {{ sliders.slide_three.text }}
                </v-list-item-content>
              </v-list>
            </v-col>
          </v-row>
          <div class="text-center btn mt-n16">
            <v-btn rounded color="btn light-blue" dark @click="bugs(sliders.slide_three)"
              >Подробней</v-btn
            >
          </div>
        </v-img>
      </div>
      
      <!-- slders for -->
      
      <div>
        <v-img class="img" :src="sliders.slide_for.img">
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
                      >{{ sliders.slide_for.title.split("").slice(0, 3).join("") }}</span
                    >{{ sliders.slide_for.title.split("").splice(3).join("") }}
                  </h1>
                </v-list-item-content>
                <v-list-item-content
                  class="white--text text-body-2 text-md-h6 font-weight-medium text-center mt-n3"
                >
                  {{ sliders.slide_for.text }}
                </v-list-item-content>
              </v-list>
            </v-col>
          </v-row>
          <div class="text-center btn mt-n16">
            <v-btn rounded color="btn light-blue" dark @click="bugs(sliders.slide_for)"
              >Подробней</v-btn
            >
          </div>
        </v-img>
      </div>
      <template #customPaging="page">
        <div class="rond" :class="page"></div>
      </template>
    </VueSlickCarousel>
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
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
      sliders: {
        slide_one: {
          img: "img/DSC_6025-min.jpg",
          text:
            "Разработка и производство керамических фильтров для разделения и очистки жидких и газообразных сред!",
          title: "Пористая керамика",
          to: "/porousCeramics",
        },
        slide_two: {
          img: "img/DSC_6036-min.jpg",
          text: "Производство микро и ультрафильтрационных керамических мембранных фильтров. Проектирование и изготовление экспериментальных и промышленных установок микро и ультрафильтрации. Консультации по вопросам мембранного разделения.",
          title: "Керамические мембраны",
          to: "/ceramicMembranes",
        },
        slide_three: {
          img: "img/_DSC9903-min.jpg",
          text: "Проектирование и производство стационарных и мобильных установок водоподготовки на основе технологии озоноультрафильтрации с применением  керамических мембранных фильтроэлементов.",
          title: "Современные технологии водоподготовки",
          to: "/waterTreatment",
        },
        slide_for: {
          img: "img/e41c130f622f6a21470226ceafd06af3-min.jpg",
          text: "Проведение лабораторных испытаний мембранного разделения жидкостей. Очистки и  концентрирования содержащихся веществ. Подбор и определение производительности керамических мембран на продукте заказчика. Исследования и разработка способов регенерации мембранных фильтров.",
          title: "Лабораторные исследования разделения растворов",
          to: "/research",
        },
      },
    };
  },
  computed: {},
  methods: {
    goTo(i) {
      //console.log(i)
      this.$refs.carousel.goTo(i);
      //this.$refs.dot
      console.log(this.$refs.dota);
      //console.log(this.$refs.carousel)
      //this.$refs.dot[i].className = "active";
    },
   
  },
  name: "AppCaorusel",
  components: { VueSlickCarousel },
};
</script>

<style lang="scss" scoped>
.btn {
}
.rond {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid rgb(4, 138, 248);
}
.slick-active > .rond {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(247, 247, 247, 0.884);
  border: 3px solid rgb(250, 55, 55);
}
.slick-dots {
  top: 50%;
  left: 5%;
  z-index: 20;
  transform: translateY(-25%);
}
::v-deep .slick-slide {
  height: 85vh;
}
::v-deep .slick-dots {
  top: 50%;
  left: 0%;
  z-index: 20;
  transform: translateY(-8%);
  width: 0;
  //transform: scaleY(-50%);

  li {
    width: 25px;

    @media (max-width: 750px) {
      display: none;
    }
  }
}
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