<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped width="350">
      <v-treeview :items="treeview" class="mt-6 ml-2">
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

      <v-toolbar-title>The Custom CRM</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="ma-2" outlined color="white" to="/"
        ><v-icon class="mr-3">mdi-home</v-icon> Сайт
      </v-btn>
      <v-btn class="ma-2" outlined color="white" :loading='loading' @click="logout"
        ><v-icon class="mr-3">mdi-logout</v-icon> Выход
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    isUserLogginIn() {
      return this.$store.getters["user/IS_USER_LIGGIN_IN"];
    },
    loading() {
      return this.$store.getters["user/GET_LOADING"];
    },
  },

  created() {
    if (!this.isUserLogginIn) {
      this.$router.push("/login");
    }
  },

  data() {
    return {
      drawer: false,
      treeview: [
        {
          id: 1,
          icon: "mdi-home",
          name: "Главная страница",
          to: "/crm",
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
              to: "/crm/content_porous_ceramics",
            },
            {
              id: 2,
              icon: "mdi-rhombus-split",
              name: "Керамические мембраны",
              to: "/crm/content_ceramic_membranes",
            },
            {
              id: 3,
              icon: "mdi-rhombus-split",
              name: "Лабараторные исследования",
              to: "/crm/content_research",
            },
            {
              id: 4,
              icon: "mdi-rhombus-split",
              name: "Водоподготовка",
              to: "/crm/content_water",
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
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
</style>