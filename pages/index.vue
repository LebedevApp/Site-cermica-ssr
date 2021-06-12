<template>
  <main>
    <app-carousel />

    <app-advantages :page_cards="page_cards.cards" />

    <app-content :content="page_block_one" />

    <app-partners :content="page_block_partners" />

    <app-content class="mt-5" :content="page_block_two" />

    <app-multiple-caorusel :page_articles="page_articles" />

    <app-social-links />
  </main>
</template>

<script>
import AppCarousel from "@/components/contentPage/content/carousel/Carousel";
import AppAdvantages from "@/components/contentPage/content/cards-components/Advantages";
import AppContent from "@/components/contentPage/content/text-components/Content";
import AppPartners from "@/components/contentPage/content/text-components/Partners";
import AppMultipleCaorusel from "@/components/contentPage/content/carousel/MultipleCaorusel";
import AppSocialLinks from "@/components/contentPage/content/menu-components/SocialLinks";

export default {
  name: "main-page",

  components: {
    AppAdvantages,
    AppContent,
    AppPartners,
    AppMultipleCaorusel,
    AppCarousel,
    AppSocialLinks
  },

  // в поле computed стоит использовать ...mapGetters()
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
    },
  },

  methods: {
    slide(payload) {
      console.log(payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.slick {
  position: relative;
}
</style>