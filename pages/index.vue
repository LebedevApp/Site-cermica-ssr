<template>
  <main>
    <app-carousel :sliders="content.caorusel" />

    <app-advantages :cards="content.cards" :description="content.content" />

    <app-content :content="content.content_block" />

    <app-partners :content="content.partners_block" />

    <app-content :content="content.last_content_block" />

    <app-multiple-caorusel :cards="article" />

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
    AppSocialLinks,
  },

  computed: {
    content() {
      return this.$store.getters["GET_MAIN_PAGE"];
    },
    article() {
      return this.$store.getters["GET_MULTIPLE"];
    },
  },
};
</script>
