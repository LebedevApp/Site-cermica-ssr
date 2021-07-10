<template>
  <section class="content">
    <app-article-first-img :content="content" />

    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="7"
        ><v-container>
          <v-list-item-content>
            <p class="text-center text-subtitle-1 text-md-h4 font-weight-thin">
              Документация
            </p>
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>
    <v-container>
      <app-cards v-for="(card, i) in cards" :key="i" :card="card" />
    </v-container>
  </section>
</template>

<script>
import AppArticleFirstImg from "@/components/contentPage/content/img-components/ArticleFirstImg";
import AppCards from "@/components/contentPage/content/cards-components/CardsDocumentation";

export default {
  name: "documentation",

  components: {
    AppArticleFirstImg,
    AppCards,
  },

  data() {
    return {
      content: {
        img: "img/documentation/doc.jpg",
      },
      cards: [
        {
          link: "https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/patent.PDF?alt=media&token=34d2f4aa-9f88-4269-b769-e41cccb3d155",
          title: "Патент на изобретение",
        },
        {
          link: "https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/sert1.PDF?alt=media&token=b7cca081-6dea-40ce-a743-6595418f54cd",
          title: "Сертификат ФОМС",
        },
        {
          link: "https://firebasestorage.googleapis.com/v0/b/site-caramica-ssr.appspot.com/o/sertCard.PDF?alt=media&token=ae6d2ea8-40ea-431c-830e-95fd399017de",
          title: "Сертификат картридж",
        },
      ],
    };
  },
};
</script>