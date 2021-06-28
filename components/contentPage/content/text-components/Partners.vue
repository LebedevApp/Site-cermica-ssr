<template>
  <section class="partners mb-8" style="background: #75c1ff">
    <v-container>
      <v-row class="py-3" align="center">
        <v-col cols="12" lg="5" md="5" sm="12">
          <v-list color="rgba(0,0,0,0)">
            <v-list-item-content class="white--text">
              <v-list-item-title
                class="ml-2 text-body-1 text-lg-h4 font-weight-black text-center text-md-right white--text"
                >{{ content.title }}</v-list-item-title
              >
              <v-list-item-action-text
                class="my-1 my-md-3 font-weight-light text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center text-md-right"
                >{{ content.text }}</v-list-item-action-text
              >
              <v-list-item-subtitle
                class="my-1 my-md-3 font-weight-regular text-caption text-center text-md-right"
              >
                {{ content.description }}
                <v-icon color="white" class="ml-3"
                  >mdi-star</v-icon
                ></v-list-item-subtitle
              >
            </v-list-item-content>
            <div class="text-center text-md-right">
              <v-btn class="mx-auto" outlined color="white" :to="content.to">
                Подробней
              </v-btn>
            </div>
          </v-list>
        </v-col>
        <v-col
          cols="12"
          lg="7"
          md="7"
          sm="12"
          class="desctop"
          style="perspective: 1000px"
        >
          <div
            class="card3d px-10 py-16"
            @mousemove="create3d"
            @mouseleave="stop3d"
            @mouseenter="start3d"
          >
            <div class="card3d_map" ref="map">
              <img class="img" :src="icons.map" alt="" ref="img" />
              <img
                :src="icons.gas"
                alt=""
                class="ros"
                ref="ros"
              />
              <img
                :src="icons.mvd"
                alt=""
                class="gas"
                ref="gas"
              />
            </div>
          </div>
        </v-col>

        <v-col
          cols="12"
          lg="7"
          md="7"
          sm="12"
          class="mobile"
        >
          <img :src="icons.map" alt="" class="img" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'parners',

  props: ["content"],
  
  data() {
    return {
      icons: {
        map: 'russia-map.png',
        gas: 'ru_wikipedia_org_-min.jpg',
        mvd: '1061px-Flag_of_N.png'

      }
    };
  },
  methods: {
    create3d(e) {
      let xAxis = ((window.innerWidth + 2350) / 2 - e.pageY) / 10;
      let yAxis = ((window.innerWidth + 500) / 2 - e.pageX) / 10;
      this.$refs.map.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
      this.$refs.ros.style.boxShadow = `${yAxis}px ${xAxis}px 20px rgba(0,0,0,0.5)`;
      this.$refs.gas.style.boxShadow = `${yAxis}px ${xAxis}px 20px rgba(0,0,0,0.5)`;
    },
    stop3d() {
      this.$refs.map.style.transform = `rotateY(0deg) rotateX(0deg)`;
      this.$refs.map.style.transition = "all .5s ease";
      //this.$refs.title.style.transform = 'translateZ(0px)'
      this.$refs.ros.style.transform = "translateZ(0px)";
      this.$refs.ros.style.boxShadow = "none";
      this.$refs.ros.style.width = "50px";
      this.$refs.ros.style.height = "50px";
      this.$refs.ros.style.top = "5%";
      this.$refs.ros.style.left = "35%";
      this.$refs.gas.style.boxShadow = "none";
      this.$refs.gas.style.width = "50px";
      this.$refs.gas.style.height = "50px";
      this.$refs.gas.style.top = "5%";
      this.$refs.gas.style.left = "5%";
      this.$refs.img.style.transform = "translateZ(0px)";
      //this.$refs.btn.style.transform = 'translateZ(0px)'
    },
    start3d() {
      this.$refs.map.style.transition = "none";
      //this.$refs.title.style.transform = 'translateZ(100px)'
      this.$refs.ros.style.transform = "translateZ(40px) scaleZ(2.0)";
      //this.$refs.ros.style.boxShadow = '0 0px 20px'
      this.$refs.ros.style.width = "70px";
      this.$refs.ros.style.height = "70px";
      this.$refs.ros.style.top = "35%";
      this.$refs.ros.style.left = "25%";
      this.$refs.gas.style.width = "70px";
      this.$refs.gas.style.height = "70px";
      this.$refs.gas.style.top = "55%";
      this.$refs.gas.style.left = "8%";
      this.$refs.img.style.transform = "translateZ(80px)";
      //this.$refs.btn.style.transform = 'translateZ(50px)'
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
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

@media (max-width: 1025px) {
  .desctop {
    display: none;
  }
}

@media (min-width: 1025px) {
  .mobile {
    display: none;
  }
}
</style>