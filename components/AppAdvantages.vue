<template>
  <div>
    <v-list max-width="550" class="mx-auto">
      <v-list-item-content>
        <h4 class="text-center font-weight-light">
          “Многие программы электронной вёрстки и редакторы HTML используют
          Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым
          словам "lorem ipsum" сразу показывает”
        </h4>
      </v-list-item-content>
    </v-list>

    <AppCards :cards='page_cards' />
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
