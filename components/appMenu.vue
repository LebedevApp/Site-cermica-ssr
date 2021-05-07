<template>
  <v-list width="100%" min-height="100vh" class="menu pt-3">
    <div class="desktop">
      <v-divider class="mt-16"></v-divider>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-list-group
              color="white"
              :value="true"
              prepend-icon="mdi-cog-outline"
            >
              <template v-slot:activator>
                <v-list-item-title class="white--text text-h6 ml-2"
                  >Услуги</v-list-item-title
                >
              </template>
              <v-list-item
                link
                v-for="service in menu.services"
                :key="service.title"
                @mouseover.stop="addDiscription(service)"
                @mouseout.stop="removeDescription"
              >
                <nuxt-link to="/" class="link text-body-1 white--text">{{
                  service.title
                }}</nuxt-link>
              </v-list-item>
            </v-list-group>

            <v-list-group color="white" :value="true" prepend-icon="mdi-note">
              <template v-slot:activator>
                <v-list-item-title class="white--text text-h6 ml-2"
                  >Документация</v-list-item-title
                >
              </template>
              <v-list-item
                link
                v-for="documentation in menu.documentation"
                :key="documentation.title"
              >
                <nuxt-link to="/" class="link text-body-1 white--text">{{
                  documentation.title
                }}</nuxt-link>
              </v-list-item>
            </v-list-group>

            <v-list-group
              color="white"
              :value="true"
              prepend-icon="mdi-account-box "
            >
              <template v-slot:activator>
                <v-list-item-title class="white--text text-h6 ml-2"
                  >Контакты</v-list-item-title
                >
              </template>
              <v-list-item
                link
                v-for="contact in menu.contact"
                :key="contact.title"
              >
                <nuxt-link to="/" class="link text-body-1 white--text">{{
                  contact.title
                }}</nuxt-link>
              </v-list-item>
            </v-list-group>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="6">
            <v-row>
              <v-card
                class="block rounded-lg"
                width="100%"
                elevation="0"
                height="100%"
                tile
                color="rgba(0,0,0,0)"
              >
                <transition name="fade" mode="out-in">
                  <v-card
                    v-if="card != null"
                    elevation="5"
                    color="rgba(255,255,255,1)"
                    class="ma-8"
                  >
                    <v-img :src="card.img"></v-img>
                    <v-card-title class="text-h6">{{
                      card.title
                    }}</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>{{ card.description }}</v-card-text>
                  </v-card>

                  <div v-else>
                    <v-card class="ma-8">
                      <v-card-title class="mt-8 mx-5 text-h4 font-weight-black"
                        >Logo</v-card-title
                      >
                      <v-divider></v-divider>
                      <p class="py-16 mx-3 font-weight-light">
                        Многие думают, что Lorem Ipsum - взятый с потолка
                        псевдо-латинский набор слов, но это не совсем так. Его
                        корни уходят в один фрагмент классической латыни 45 года
                        н.э., то есть более двух тысячелетий назад. Ричард
                        МакКлинток, профессор латыни из колледжа Hampden-Sydney,
                        штат Вирджиния, взял одно из самых странных слов в Lorem
                        Ipsum
                      </p>
                      <div class="text-left pb-8 ml-10">
                        <v-btn class="mx-auto" outlined color="blue darken-1">
                          Подробней
                        </v-btn>
                      </div>
                    </v-card>
                  </div>
                </transition>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="mobile">
      <v-divider class="mt-16"></v-divider>
      <v-list-group color="white" :value="true" prepend-icon="mdi-cog-outline">
        <template v-slot:activator>
          <v-list-item-title class="white--text text-h6 ml-2"
            >Услуги</v-list-item-title
          >
        </template>
        <v-list-item link v-for="service in menu.services" :key="service.title">
          <nuxt-link to="/" class="link text-body-1 white--text">{{
            service.title
          }}</nuxt-link>
        </v-list-item>
      </v-list-group>

      <v-list-group color="white" :value="true" prepend-icon="mdi-note">
        <template v-slot:activator>
          <v-list-item-title class="white--text text-h6 ml-2"
            >Документация</v-list-item-title
          >
        </template>
        <v-list-item
          link
          v-for="documentation in menu.documentation"
          :key="documentation.title"
        >
          <nuxt-link to="/" class="link text-body-1 white--text">{{
            documentation.title
          }}</nuxt-link>
        </v-list-item>
      </v-list-group>

      <v-list-group color="white" :value="true" prepend-icon="mdi-account-box ">
        <template v-slot:activator>
          <v-list-item-title class="white--text text-h6 ml-2"
            >Контакты</v-list-item-title
          >
        </template>
        <v-list-item link v-for="contact in menu.contact" :key="contact.title">
          <nuxt-link to="/" class="link text-body-1 white--text">{{
            contact.title
          }}</nuxt-link>
        </v-list-item>
      </v-list-group>
    </div>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        services: [
          {
            img: "img/DSC_6025-min.jpg",
            title: "Пористая керамика",
            description:
              "Разработка и производство керамических фильтров для разделения и очистки жидких и газообразных сред.",
            to: "/",
          },
          {
            img: "img/DSC_6036-min.jpg",
            title: "Керамические мембраны",
            description: `Производство микро и ультрафильтрационных керамических мембранных фильтров. Проектирование и изготовление экспериментальных и промышленных установок микро и ультрафильтрации. Консультации по вопросам мембранного разделения.`,
            to: "/",
          },
          {
            img: "img/_DSC9903-min.jpg",
            title: "Современные технологии водоподготовки",
            description:
              "Проектирование и производство стационарных и мобильных установок водоподготовки на основе технологии озоноультрафильтрации с применением  мембранных фильтроэлементов.",
            to: "/",
          },
          {
            img: "img/e41c130f622f6a21470226ceafd06af3-min.jpg",
            title: "Лабораторные исследования разделения жидких растворов",
            description:
              "Проведение лабораторных испытаний мембранного разделения и концентрирования жидких растворов. Подбор и определение производительности керамических мембран на продукте заказчика. Исследования и разработка способов регенерации мембранных фильтров. ",
            to: "/",
          },
        ],
        documentation: [
          {
            title: "Документация",
            to: "/",
          },
        ],
        contact: [
          {
            title: "Контакты",
            to: "/",
          },
        ],
      },
      card: null,
    };
  },
  methods: {
    addDiscription(payload) {
      this.card = payload;
    },
    removeDescription() {
      this.card = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  background: #75c1ff;
}
.link {
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.block {
  overflow: hidden;
}
.fade-enter {
  transform: translateX(100%);
  opacity: 0;
}
.fade-enter-to {
  transform: translateX(0%);
  opacity: 1;
  transition: all 0.5s;
}
.fade-leave {
  transform: translateX(0%);
  opacity: 1;
}
.fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.5s;
}

@media (max-width: 1025px) {
  .desktop {
    display: none;
  }
}
@media (min-width: 1025px) {
  .mobile {
    display: none;
  }
}
</style>