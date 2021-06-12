<template>
  <v-app>
    <app-headers
      @openMenu="openMenu"
      class="header-noscroll"
      key="noscroll"
    />

    <transition name="scroll" mode="out-in">
      <app-scroll-btn v-if="scroll" />
    </transition>

    <transition name="toggleMenu">
      <app-menu v-if="menu" @close="close" />
    </transition>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer width="100%" color="#75c1ff">
      <app-links />
    </v-footer>
  </v-app>
</template>

<script>

import AppHeaders from "@/components/contentPage/content/header-component/TheHeader";
import AppScrollBtn from "@/components/UI-components/AppBtnScroll";
import AppMenu from "@/components/contentPage/content/menu-components/TheMenu";
import AppLinks from "@/components/contentPage/content/menu-components/LinksToMenu";

export default {
  name: 'default-layout',

  components: {
    AppMenu,
    AppLinks,
    AppHeaders,
    AppScrollBtn,
  },

  data() {
    return {
      menu: false,
      dialog: false,
      scroll: false,
    };
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

  methods: {
    openMenu() {
      this.menu = !this.menu;
    },
    close() {
      this.menu = false;
    },
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

//------------------

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

//----------------------------

.scroll-enter {
  opacity: 0;
}
.scroll-enter-to {
  opacity: 1;
  transition: all 0.5s;
}
.scroll-leave {
  opacity: 1;
}
.scroll-leave-to {
  opacity: 0;
  transition: all 1s;
}
</style>
