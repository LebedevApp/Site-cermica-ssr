<template>
  <main>
    <AppCaorusel :page_slider='page_slider' />

    <section class="advantages-cards">
      <v-container>
        <AppAdvantages :page_cards='page_cards.cards' />
      </v-container>
    </section>

    <section class="content">
      <v-container>
        <AppContent :content='page_block_one' />
        <v-btn @click="bugs">dsfdsfsd</v-btn>
      </v-container>
    </section>

    <section class="partners" style="background: #75c1ff">
      <v-container>
        <AppPartners :content='page_block_partners' />
      </v-container>
    </section>

    <section class="content">
      <v-container>
        <AppContent class="mt-5" :content='page_block_two' />
      </v-container>
    </section>

    <section class="works">
      <AppMultipleCaorusel :page_articles='page_articles' />
    </section>

    <section class="socialLinks">
      <v-container>
        <v-list>
          <v-list-item-title class="text-subtitle-1 text-md-h4 font-weight-black text--secondary text-center">Social links</v-list-item-title>
          <v-row justify="center" class="my-5">
            <v-icon class="mx-2" size="48">mdi-twitter</v-icon>
            <v-icon class="mx-2" size="48">mdi-facebook</v-icon>
            <v-icon class="mx-2" size="48">mdi-vk</v-icon>
            <v-icon class="mx-2" size="48">mdi-instagram</v-icon>
          </v-row>
        </v-list>
      </v-container>
    </section>

  </main>
</template>

<script>
import AppCaorusel from "../components/Caorusel";
import AppAdvantages from "../components/AppAdvantages";
import AppContent from "../components/AppContent";
import AppPartners from "../components/AppPartners";
import AppMultipleCaorusel from "../components/AppMultipleCaorusel";

export default {
  data() {
    return {
      content: {
        BlockOne: {
          img: 'pexels-pixabay-326410-min.jpg',
          title: 'Откуда он появился?',
          text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum',
          subtext: 'Классический текст Lorem Ipsum, используемый с XVI века',
          to: '/'
        },
        BlockTwo: {
          img: 'pexels-pixabay-221047-min.jpg',
          title: 'Откуда он появился?',
          text: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum',
          subtext: 'Классический текст Lorem Ipsum, используемый с XVI века',
          to: '/'
        }
      }
    };
  },
  methods: {
    async bugs() {
      await this.$store.dispatch('crm/loadContent')
      
    }
  },
  computed: {
    site_content() {
      return this.$store.getters["crm/getContent"];
    },
    page() {
      return this.site_content.find((key) => {
        return key.name === "Home";
      });
    },
    page_block_one() {
      return this.page.content.find((key) => {
        return key.blockName === "Первый блок с контентом";
      });
    },
    page_block_partners() {
      return this.page.content.find((key) => {
        return key.blockName === "Блок с картой (партнерский)";
      });
    },
    page_block_two() {
      return this.page.content.find((key) => {
        return key.blockName === "Второй блок с контентом";
      });
    },
    page_slider() {
      return this.page.content.find((key) => {
        return key.blockName === "Главный слайдер";
      });
    },
    page_cards() {
      return this.page.content.find((key) => {
        return key.blockName === "Карточки преимуществ";
      });
    },
    page_articles() {
      return this.page.content.find((key) => {
        return key.blockName === "Блок-слайдер со статьями";
      });
    }
    
    
  },
  components: { AppCaorusel,AppAdvantages,AppContent,AppPartners,AppMultipleCaorusel },
};
</script>