<template>
  <main>
    <app-first-img :content="content.content" />

    <app-first-content-block
      :content="content.content_block"
      :description="content.content"
    />

    <app-new-partners :content="content.partners_block" />

    <app-characteristic :content="content.characteristic" />

    <app-tabs-wrapper :content="content.tab" />

    <app-time-line :content="time_line" />

    <app-multiple-caorusel :cards="article" />

    <app-social-links />
  </main>
</template>

<script>
import AppFirstImg from "@/components/contentPage/content/img-components/FirstImg";
import AppFirstContentBlock from "@/components/contentPage/content/text-components/FirstContentBlock";
import AppCharacteristic from "@/components/contentPage/content/text-components/Characteristic";
import AppTabsWrapper from "@/components/contentPage/tabs/TabsWrapper";
import AppTimeLine from "@/components/contentPage/content/carousel/TimeLine";
import AppNewPartners from "@/components/contentPage/content/text-components/NewPartners";
import AppMultipleCaorusel from "@/components/contentPage/content/carousel/MultipleCaorusel";
import AppSocialLinks from "@/components/contentPage/content/menu-components/SocialLinks";

export default {
  name: "water-treatment-page",

  components: {
    AppFirstImg,
    AppFirstContentBlock,
    AppTabsWrapper,
    AppTimeLine,
    AppCharacteristic,
    AppNewPartners,
    AppMultipleCaorusel,
    AppSocialLinks,
  },

  computed: {
    content() {
      return this.$store.getters["GET_WATER_TREATMENT_PAGE"];
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