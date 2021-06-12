<template>
  <main>
    <app-first-img :page="img_block" />

    <app-first-content-block />

    <app-new-partners />

    <app-characteristic :content="characteristic" />

    <app-tabs-wrapper :tabs="tabs" />

    <app-time-line />

    <app-multiple-caorusel :page_articles="page_articles" />

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
  name: 'water-treatment-page',

  components: {
    AppFirstImg,
    AppFirstContentBlock,
    AppTabsWrapper,
    AppTimeLine,
    AppCharacteristic,
    AppNewPartners,
    AppMultipleCaorusel,
    AppSocialLinks
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
    page_articles() {
      return this.page.content.find((key) => {
        return key.blockName === "Блок-слайдер со статьями";
      });
    },
    page_block_partners() {
      return this.page.content.find((key) => {
        return key.blockName === "Блок с картой (партнерский)";
      });
    },
  },

  data() {
    return {
      img_block: {
        name: "waterTreatment",
        img: "img/_DSC9903-min.jpg",
        title: "Современные технологии водоподготовки",
        text:
          "Проектирование и производство стационарных и мобильных установок водоподготовки на основе технологии озоноультрафильтрации с применением  мембранных фильтроэлементов.",
      },
      tabs: [
        {
          img: "img/pexels-marian.jpg",
          video: "",
          name: "Название кнопки 1",
          title: "Наше производство сегодня",
          subtitle: "Возможно недавнее нововведение в производстве",
          text:
            "Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale.",
        },
        {
          img: "img/pexels-albin-berlin-906982-min.jpg",
          name: "Название кнопки 2",
          title: "Наше производство сегодня",
          subtitle: "Возможно недавнее достижение",
          text:
            "Meet the Cruise AV. Built at our Orion Assembly plant. Our manufacturing expertise allows us to meet the same strict standards for safety and quality that we build into all our vehicles. And right now, the all-electric, autonomous Cruise AV is testing on the streets of San Francisco to help transform ridesharing as well as deliveries.",
          to: "/",
        },
      ],
      characteristic: [
        {
          title: "Техническая часть",
          text:
            "Autonomous vehicles are already here. Cruise is currently testing AVs on the streets of San Francisco for trips that include ridesharing and deliveries.",
        },
        {
          title: "Техническая часть",
          text:
            "Technologies such as LIDAR, which uses laser light technology, help AVs see other vehicles on the road, just as they see pedestrians and bicyclists.",
        },
        {
          title: "Техническая часть",
          text:
            "Our vision of AVs is all-electric—with zero tailpipe emissions.",
        },
        {
          title: "Техническая часть",
          text:
            "Because human error is the cause of most serious vehicle crashes today, we believe AV technology can help reduce the incidence of crashes.",
        },
      ],
    };
  },
  
};
</script>