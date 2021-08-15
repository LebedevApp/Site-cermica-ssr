<template>
  <main>
    <app-first-img :content="content.content" />

    <app-first-content-block
      :content="content.content_block"
      :description="content.content"
    />

    <app-our-service :content="content.our_servise" />

    <app-tabs-wrapper :content="content.tab" />

    <app-characteristic :content="content.characteristic" />

    <app-time-line :content="time_line" />

    <app-multiple-caorusel :cards="article" />

    <app-social-links />
  </main>
</template>

<script>
import AppFirstImg from "@/components/contentPage/content/img-components/FirstImg";
import AppFirstContentBlock from "@/components/contentPage/content/text-components/FirstContentBlock";
import AppOurService from "@/components/contentPage/content/text-components/OurService";
import AppTabsWrapper from "@/components/contentPage/tabs/TabsWrapper";
import AppCharacteristic from "@/components/contentPage/content/text-components/Characteristic";
import AppTimeLine from "@/components/contentPage/content/carousel/TimeLine";
import AppMultipleCaorusel from "@/components/contentPage/content/carousel/NewCarousel.vue";
import AppSocialLinks from "@/components/contentPage/content/menu-components/SocialLinks";

export default {
  name: "ceramic-membranes-page",

  head: {
    title: 'КЕРАМИЧЕСКИЕ МЕМБРАНЫ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Производство микро и ультрафильтрационных мембранных фильтров. Производство эксперементальных и промышленных установок микро и ультрафильтрации. Консультации по вопросам мембранного'
      }
    ],
  },

  components: {
    AppFirstImg,
    AppFirstContentBlock,
    AppOurService,
    AppTabsWrapper,
    AppCharacteristic,
    AppTimeLine,
    AppMultipleCaorusel,
    AppSocialLinks,
  },

  computed: {
    content() {
      return this.$store.getters["GET_CERAMIC_MEMBRANES_PAGE"];
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