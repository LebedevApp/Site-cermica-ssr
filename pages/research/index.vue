<template>
  <main>
    <AppImg :page="img_block" />

    <AppContentPorousCeramics />

    <AppOurServiceCeramics />

    <AppTabsWrapper :tabs="tabs" />

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
import AppImg from '../../components/contentPage/AppImg'
import AppContentPorousCeramics from '../../components/contentPage/AppContentPorousCeramics'
import AppOurServiceCeramics from '../../components/contentPage/AppOurServiceCeramics'
import AppTabsWrapper from '@/components/contentPage/tabs/TabsWrapper'
import AppTimeLine from '@/components/contentPage/AppTimeLine'

export default {
  components: {AppImg,AppContentPorousCeramics,AppOurServiceCeramics,AppTabsWrapper,AppTimeLine},
  data() {
    return {
        img_block: {
        name: "research",
        img: "img/e41c130f622f6a21470226ceafd06af3-min.jpg",
        title: "Лабораторные исследования разделения жидких растворов",
        text:
          "Проведение лабораторных испытаний мембранного разделения и концентрирования жидких растворов. Подбор и определение производительности керамических мембран на продукте заказчика. Исследования и разработка способов регенерации мембранных фильтров. ",
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
    },
  },
};
</script>