<template>
  <v-container>
    <h1 class="text-center my-3">Тайм лайн</h1>
    <v-btn outlined color="green" @click="addToCard"
      ><v-icon class="mr-3">mdi-plus</v-icon>Добавить</v-btn
    >
    <v-divider class="my-3"></v-divider>
    <v-row v-if="time_line">
      <v-col cols="12" md="4" v-for="(item, i) in time_line" :key="i">
        <v-card>
          <v-container>
            <h4 class="my-2">{{ item.title }}</h4>
            <v-divider class="my-2"></v-divider>
            <p class="my-2">{{ item.date }}</p>
            <p class="my-2">{{ item.description }}</p>
            <v-divider class="my-2"></v-divider>

            <v-card-actions>
              <v-btn
                outlined
                color="blue"
                fab
                small
                @click="remove(item)"
                v-if="time_line.length > 1"
                ><v-icon class="mx-3">mdi-close</v-icon></v-btn
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
      v-model="addModal"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <app-time-line-card
        @closeAddModal="closeAddModal"
        :time_line="time_line"
      />
    </v-dialog>

    <v-dialog
      v-model="modal"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <modal-content @close="close" :card="card" />
    </v-dialog>
  </v-container>
</template>

<script>
import AppTimeLineCard from "@/components/customCRM/AddTimeLineCard";
import ModalContent from "@/components/customCRM/Modal_content";

export default {
  name: "crm_time_line_page",

  layout: "customCRM",

  components: {
    AppTimeLineCard,
    ModalContent,
  },

  computed: {
    time_line() {
      return this.$store.getters["GET_TIME_LINE"];
    },
  },

  data() {
    return {
      addModal: false,
      modal: false,
      card: null,
      img: '../../../static/img/pexels-marian.jpg'
    };
  },

  methods: {
    addToCard() {
      this.addModal = true;
    },
    closeAddModal() {
      this.addModal = false;
    },
    remove(item) {
      const arr = this.time_line;
      this.$store.commit("addCard/REMOVE_CARD", { item, arr });
      this.$store
        .dispatch("RE_CONTENT")
        .then(() => {
          this.loading = false;
          this.$emit("closeAddModal");
        })
        .catch(() => {
          const err = "Не удалось удалить";
          this.$store.commit("user/SET_ERRORS", err);
          this.loading = false;
        });
    },
    open(item) {
      this.card = item;
      this.modal = true;
    },
    close() {
      this.modal = false;
    },
  },
};
</script>