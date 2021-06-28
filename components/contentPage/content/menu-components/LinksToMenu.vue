<template>
  <v-container class="my-8">
    <v-row justify="center" align="start">
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-list-item-subtitle
          class="ml-2 secondary--text text-body-1 text-lg-h6 font-weight-black text-center text-md-left"
          ><v-icon class="mx-2">mdi-cog-outline</v-icon>Услуги
          компании</v-list-item-subtitle
        >
        <v-divider class="my-3"></v-divider>
        <v-list-item
          link
          v-for="service in links.service"
          :key="service.title"
          :to="service.to"
          class="link secondary--text font-weight-ligh"
          @click="closeMenu"
        >
          {{ service.title }}
        </v-list-item>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-list-item-subtitle
          class="ml-2 secondary--text text-body-1 text-lg-h6 font-weight-black text-center text-md-left"
          ><v-icon class="mx-2">mdi-note</v-icon
          >Документация</v-list-item-subtitle
        >
        <v-divider class="my-3"></v-divider>
        <v-list-item
          link
          v-for="documentation in links.documentation"
          :key="documentation.title"
          :to="documentation.to"
          class="link secondary--text font-weight-ligh"
          @click="closeMenu"
        >
          {{ documentation.title }}
        </v-list-item>

        <v-list-item-subtitle
          class="ml-2 secondary--text text-body-1 text-lg-h6 font-weight-black text-center text-md-left"
          ><v-icon class="mx-2">mdi-account-box</v-icon
          >Контакты</v-list-item-subtitle
        >
        <v-divider class="my-3"></v-divider>
        <v-list-item
          link
          v-for="contact in links.contact"
          :key="contact.title"
          :to="contact.to"
          class="link secondary--text font-weight-ligh"
          @click="closeMenu"
        >
          {{ contact.title }}
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'links',

  computed: {
    links() {
      return this.$store.getters["GET_LINKS"];
    },
  },
  
  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
}
</style>