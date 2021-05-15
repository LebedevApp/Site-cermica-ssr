<template>
  <div>
    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="8"
        ><v-container>
          <v-list-item-content class="text-center text-subtitle-1 text-md-h4 font-weight-thin">
            Our new Ultium Platform will help put everyone in an EV, moving us closer to a world with zero emissions.
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <v-container>
      <AppCards :cards='page_cards' />
    </v-container>
    
  </div>
</template>

<script>
import AppCards from '../components/AppCards'

export default {
  props: ['page_cards'],
  name: "AppAdvantages",
  components: {
      AppCards
  },
  data() {
    return {
      cards: [
        {
          title: "Где его взять?",
          content:
            "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
          to: "/",
          img: "pexels-anamul-rezwan-1216589-min.jpg",
        },
        {
          title: "Где его взять?",
          content:
            "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
          to: "/",
          img: "pexels-anamul-rezwan-1145434-min.jpg",
        },
        {
          title: "Где его взять?",
          content:
            "Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.",
          to: "/",
          img: "pexels-kateryna-babaieva-3678228-min.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.gradient{
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(117, 193, 255, 1),rgba(117, 193, 255, 0.3),rgba(117, 193, 255, 0));
    border-bottom-left-radius: 50px;
}
.img{
    width: 100%;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
