<template>
  <div class="menu">
    <v-container>
      <v-row justify="space-around" align="center">
        <v-col>
          <h1 class="white--text">Logo</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-right">
          <v-btn x-large color="white" icon @click="close"
            ><v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-text-field
        solo
        label="Что-то ищем?"
        prepend-icon="mdi-magnify"
        v-model.trim="search"
        @input="sendSearh"
      ></v-text-field>
    </v-container>

    <transition name="scroll" mode="out-in">
      <app-links v-if="!search" @closeMenu="close" />
      <app-search v-else @closeMenu="close" />
    </transition>
  </div>
</template>

<script>
import AppLinks from "@/components/contentPage/content/menu-components/LinksToMenu";
import AppSearch from "@/components/contentPage/content/menu-components/TheSearch";

export default {
  name: "Menu",

  components: { AppLinks, AppSearch },

  computed: {
    article() {
      return this.$store.getters['GET_MULTIPLE']
    }
  },

  data() {
    return {
      search: null,
    };
  },

  methods: {
    close() {
      this.$emit("close");
    },
    closeMenu() {
      this.$emit("close");
    },
    addDiscription(payload) {
      this.card = payload;
    },
    removeDescription() {
      this.card = null;
    },
    sendSearh() {
      const obj = {
        search: this.search,
        article: this.article
      }
      this.$store.commit('search/GET_DATA', obj)
    }
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  background-color: rgba(117, 193, 255, 1);
  overflow-y: scroll;
  position: fixed;
  z-index: 50;
  margin-right: 10px;
}
.link {
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.block {
  overflow: hidden;
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

//------transition------

.scroll-enter {
  transform: translateX(100%);
}

.scroll-enter-to {
  transform: translateX(0);
  transition: all .2s;
}

.scroll-leave {
  transform: translateX(0);
  transition: all .2s;
}

.scroll-leave-to {
  transform: translateX(-100%);
}
</style>