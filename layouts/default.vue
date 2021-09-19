<template>
  <v-app>
    <app-headers @openMenu="openMenu" class="header-noscroll" key="noscroll" />

    <no-ssr>
      <v-card v-if="isUserLogginIn" class="menu_crm" elevation="15" width="150">
        <v-card-actions>
          <v-row justify="center" align="center">
            <p class="mt-4 mr-3 font-weight-regular text-body-1">CRM</p>
            <div>
              <v-btn
                class="mx-1"
                x-small
                outlined
                fab
                color="indigo"
                to="/login"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </div>
            <div>
              <v-btn
                class="mx-1"
                x-small
                outlined
                fab
                color="indigo"
                :loading="loading"
                @click="logout"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </v-row>
        </v-card-actions>
      </v-card>
    </no-ssr>

    <transition name="scroll" mode="out-in">
      <app-scroll-btn v-if="scroll" />
    </transition>

    <transition name="toggleMenu">
      <app-menu v-if="menu" @close="close" />
    </transition>

    <v-main>
      <nuxt />
    </v-main>

    <!--<v-btn outlined @click="saveSQL">Сохранить базу</v-btn>-->

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
  name: "default-layout",

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
      isUser: null,
    };
  },

  computed: {
    CONTENT_SITE() {
      return this.$store.getters["options/GET_CONTENT_ALL"];
    },
    isUserLogginIn() {
      return this.$store.getters["user/IS_USER_LIGGIN_IN"];
    },
    loading() {
      return this.$store.getters["user/GET_LOADING"];
    },
  },

  /* watch: {
    menu() {
      this.menu
        ? (document.body.style.position = "fixed")
        : (document.body.style.position = "relative");
      document.body.classList.toggle("scroll");
    },
  },*/

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
    saveSQL() {
      this.$store.dispatch("crm/LOAD_CONTENT");
    },
    logout() {
      this.$store
        .dispatch("user/LOGOUT")
        .then(() => {})
        .catch(() => {});
    },
  },

  async fetch() {
    await this.$store.dispatch("nuxtServerInit")
  },
};
</script>

<style lang="scss">
body {
  position: relative;
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
//-------------
.menu_crm {
  position: absolute;
  top: 3%;
  left: 2%;
  z-index: 50;
}
</style>
