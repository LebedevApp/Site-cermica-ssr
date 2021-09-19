<template>
  <main>
    <app-first-img :content="content.content" />

    <app-first-content-block
      :content="content.content_block"
      :description="content.content"
      path="research"
    />

    <!--<app-our-service :content="content.our_servise" />

    <app-tabs-wrapper :content="content.tab" />-->

    <app-time-line :content="time_line" />

    <app-multiple-caorusel :cards="article" />
  </main>
</template>

<script>
import AppFirstImg from "@/components/contentPage/content/img-components/FirstImg";
import AppFirstContentBlock from "@/components/contentPage/content/text-components/FirstContentBlock";
import AppOurService from "@/components/contentPage/content/text-components/OurService";
import AppTabsWrapper from "@/components/contentPage/tabs/TabsWrapper";
import AppTimeLine from "@/components/contentPage/content/carousel/TimeLine";
import AppMultipleCaorusel from "@/components/contentPage/content/carousel/NewCarousel.vue";

export default {
  name: "research-page",

  head: {
    title: 'ЛАБОРАТОРНЫЕ ИССЛЕДОВАНИЯ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Проведение лабораторных испытаний мембранного разделения жидких сред, очистки и концентрирования содержащихся веществ. Подбор и определение производительности керамических мембран на продукте заказчика'
      }
    ],
  },

  components: {
    AppFirstImg,
    AppFirstContentBlock,
    AppOurService,
    AppTabsWrapper,
    AppTimeLine,
    AppMultipleCaorusel,
  },

  computed: {
    content() {
      return this.$store.getters["GET_RESEARCH_PAGE"];
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