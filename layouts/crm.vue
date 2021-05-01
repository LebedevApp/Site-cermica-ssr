<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-treeview :items="treeview">
        <template slot="label" slot-scope="props">
          <nuxt-link :to="props.item.to" v-if="props.item.to"><v-icon class="mr-2 mb-1">{{props.item.icon}}</v-icon>{{props.item.name}}</nuxt-link>
          <span v-else>{{props.item.name}}</span>
        </template>
      </v-treeview>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mini CRM</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
        drawer: true,
        treeview: [
            {
                id:1,
                icon: 'mdi-home',
                name: 'Главная страница',
                to: '/crm'
            },
        ]
    };
  },
  computed: {
      links() {
          return this.$store.getters["crm/nuxtServerInit"]
      }
  },
  async fetch() {
    await this.$store.dispatch('nuxtServerInit')
  }
};
</script>

<style lang="scss" scoped>
  a{
    text-decoration: none;
    color: black;
  }
</style>