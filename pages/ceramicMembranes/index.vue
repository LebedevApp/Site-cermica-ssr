<template>
  <main>
    <AppImg :page='img_block' />

    <AppContentPorousCeramics />

    <AppOurServiceCeramics />

    <AppTabsWrapper :tabs="tabs" />

    <AppCharacteristic :content='characteristic' />

    <AppTimeLine /> 

    <v-container>
      <AppContent :content='page_block_content' />
    </v-container>
    
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
import AppImg from "../../components/contentPage/AppImg";
import AppContentPorousCeramics from '../../components/contentPage/AppContentPorousCeramics'
import AppOurServiceCeramics from '../../components/contentPage/AppOurServiceCeramics'
import AppTabsWrapper from '@/components/contentPage/tabs/TabsWrapper'
import AppCharacteristic from '@/components/contentPage/Characteristic'
import AppTimeLine from '@/components/contentPage/AppTimeLine'
import AppContent from "@/components/AppContent";
import AppMultipleCaorusel from "@/components/AppMultipleCaorusel";

export default {
  components: {
    AppImg,AppContentPorousCeramics,AppOurServiceCeramics,AppTabsWrapper,AppCharacteristic,AppTimeLine,AppContent,AppMultipleCaorusel
  },
  data() {
    return {
      img_block: {
        name: "ceramicMembranes",
        img: "img/DSC_6036-min.jpg",
        title: "Керамические мембраны",
        text:
          "Производство микро и ультрафильтрационных керамических мембранных фильтров. Проектирование и изготовление экспериментальных и промышленных установок микро и ультрафильтрации. Консультации по вопросам мембранного разделения.",
      },
      tabs: [
        {
          img: 'img/pexels-marian.jpg',
          video: '',
          name: 'Название кнопки 1',
          title: 'Наше производство сегодня',
          subtitle: 'Возможно недавнее нововведение в производстве',
          text: 'Meet the Cruise Origin. You wont see a steering wheel, rearview mirror or pedals, but you will see something entirely new—a vehicle with an experience purely designed around the riders. And one that will be built at one of GM’s most advanced assembly plants in North America, Factory ZERO. Factory ZERO will become the first U.S. automotive plant to install Verizon’s 5G Ultra-Wideband technology. Key benefits of 5G in a manufacturing plant include reliability, speed and sheer scale.',
        },
        {
          img: 'img/pexels-albin-berlin-906982-min.jpg',
          name: 'Название кнопки 2',
          title: 'Наше производство сегодня',
          subtitle: 'Возможно недавнее достижение',
          text: 'Meet the Cruise AV. Built at our Orion Assembly plant. Our manufacturing expertise allows us to meet the same strict standards for safety and quality that we build into all our vehicles. And right now, the all-electric, autonomous Cruise AV is testing on the streets of San Francisco to help transform ridesharing as well as deliveries.',
          to: '/'
        },
        {
          img: 'img/pexels-albin-berlin-906982-min.jpg',
          name: 'Название кнопки 3',
          title: 'Наше производство сегодня',
          subtitle: 'Возможно недавнее достижение',
          text: 'Meet the Cruise AV. Built at our Orion Assembly plant. Our manufacturing expertise allows us to meet the same strict standards for safety and quality that we build into all our vehicles. And right now, the all-electric, autonomous Cruise AV is testing on the streets of San Francisco to help transform ridesharing as well as deliveries.',
          to: '/'
        }
      ],
      characteristic: [
        {
          title: 'Техническая часть',
          text: 'Autonomous vehicles are already here. Cruise is currently testing AVs on the streets of San Francisco for trips that include ridesharing and deliveries.'
        },
        {
          title: 'Техническая часть',
          text: 'Technologies such as LIDAR, which uses laser light technology, help AVs see other vehicles on the road, just as they see pedestrians and bicyclists.'
        },
        {
          title: 'Техническая часть',
          text: 'Our vision of AVs is all-electric—with zero tailpipe emissions.'
        },
        {
          title: 'Техническая часть',
          text: 'Because human error is the cause of most serious vehicle crashes today, we believe AV technology can help reduce the incidence of crashes.'
        }
      ],
      page_block_content: {
                name: 'Content',
                description: 'Just as the automobile did more than a hundred years ago, we see that autonomous vehicles can positively change people’s lives forever.',
                img: 'pexels-pixabay-326410-min.jpg',
                text: 'Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.\n\nСуществуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.',
                subtitle: 'Дополнительная информация',
                title: 'Название блок !'
            }
    };
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
    }
  },
};
</script>