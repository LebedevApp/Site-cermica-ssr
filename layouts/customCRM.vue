<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped width="350">
      <v-treeview :items="treeview" class="mt-6 ml-2" transition>
        <template slot="label" slot-scope="props">
          <nuxt-link :to="props.item.to" v-if="props.item.to"
            ><v-icon class="mr-2 mb-1">{{ props.item.icon }}</v-icon
            >{{ props.item.name }}</nuxt-link
          >
          <span v-else
            ><v-icon class="mr-2 mb-1">{{ props.item.icon }}</v-icon
            >{{ props.item.name }}</span
          >
        </template>
      </v-treeview>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="light-blue darken-1"
      elevation="10"
      clipped-left
      class="white--text"
    >
      <v-icon @click="drawer = !drawer" color="white" size="32" class="mx-4"
        >mdi-menu</v-icon
      >

      <v-toolbar-title @click="linkToMain">The Custom CRM</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ma-2" outlined color="white" to="/"
        ><v-icon class="mr-3">mdi-home</v-icon> Сайт
      </v-btn>
      <v-btn
        class="ma-2"
        outlined
        color="white"
        :loading="loading"
        @click="logout"
        ><v-icon class="mr-3">mdi-logout</v-icon> Выход
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <template v-if="errors">
      <v-snackbar value="true" timeout="7000" @input="closeError">
        {{ errors }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="closeError">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters["user/GET_LOADING"];
    },
    errors() {
      return this.$store.getters["user/GET_ERRORS"];
    },
  },

  async fetch() {
    await this.$store.dispatch("nuxtServerInit");
  },

  middleware({ store, redirect }) {
    if (!store.state.user.user) {
      return redirect("/login");
    }
    return;
  },

  data() {
    return {
      drawer: false,
      treeview: [
        {
          id: 1,
          icon: "mdi-home",
          name: "Главная страница",
          to: "/customCRM/main_page",
        },
        {
          id: 2,
          icon: "mdi-source-branch ",
          name: "Страницы услуг",
          children: [
            {
              id: 1,
              icon: "mdi-rhombus-split",
              name: "Пористая керамика",
              to: "/customCRM/porous_ceramic_page",
            },
            {
              id: 2,
              icon: "mdi-rhombus-split",
              name: "Керамические мембраны",
              to: "/customCRM/ceramics_membranes_page",
            },
            {
              id: 3,
              icon: "mdi-rhombus-split",
              name: "Лабараторные исследования",
              to: "/customCRM/research_page",
            },
            {
              id: 4,
              icon: "mdi-rhombus-split",
              name: "Водоподготовка",
              to: "/customCRM/water_treatment_page",
            },
          ],
        },
        {
          id: 3,
          icon: "mdi-source-branch ",
          name: "Общие блоки",
          children: [
            {
              id: 1,
              icon: "mdi-rhombus-split",
              name: "Тайм лайн",
              to: "/customCRM/time_line",
            },
            {
              id: 2,
              icon: "mdi-rhombus-split",
              name: "Статьи",
              to: "/customCRM/article",
            },
          ],
        },
      ],
    };
  },

  methods: {
    logout() {
      this.$store
        .dispatch("user/LOGOUT")
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {});
    },
    closeError() {
      this.$store.commit("user/CLEAR_ERRORS");
    },
    linkToMain() {
      this.$router.push("/customCRM");
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
</style>