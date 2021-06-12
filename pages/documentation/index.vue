<template>
  <section class="content">
    <app-article-first-img :content="content" />

    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="7"
        ><v-container>
          <v-list-item-content>
            <v-list-item-title
              class="text-center text-subtitle-1 text-md-h4 font-weight-thin"
              >Документация</v-list-item-title
            >
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <div style="height: 1000px"></div>
  </section>
</template>

<script>
import AppArticleFirstImg from "@/components/contentPage/content/img-components/ArticleFirstImg";

export default {
  name: "documentation",

  components: {
    AppArticleFirstImg,
  },

  data() {
    return {
      content: {
        img: "pexels-pixabay-326410-min.jpg",
      },
    };
  },
};
</script>