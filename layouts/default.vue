<template>
  <v-app>

    <AppCustomHeader @openMenu="openMenu" class="header-noscroll" key="noscroll" />
    <!--<transition name="header" mode="out-in">
      <AppScrollMenu v-if="scroll" />
    </transition>-->

    <transition name="header" mode="out-in">
      <AppScrollBtn v-if="scroll" />
    </transition>

    <!--<app-header @openMenu="openMenu"></app-header>-->

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
import AppCustomHeader from "../components/CustomHeader";
import AppScrollMenu from "../components/AppScrollMenu"
import AppScrollBtn from "../components/AppBtnScroll"
import appMenu from "../components/appMenu";
import appNewMenu from "../components/NewMenu";
import AppLinks from "../components/LnksSite";

export default {
  data() {
    return {
      menu: false,
      dialog: false,
      scroll: false,
      
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
        : (document.body.style.position = "relative");
      document.body.classList.toggle("scroll");
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    });
  },
  components: {
    appMenu,
    appNewMenu,
    AppLinks,
    AppCustomHeader,
    AppScrollMenu,
    AppScrollBtn
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
//-------------------------------
.header-noscroll {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 25;
}

.header-scroll {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 25;
  background-color: #75c1ff;
}
//-------------------------------
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
//----------------------------
.header-enter {
  opacity: 0;
}
.header-enter-to {
  opacity: 1;
  transition: all .5s;
}
.header-leave {
  opacity: 1;
}
.header-leave-to {
  opacity: 0;
  transition: all 1s;
}
</style>
