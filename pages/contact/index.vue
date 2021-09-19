<template>
  <section class="contact">
    <app-article-first-img :content="content" />

    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="8"
        ><v-container>
          <v-list-item-content>
            <p class="text-center text-subtitle-1 text-md-h4 font-weight-thin">
              {{ content.title }}
            </p>
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>
    <v-container>
      <v-list-item-content>
        <v-list-item-action-text
          class="
            my-5
            text-left text-subtitle-1 text-md-h6
            font-weight-regular
            mt-8
          "
          >EMAIL: {{ content.email }}</v-list-item-action-text
        >
        <v-list-item-action-text
          class="my-5 text-left text-subtitle-1 text-md-h6 mt-8"
          >Адрес: {{ content.adress }}</v-list-item-action-text
        >
      </v-list-item-content>
      <v-row class="my-8" justify="center" align="center">
        <v-card
          class="ma-3 py-5"
          min-width="300"
          max-width="300"
          v-for="people in content.tel"
          :key="people.name"
        >
          <v-list-item>
            <v-avatar color="indigo">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
            <v-list-item-action-text class="ml-4 text-body-2">{{
              people.name
            }}</v-list-item-action-text>
          </v-list-item>
          <v-divider class="mt-4"></v-divider>
          <v-card-text>
            <v-icon class="mx-3">mdi-cog-outline</v-icon> {{ people.prof }}
          </v-card-text>
          <v-card-text>
            <v-icon class="mx-3">mdi-phone-outline</v-icon> {{ people.tel }}
            <v-icon class="mx-2" v-if="people.watsapp">mdi-whatsapp</v-icon>
            <v-icon class="mx-2" v-if="people.telegramm"
              >mdi-send-outline</v-icon
            >
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>

    <v-container class="my-5">
      <div v-if="isMounted">
        <yandex-map :coords="content.coords" :zoom="15" class="map">
          <ymap-marker
            markerId="123"
            marker-type="placemark"
            :hint-content="content.adress"
            balloon-content="Ceramic"
            :coords="content.coords"
          ></ymap-marker>
        </yandex-map>
      </div>
    </v-container>

  </section>
</template>

<script>
import AppArticleFirstImg from "@/components/contentPage/content/img-components/ArticleFirstImg";
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  name: "contact",

  head: {
    title: 'КОНТАКТЫ',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Москва, набережная академика Туполева, дом 15, корпус 28. Тел. +79689680780'
      }
    ],
  },

  components: {
    yandexMap,
    ymapMarker,
    AppArticleFirstImg,
  },

  computed: {
    content() {
      return this.$store.getters["GET_CONTACT_INFO"];
    },
  },

  mounted() {
    this.isMounted = true;
  },

  data() {
    return {
      isMounted: false,
    };
  },
};
</script>


<style>
.ymap-container {
  height: 600px;
}
</style>