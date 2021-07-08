<template>
  <section>
    <v-img class="img" :src="require(`@/assets/img/main_page/${$route.query.name}.jpg`)">
        <div class="gradient"></div>
    </v-img>

    <v-row justify="center" align="center">
      <v-col><v-divider></v-divider></v-col>
      <v-col cols="5"
        ><v-container>
          <v-list-item-content>
            <p class="text-center text-subtitle-1 text-md-h4 font-weight-thin">
              {{ $route.params.id }}
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

        v-html="$route.query.article"
      >
        
      </p>
      
      
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

  methods: {
      back() {
          this.$router.go(-1)
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