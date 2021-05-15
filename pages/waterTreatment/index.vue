<template>
  <main>
    <AppImg :page="img_block" />

    <AppContentPorousCeramics />

    

    <section class="partners" style="background: #75c1ff">
      <v-container>
        <AppPartners :content='page_block_partners' />
      </v-container>
    </section>

    <AppCharacteristic :content='characteristic' />

    <AppTabsWrapper :tabs="tabs" />

    <AppTimeLine /> 

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
import AppPartners from "../../components/AppPartners";
import AppCharacteristic from '@/components/contentPage/Characteristic'
import AppTabsWrapper from '@/components/contentPage/tabs/TabsWrapper'
import AppTimeLine from '@/components/contentPage/AppTimeLine'

export default {
  components: { AppImg,AppContentPorousCeramics,AppPartners,AppTabsWrapper,AppTimeLine,AppCharacteristic},
  data() {
    return {
      img_block: {
        name: "waterTreatment",
        img: "img/_DSC9903-min.jpg",
        title: "Современные технологии водоподготовки",
        text:
          "Проектирование и производство стационарных и мобильных установок водоподготовки на основе технологии озоноультрафильтрации с применением  мембранных фильтроэлементов.",
      },
      question: [
          
          {
              link: 'Option 1',
              icon: 'mdi-account',
              title: 'The Ultium Platform. Range, Power and Flexibility. For All.',
              text: 'General Motors’ all-new modular Ultium Platform will be the heartbeat of our all-electric future—and thanks to Ultium’s pouch cell design, we will easily accommodate a wide range of EV styles and sizes.',
              img: 'pexels-anamul-rezwan-1216589-min.jpg'
          },
          {
              link: 'Option 2',
              icon: 'mdi-lock',
              title: 'The Foundation of a Modular, Flexible EV Lineup',
              text: 'GM’s Ultium platform, which features modular battery and drive unit combinations, is flexible enough to build a wide range of trucks, SUVs, crossovers, cars and commercial vehicles with outstanding design, performance, range and affordability.',
              img: 'pexels-anamul-rezwan-1145434-min.jpg'
          },
          {
              link: 'Option 3',
              icon: 'mdi-lock',
              title: 'The Heart of the Ultium System',
              text: 'With a modular, flexible design and a common cell across different vehicle types, the battery is the heart of the Ultium system. The system uses cells stacked vertically (pickups and SUVs) or horizontally (performance vehicles), allowing us to build electric vehicles for every customer and segment.',
              img: 'pexels-kateryna-babaieva-3678228-min.jpg'
          },
          {
              link: 'Option 4',
              icon: 'mdi-access-point',
              title: 'Powering Our All-Electric Future',
              text: 'Ultium Drive, made up of electric motors, single-speed transmissions and their integrated power electronics, gives our EVs their power and torque.',
              img: 'img/pexels-marian.jpg'
          },
          {
              link: 'Option 5',
              icon: 'mdi-access-point',
              title: 'Fewer Wires Equal Less Weight and Longer Range',
              text: 'GM will be the first automaker to use an almost completely wireless battery management system for EVs. The system will power multiple types of EVs from a common set of battery components and make our batteries easier to reuse for second-life applications.',
              img: 'img/pexels-albin-berlin-906982-min.jpg'
          }
      ],
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
    page_block_partners() {
      return this.page.content.find((key) => {
        return key.blockName === "Блок с картой (партнерский)";
      });
    },
  },
};
</script>