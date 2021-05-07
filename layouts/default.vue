<template>
  <v-app>
    <app-header @openMenu="openMenu"></app-header>
    

    <!--<transition name="toggleMenu">
      <app-menu class="toggleMenus" v-if="menu" />
    </transition> -->

    <transition name="toggleMenu">
      <app-new-menu v-if="menu" @close='close' />
    </transition>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer width="100%" color="#75c1ff">
      <v-container class="my-8">
        <v-divider></v-divider>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import appHeader from "../components/Header";
import appMenu from "../components/appMenu";
import appNewMenu from '../components/NewMenu'

export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    openMenu() {
      this.menu = !this.menu;
      
    },
    close() {
      this.menu = false;
    }
  },
  watch: {
    menu() {
      this.menu ? document.body.style.position = 'fixed' : document.body.style.position = ''
      document.body.classList.toggle('scroll')
    }
  },
  components: {
    appHeader,
    appMenu,
    appNewMenu
  },
  async fetch() {
    await this.$store.dispatch("nuxtServerInit");
  },
};
</script>

<style lang="scss">
body {
  overflow-X: hidden;
  top: 0;
  width: 100%;
  height: 100%;
}

.scroll::-webkit-scrollbar { width: 0 !important }
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
  transition: all .5s;
}
.toggleMenu-leave {
  opacity: 1;
}
.toggleMenu-leave-to {
  opacity: 0;
  transition: all .5s;
}
</style>
