<template>
  <v-app>
    <app-header @openMenu="openMenu"></app-header>

    <!--<transition name="toggleMenu">
      <app-menu class="toggleMenus" v-if="menu" />
    </transition> -->

    <transition name="toggleMenu">
      <app-new-menu v-if="menu" @close="close" />
    </transition>

    <v-main>
      
         <nuxt />
     
     
    </v-main>

    <v-footer width="100%" color="#75c1ff">
      <AppLinks />
    </v-footer>
  </v-app>
</template>

<script>
import appHeader from "../components/Header";
import appMenu from "../components/appMenu";
import appNewMenu from "../components/NewMenu";
import AppLinks from "../components/LnksSite"

export default {
  data() {
    return {
      menu: false,
      dialog: false,
      menuList: {
        services: [
          {
            title: "Главная страница",
            to: "/",
          },
          {
            img: "img/DSC_6025-min.jpg",
            title: "Пористая керамика",
            description:
              "Разработка и производство керамических фильтров для разделения и очистки жидких и газообразных сред.",
            to: "/porousCeramics",
          },
          {
            img: "img/DSC_6036-min.jpg",
            title: "Керамические мембраны",
            description: `Производство микро и ультрафильтрационных керамических мембранных фильтров. Проектирование и изготовление экспериментальных и промышленных установок микро и ультрафильтрации. Консультации по вопросам мембранного разделения.`,
            to: "/ceramicMembranes",
          },
          {
            img: "img/_DSC9903-min.jpg",
            title: "Современные технологии водоподготовки",
            description:
              "Проектирование и производство стационарных и мобильных установок водоподготовки на основе технологии озоноультрафильтрации с применением  мембранных фильтроэлементов.",
            to: "/waterTreatment",
          },
          {
            img: "img/e41c130f622f6a21470226ceafd06af3-min.jpg",
            title: "Лабораторные исследования разделения жидких растворов",
            description:
              "Проведение лабораторных испытаний мембранного разделения и концентрирования жидких растворов. Подбор и определение производительности керамических мембран на продукте заказчика. Исследования и разработка способов регенерации мембранных фильтров. ",
            to: "/research",
          },
        ],
        documentation: [
          {
            title: "Документация",
            to: "/",
          },
          {
            title: "Наши партнеры",
            to: "/partners",
          },
        ],
        contact: [
          {
            title: "Контакты",
            to: "/contact",
          },
        ],
      },
    };
  },
  methods: {
    openMenu() {
      this.menu = !this.menu;
    },
    close() {
      this.menu = false;
    },
  },
  watch: {
    menu() {
      this.menu
        ? (document.body.style.position = "fixed")
        : (document.body.style.position = "");
      document.body.classList.toggle("scroll");
    },
  },
  components: {
    appHeader,
    appMenu,
    appNewMenu,
    AppLinks
  },
  async fetch() {
    await this.$store.dispatch("nuxtServerInit");
  },
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
  top: 0;
  width: 100%;
  height: 100%;
}
.link {
  text-decoration: none;
}
.scroll::-webkit-scrollbar {
  width: 0 !important;
}
.scroll {
  padding-right: 4px;
}

::-webkit-scrollbar-button {
  width: 5px;
  height: 0px;
}
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 50px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.6);
}

::-webkit-resizer {
  width: 4px;
  height: 0px;
}

::-webkit-scrollbar {
  width: 4px;
}

.toggleMenus {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.toggleMenu-enter {
  opacity: 0;
}
.toggleMenu-enter-to {
  opacity: 1;
  transition: all 0.5s;
}
.toggleMenu-leave {
  opacity: 1;
}
.toggleMenu-leave-to {
  opacity: 0;
  transition: all 0.5s;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
  transition: all 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
  transition: all 0.5s;
}
</style>
