<template>
  <section>
    <v-img class="img" :src="require(`@/assets/img/main_page/${content.content_block.name}.jpg`)">
        <div class="gradient"></div>
    </v-img>

    <v-row justify="center" align="center">
      <v-col><v-divider></v-divider></v-col>
      <v-col cols="5"
        ><v-container>
          <v-list-item-content>
            <p class="text-center text-subtitle-1 text-md-h4 font-weight-thin">
              {{ content.content_block.title }}
            </p>
          </v-list-item-content>
          
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <v-container>
      <p
        class="
          my-4 my-md-4
          font-weight-regular
          text-caption
          text-sm-body-2
          text-md-body-2
          text-xl-h6
          text-center
          text-md-left
        "
        style="white-space: pre-wrap"

        v-html="content.content_block.article"
      >
      </p>

      <v-carousel class="mt-5" v-if="isCeramic" v-model="slide">
        <v-carousel-item v-for="url in ceramic_slides" :key="url" :src="url" />
      </v-carousel>
      
      <section class="nav my-10">
        <v-list-item>
          <v-btn rounded color="btn light-blue" dark @click="back">Назад</v-btn>
          <v-spacer></v-spacer>
        </v-list-item>
      </section>
    </v-container>
  </section>
</template>

<script>
import AppArticleFirstImg from "@/components/contentPage/content/img-components/ArticleFirstImg";

export default {
  name: "article_id",

  components: {
    AppArticleFirstImg,
  },

  data() {
    return {
      slide: 0,

      ceramic_slides: [
        'https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/ceramic_slide_1.jpg?alt=media&token=8856cc01-bb9d-415c-9c9d-bcace94d0604',
        'https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/ceramic_slide_2.jpg?alt=media&token=f80b5174-152f-48aa-8865-eabfaf9b9dc1',
        'https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/ceramic_slide_3.jpg?alt=media&token=2244efa3-0d5e-4d3c-802a-3d25b53fec5f',
        'https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/ceramic_slide_4.jpg?alt=media&token=3c29f4c2-f747-4211-b8d1-4f56cddf1bcc',
        'https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/ceramic_slide_5.jpg?alt=media&token=84681c53-7035-47e7-8efa-8658740c2d9d',
        'https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/ceramic_slide_6.jpg?alt=media&token=4de9c6d6-1822-48aa-91b5-ba2ce9618c5f',
        'https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/ceramic_slide_7-min.jpg?alt=media&token=4bdcc910-91e3-4eca-8824-d9233a0b9f25'
      ]
    }
  },

  computed: {
    content() {
      const path = this.$route.query.name === 'main' ? 'GET_MAIN_PAGE'
        : this.$route.query.name === 'research' ? 'GET_RESEARCH_PAGE' 
        : this.$route.query.name === 'porous' ? 'GET_POROUS_CERAMIC_PAGE' 
        : this.$route.query.name === 'water' ? 'GET_WATER_TREATMENT_PAGE'
        : this.$route.query.name === 'ceramic' ? 'GET_CERAMIC_MEMBRANES_PAGE' 
        : 'GET_MULTIPLE'
      return this.$store.getters[`${path}`]
    },

    isCeramic() {
      return this.$route.params?.id === 'КЕРАМИЧЕСКИЕ МЕМБРАНЫ'
    }
  },

  methods: {
      back() {
        const path = this.$route.query.name === 'main' ? '/'
        : this.$route.query.name === 'research' ? '/research' 
        : this.$route.query.name === 'porous' ? '/porousCeramics' 
        : this.$route.query.name === 'water' ? '/waterTreatment'
        : this.$route.query.name === 'ceramic' ? '/ceramicMembranes' 
        : 'GET_MULTIPLE'
        this.$router.push(path)
      },
  }
};
</script>

<style lang="scss" scoped>
.img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    
}
.gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    );
}
.dynamic-float {
  float: left;
  margin-right: 20px;
}
@media (max-width: 430px) {
  .dynamic-float {
    float: none;
    margin: 0 auto;
  }
}
</style>