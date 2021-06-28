<template>
  <section class="channelbox section">
    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="8"
        ><v-container>
          <v-list-item-content
            class="text-center text-subtitle-1 text-md-h4 font-weight-thin"
          >
            {{ description.description }}
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <app-content :content="content" />
  </section>
</template>

<script>
import AppContent from "@/components/contentPage/content/text-components/Content";

export default {
  name: 'first-content-block',

  props: {
    content: {
      type: Object,
      require: true
    },
    description: {
      type: Object,
      require: true
    }
  },
  
  components: { AppContent },
  
  data() {
    return {
      page_block_content: {
        name: "Content",
        description:
          "Just as the automobile did more than a hundred years ago, we see that autonomous vehicles can positively change people’s lives forever.",
        img: "pexels-pixabay-326410-min.jpg",
        text:
          "Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.\n\nСуществуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.",
        subtitle: "Дополнительная информация",
        title: "Название блок !",
      },
    };
  },
};
</script>
