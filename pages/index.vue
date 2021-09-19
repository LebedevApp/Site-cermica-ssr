<template>
  <main>
    <app-carousel :sliders="content.caorusel" />

    <app-advantages :cards="content.cards" :description="content.content" />

    <app-content :content="content.content_block" path="main" />

    <app-partners :content="content.partners_block" />

    <app-time-line :content="time_line" />

    <app-multiple-caorusel :cards="article" />

    <app-social-links />
  </main>
</template>

<script>
import AppCarousel from "@/components/contentPage/content/carousel/Carousel";
import AppAdvantages from "@/components/contentPage/content/cards-components/Advantages";
import AppContent from "@/components/contentPage/content/text-components/Content";
import AppPartners from "@/components/contentPage/content/text-components/Partners";
import AppSocialLinks from "@/components/contentPage/content/menu-components/SocialLinks";
import AppMultipleCaorusel from "@/components/contentPage/content/carousel/NewCarousel.vue";
import AppTimeLine from "@/components/contentPage/content/carousel/TimeLine";

export default {
  name: "main-page",

  head: {
    title: 'КЕРАМИЧЕСКИЕ ФИЛЬТРЫ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Производство установок водоподготовки и очистки воды. Производство керамических мембран. Производство пористых керамических фильтров. Лабораторные исследования мембранного разделения жидких сред.'
      }
    ],
  },

  components: {
    AppAdvantages,
    AppContent,
    AppPartners,
    AppMultipleCaorusel,
    AppCarousel,
    AppSocialLinks,
    AppTimeLine
  },

  computed: {
    content() {
      return this.$store.getters["GET_MAIN_PAGE"];
    },
    article() {
      return this.$store.getters["GET_MULTIPLE"];
    },
    time_line() {
      return this.$store.getters["GET_TIME_LINE"];
    },
  },
};
</script>

