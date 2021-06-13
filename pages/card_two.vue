<template>
  <section class="content">
    <app-article-first-img :content="content" />

    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="8"
        ><v-container>
          <v-list-item-title
            class="text-center text-subtitle-1 text-md-h4 font-weight-thin"
          >
            Керамические мембраны
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
          Современный мир и жизнь человечества не мыслимы без мембран и
          мембранных технологий, особое и достойное место среди которых занимают
          керамические мембраны.
        </p>
        <v-divider class="my-3"></v-divider>
        <p
          class="
            my-4 my-md-4
            font-weight-regular
            text-caption
            text-sm-body-2
            text-md-body-2
            text-xl-h6
            text-center
            text-md-left
          "
        >
          "Впервые мембрану для разделения жидкостей применил Дютрошел в 1827 г.
          Теория мембран связана с такими учеными, как: Вант-Гофф (осмотическое
          давление, 1887); Хендерсон (мембранный потенциал, 1907); Доннан
          (мембранное равновесие, 1911); Кедем, Качальский (неравновесная
          термодинамика, 1930). Развитие мембран шло и по прикладному характеру,
          создавались промышленные и лабораторные установки. Днем рождения
          промышленной мембранной технологии является дата публикация патента №
          3133132 от 12 мая 1964 г. авторов Леба и Сурираджана в США,
          описывающая способ получения высокопроизводительной полупроницаемой
          мембраны."
        </p>
        <v-divider class="my-3"></v-divider>
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
          Настал XXI в. – век экологически безопасных, экономически и
          технологически обоснованных процессов обработки материалов и
          переработки отходов для получения необходимых человеку продуктов.
          Таким процессом и является мембранная технология – разделение твёрдых,
          жидких и газообразных сред – , применяющаяся практически во всех
          отраслях промышленности, медицине и экологии. Мембранная технология
          проложила мост через пропасть, разделяющую промышленность и экологию.
        </p>
      </section>
      <section class="nav my-10">
        <v-list-item>
          <v-btn rounded color="btn light-blue" dark to="/">Назад</v-btn>
          <v-spacer></v-spacer>
          <v-btn rounded color="btn light-blue" dark to="/ceramicMembranes"
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
  name: "card-two",

  components: {
    AppArticleFirstImg,
  },

  data() {
    return {
      content: {
        img: "pexels-anamul-rezwan-1145434-min.jpg",
      },
    };
  },
};
</script>