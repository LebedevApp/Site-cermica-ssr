<template>
  <section class="contact">
    <AppArticleImg :content="img_block.img" />

    <v-row justify="center" align="center">
      <v-col> <v-divider></v-divider></v-col>
      <v-col cols="8"
        ><v-container>
          <v-list-item-content >
              <v-list-item-title class="text-center text-subtitle-1 text-md-h4 font-weight-thin">{{img_block.title}}</v-list-item-title>
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>
    <v-container>

    
      <v-list-item-content>
          <v-list-item-action-text class="my-5 text-left text-subtitle-1 text-md-h6 font-weight-regular mt-8">EMAIL: {{CONTACT_INFO.email}}</v-list-item-action-text>
          <v-list-item-action-text class="my-5 text-left text-subtitle-1 text-md-h6  mt-8">Адрес: {{CONTACT_INFO.adress}}</v-list-item-action-text>
      </v-list-item-content>
      <v-row class="my-8" justify="center" align="center">
        <v-card
          class="ma-3 py-5"
          min-width="300"
          max-width="300"
          v-for="people in CONTACT_INFO.tel"
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
        <yandex-map :coords="CONTACT_INFO.coords" :zoom="15" class="map">
          <ymap-marker
            markerId="123"
            marker-type="placemark"
            :hint-content="CONTACT_INFO.adress"
            balloon-content="Ceramic"
            :coords="CONTACT_INFO.coords"
          ></ymap-marker>
        </yandex-map>
      </div>
    </v-container>
  </section>
</template>

<script>
import AppArticleImg from "../../components/article/AppArticleImg";
import AppImg from "../../components/contentPage/AppImg";
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  components: {
    AppImg,
    yandexMap,
    ymapMarker,
    AppArticleImg
  },
  data() {
    return {
      img_block: {
        img: "pexels-pixabay-221047-min.jpg",
        name: "contact",
        title: "Контактная информация компании",
        //text: 'Контактная информация компании'
      },
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    onClick() {},
  },
  computed: {
    CONTACT_INFO() {
      return this.$store.getters["options/SAVE_CONTACT_INFO"];
    },
  },
};
</script>


<style>
.ymap-container {
  height: 600px;
}
</style>