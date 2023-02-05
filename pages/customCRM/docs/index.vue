<template>
<v-container>
  <h1 class="text-center my-3">Документы</h1>
  <v-btn outlined color="green" @click="addToCard"
    ><v-icon class="mr-3">mdi-plus</v-icon>Добавить</v-btn
  >
  <v-divider class="my-3"></v-divider>
  <v-row v-if="docs && docs.length">
    <v-col cols="12" md="4" v-for="(item, i) in docs" :key="i">
      <v-card>
        <v-container>
          <img class="img my-2" :src="item.img"/>
          <v-divider class="my-2"></v-divider>
          <h4 class="my-2">{{ item.title }}</h4>
          <v-divider class="my-2"></v-divider>
          <v-card-actions>
              <v-btn
                outlined
                color="blue"
                fab
                small
                @click="remove(item.id)"
                v-if="docs.length"
                ><v-icon class="mx-3">mdi-close</v-icon></v-btn
              >
              <v-btn
                outlined
                color="blue"
                fab
                small
                @click="check(item.url)"
                v-if="item.url"
                ><v-icon class="mx-3">mdi-eye-outline</v-icon></v-btn
              >
              <v-spacer></v-spacer>
              <v-btn outlined color="blue" fab small @click="open(item)"
                ><v-icon class="mx-3">mdi-pencil</v-icon></v-btn
              >
            </v-card-actions>
        </v-container>
      </v-card>
    </v-col>
  </v-row>

  <v-dialog
    v-if="addModal"
    v-model="addModal"
    persistent
    min-width="350"
    max-width="600"
    class="ma-6"
    :retain-focus="false"
  >
    <app-docs-card
      @closeAddModal="closeAddModal"
      :docs="curDoc"
    />
  </v-dialog>
</v-container>
</template>

<script>
import AppDocsCard from "@/components/customCRM/AddDocsCard";

export default {
  name: "DocsPage",

  layout: "customCRM",

  components: {
    AppDocsCard
  },

  data() {
    return {
      addModal: false,
      docs: null,
      modal: false,
      card: null,
      img: '../../../static/img/pexels-marian.jpg',

      curDoc: null
    };
  },

  created() {
    this.docs = this.$store.getters["GET_DOCS"] || []
  },

  methods: {
    check(url) {
      window.open(url, "_blank")
    },

    addToCard() {
      this.addModal = true;
      this.curDoc = null
    },

    closeAddModal() {
      this.addModal = false;
      this.docs = this.$store.getters["GET_DOCS"] || []
    },

    async remove(id) {
      try {
        await this.$store.dispatch("REMOVE_DOCS", { id })
      } catch (e) {
        this.$store.commit("user/SET_ERRORS", "Не удалось удалить");
        console.error(e)
      } finally {
        this.docs = this.$store.getters["GET_DOCS"] || []
      }
    },

    open(item) {
      this.curDoc = item
      this.addModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
</style>
