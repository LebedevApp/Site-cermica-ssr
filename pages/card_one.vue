<template>
  <section class="content">
    <app-article-first-img :content="content" />

    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="8"
        ><v-container>
          <v-list-item-title
            class="text-center text-subtitle-1 text-md-h4 font-weight-thin"
          >
            Пористая керамика
          </v-list-item-title>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <v-container>
      <section class="content">
        <p class="my-1 my-md-4 font-weight-light text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center text-md-left">
          Керамические фильтры изготавливаются из высокочистого корунда,
          обладают высокой пористостью, механической, химической и эрозионной
          прочностью при больших температурах, эксплуатируются при больших
          давлениях, имеют длительный эксплуатационный ресурс в эрозионных
          высокоскоростных потоках агрессивных газовых сред.
        </p>
        <p class="my-1 my-md-4 font-weight-light text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center text-md-left">
          Фильтры выпускаются различной площадью фильтрации и разнообразных форм
          (трубчатая, пластинчатая, дисковая и т.п.), их монтаж и эксплуатация
          просты и технологичны.
        </p>
      </section>
      <section class="nav my-10">
        <v-list-item>
          <v-btn rounded color="btn light-blue" dark to="/">Назад</v-btn>
          <v-spacer></v-spacer>
          <v-btn rounded color="btn light-blue" dark to="/porousCeramics">Подробней</v-btn>
        </v-list-item>
      </section>
    </v-container>

  </section>
</template>

<script>
import AppArticleFirstImg from "@/components/contentPage/content/img-components/ArticleFirstImg";
export default {
  name: "card-one",

  components: {
    AppArticleFirstImg,
  },

  data() {
    return {
      content: {
        img: "img/cards/porous_full.jpg",
      },
    };
  },
};
</script>