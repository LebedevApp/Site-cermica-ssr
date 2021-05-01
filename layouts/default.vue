<template>
  <v-app>
    <app-header @openMenu="openMenu"></app-header>

    <transition name="toggleMenu">
      <app-menu class="toggleMenus" v-if="menu" />
    </transition>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer width="100%" color="#75c1ff" >
      <v-container class="my-8">
        <v-divider></v-divider>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import appHeader from "../components/Header";
import appMenu from "../components/appMenu";

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
  },
  components: {
    appHeader,
    appMenu,
  },
   async fetch() {
    await this.$store.dispatch('nuxtServerInit')
  }
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}
.toggleMenus {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  
}
.toggleMenu-enter {
  top: -100%;
  
}
.toggleMenu-enter-to {
  top: 0;
  transition: all 1s;
}
.toggleMenu-leave {
  top: 0;
  
}
.toggleMenu-leave-to {
  top: -100%;
  transition: all 1s;
}
</style>
