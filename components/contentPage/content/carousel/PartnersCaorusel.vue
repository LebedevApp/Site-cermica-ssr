<template>
  <section class="channelbox">
    <div>
      <v-container>
        <section id="app">
          <div class="wrapper d-flex">
            <v-row
                align="center"
                justify="center"
              class="wrapper_slide mx-5 my-0"
              v-for="(card, i) in slider"
              :key="i"
              :style="{
                transform: 'translateX(-' + 100 * currentSlide + '%)',
              }"
            >
              <v-card
                
                width="250"
                color="white"
                flat
              >
              
                <v-img class="img" width="350" :src="card.img" alt=""> </v-img>
                <div class="text-center my-2">
                    <v-btn outlined color="light-blue">Подробней</v-btn>
                </div>
              </v-card>
            </v-row>
          </div>
        </section>

        <v-list-item class="mt-4 arrow">
          <v-btn class="mx-4" icon dark color="white" @click="prev">
            <v-icon dark size="48"> mdi-arrow-left-circle </v-icon>
          </v-btn>
          <v-btn class="mx-4" icon dark color="white" @click="next">
            <v-icon dark size="48"> mdi-arrow-right-circle </v-icon>
          </v-btn>
        </v-list-item>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  name: "time-line",

  props: {
    content: {
      type: Array,
      require: true,
    },
  },

  computed: {
      slider() {
          return this.content
      }
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