<template>
  <section class="content">
    <app-article-first-img :content="content" />

    <v-row justify="center" align="center">
      <v-col><v-divider></v-divider></v-col>
      <v-col cols="5"
        ><v-container>
          <v-list-item-content>
            <p class="text-center text-subtitle-1 text-md-h4 font-weight-thin">
              Статьи
            </p>
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" v-for="(card, i) in cards" :key="i">
          <v-card class="ma-3" min-width="250">
            <v-img class="img" :src="card.img" alt=""> </v-img>
            <v-card-text style="position: relative">
              <v-card-title
                class="text-body-2 text-md-h6 text-center text-md-left"
                >{{ card.title }}</v-card-title
              >
              <v-card-subtitle>{{ card.description }}</v-card-subtitle>
              <v-divider class="my-2"></v-divider>
              <v-card-actions class="mb-n6 mt-n1">
                <v-spacer></v-spacer>
                <v-btn
                  class="mb-3"
                  rounded
                  color="blue darken-2"
                  dark
                  x-large
                  elevation="10"
                  @click="toArticle(card)"
                  ><v-icon size="36" class="mx-2">
                    mdi-book-open-page-variant
                  </v-icon>
                  Читать</v-btn
                >
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import AppArticleFirstImg from "@/components/contentPage/content/img-components/ArticleFirstImg";

export default {
  name: "article_page",

   head: {
    title: 'СТАТЬИ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Описание научных разработок ООО Керамикфильтр. Научные материалы по озонированию и мембранному разделению'
      }
    ],
  },


  components: {
    AppArticleFirstImg,
  },

  computed: {
    cards() {
      return this.$store.getters["GET_MULTIPLE"];
    },
  },

  data() {
    return {
      content: {
        img: "img/article/article.jpg",
      },
    };
  },

  methods: {
    toArticle(card) {
      this.$router.push({
        path: "/article-carousel/" + card.title,
        query: {name: card.title},
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.img{
  width: 100%;
  height: 300px;
  object-fit: cover;
}
</style>