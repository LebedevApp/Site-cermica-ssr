<template>
  <main>
    <app-first-img :content="content.content" />

    <app-first-content-block
      :content="content.content_block"
      :description="content.content"
      path="porous"
    />

    <app-our-service :content="content.our_servise" />

    <app-tabs-wrapper :content="content.tab" />

    <app-characteristic :content="content.characteristic" />

    <app-time-line :content="time_line" />

    <app-multiple-caorusel :cards="article" />
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

export default {
  name: "porous-ceramics-page",

  head: {
    title: 'ПОРИСТАЯ КЕРАМИКА',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Разработка и производство пористых керамических фильтров для разделения и очистки жидких и газообразных сред.'
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
  },

  computed: {
    content() {
      return this.$store.getters["GET_POROUS_CERAMIC_PAGE"];
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

