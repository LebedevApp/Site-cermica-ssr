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
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" v-for="(card, i) in docs" :key="i">
          <app-cards :card="card" @open="open($event)" />
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" fullscreen
      hide-overlay
      transition="dialog-bottom-transition">
      <v-card v-if="card">
        <div class="header">
            <h3 class="text-center">{{card.title}}</h3>
            <v-btn class="btn" outlined fab dark small @click="close"><v-icon>mdi-close</v-icon></v-btn>
        </div>
       <v-container>
        <iframe
          class="frame"
          :src="card.url"
          width="100%"
          height="550"
        ></iframe>
      </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#64B5F6" outlined @click="close"> Назад </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import AppArticleFirstImg from "@/components/contentPage/content/img-components/ArticleFirstImg";
import AppCards from "@/components/contentPage/content/cards-components/CardsDocumentation";

export default {
  name: "documentation",

  head: {
    title: 'ДОКУМЕНТАЦИЯ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Основная документация на продукцию ООО Керамикфильтр. Патенты, сертификаты, ТУ и другие'
      }
    ],
  },

  components: {
    AppArticleFirstImg,
    AppCards,
  },

  data() {
    return {
      content: {
        img: "img/documentation/doc.jpg",
      },
      dialog: false,
      card: null,
    };
  },

  computed: {
    docs() {
      return this.$store.getters["GET_DOCS"] || []
    }
  },

  methods: {
    open(card) {
      this.card = card;
      this.dialog = true
    },
    close() {
      this.dialog = false
      this.card = null;
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  background: #64B5F6;
  color: white;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
</style>


