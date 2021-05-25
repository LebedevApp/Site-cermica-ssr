<template>
  <section class="content">
    <AppArticleImg :content="content" />
    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="5"
        ><v-container>
          <v-list-item-content class="text-center text-subtitle-1 text-md-h4 font-weight-thin">
            Какое-то название статьи или контента
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>
    <div style="height: 1000px"></div>
  </section>
</template>

<script>
import AppArticleImg from "../components/article/AppArticleImg";
export default {
  components: {
    AppArticleImg,
  },
  data() {
    return {
      content: {
        img: "pexels-anamul-rezwan-1145434-min.jpg",
      },
    };
  },
};
</script>