<template>
  <section class="content">
    <app-article-first-img :content="content" />

    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="10" md="8"
        ><v-container>
          <v-list-item-title
            class="text-center text-subtitle-1 text-md-h4 font-weight-thin"
          >
            СИСТЕМЫ ВОДОПОДГОТОВКИ
          </v-list-item-title>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <v-container>
      <section class="content">
        <p
          class="
            my-1 my-md-4
            font-weight-light
            text-caption
            text-sm-body-2
            text-md-body-2
            text-xl-h6
            text-center
            text-md-left
          "
        >
          Озоно-мембранная технология совмещает в одном техпроцессе
          одновременное высокоэффективное озоновое окисление примесей,
          мембранное ультрафильтрационное отделение полученных окислов на уровне
          сотых долей микрона и озоновый скруббинг, поддерживающий
          <span class="font-weight-regular"
            >стабильную и высокую производительность водоподготовки и очистки.
          </span>
        </p>
        <p
          class="
            my-1 my-md-4
            font-weight-light
            text-caption
            text-sm-body-2
            text-md-body-2
            text-xl-h6
            text-center
            text-md-left
          "
        >
          Озоно – мембранная технология эффективней и производительней
          традиционных методов механической очистки, флотации, контактной
          коагуляции и т.п.
        </p>
        <p
          class="
            my-1 my-md-4
            font-weight-light
            text-caption
            text-sm-body-2
            text-md-body-2
            text-xl-h6
            text-center
            text-md-left
          "
        >
          Технология не требует использования расходных реагентов, позволяет
          изготавливать установки с гибкой аппаратурной схемой ведения процесса
          очистки, различной производительности. Технологические потери
          составляют не более 5-6% исходной очищаемой среды; установки отличает
          компактность размещения.
        </p>
      </section>
      <section class="nav my-10">
        <v-list-item>
          <v-btn rounded color="btn light-blue" dark to="/">Назад</v-btn>
          <v-spacer></v-spacer>
          <v-btn rounded color="btn light-blue" dark to="/waterTreatment"
            >Подробней</v-btn
          >
        </v-list-item>
      </section>
    </v-container>
  </section>
</template>

<script>
import AppArticleFirstImg from "@/components/contentPage/content/img-components/ArticleFirstImg";
export default {
  name: "card-three",

  head: {
    title: 'СИСТЕМЫ ВОДОПОДГОТОВКИ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Уникальная высокопроизводительная озоно-мембранная технология очистки воды артезианских и поверхностных источников'
      }
    ],
  },

  components: {
    AppArticleFirstImg,
  },

  data() {
    return {
      content: {
        img: "img/cards/water_min.jpg",
      },
    };
  },
};
</script>