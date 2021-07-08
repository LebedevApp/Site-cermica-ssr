<template>
  <section class="my-5 channelbox section-time-line">
    <div>
      <v-container>
        <v-list-item-title class="text-button font-weight-bold grey--text"
          >Наши события</v-list-item-title
        >

        <section id="app">
          <div class="wrapper d-flex">
            <div
              class="wrapper_slide mx-10"
              v-for="(card, i) in content"
              :key="i"
              :style="{
                transform: 'translateX(-' + 100 * currentSlide + '%)',
              }"
            >
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
                    class="text-body-2 text-md-h6 text-center text-md-left"
                    >{{ card.title }}</v-card-title
                  >
                  <v-card-subtitle>{{ card.description }}</v-card-subtitle>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </section>

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
export default {
  name: "time-line",

  props: {
    content: {
      type: Array,
      require: true,
    },
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