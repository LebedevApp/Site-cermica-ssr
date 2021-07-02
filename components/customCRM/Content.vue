<template>
  <v-card class="slider pa-3 my-12">
    <v-list-group>
      <template v-slot:activator>
        <h1 class="text-h5 font-weight-light text--secondary">{{ name }}</h1>
      </template>

      <v-card class="pa-3 my-12">
        <div v-if="card.title">
          <h4 class="text-h5 font-weight-light text--secondary my-3">
            Название карточки
          </h4>
          <p>{{ card.title }}</p>
          <v-divider></v-divider>
        </div>
        <div v-if="card.description" >
          <h4 class="text-h5 font-weight-light text--secondary my-3">
            Описание карточки
          </h4>
          <v-divider></v-divider>
          <p style="white-space: pre-wrap">{{ card.description }}</p>
        </div>
        <div v-if="card.text" >
          <h4 class="text-h5 font-weight-light text--secondary my-3">
            Текст карточки
          </h4>
          <v-divider></v-divider>
          <p style="white-space: pre-wrap" v-html="card.text"></p>
        </div>
        <div v-if="card.article" >
          <h4 class="text-h5 font-weight-light text--secondary my-3">Статья</h4>
          <v-divider></v-divider>
          <p style="white-space: pre-wrap" v-html="card.article"></p>
        </div>

        <div v-if="card.icons">
          <v-row align="center" justify="center">
            <v-col cols="4" v-for="(item, i) in card.icons" :key="i">
              <v-card class="pa-3 my-12">
                <p>
                  <v-icon color="blue" size="36" class="mr-3">{{
                    item.icon
                  }}</v-icon
                  >{{ item.description }}
                </p>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn class="ma-2 text-body-2" outlined color="indigo" @click="openCard(item)" >
                    <v-icon class="mr-2">mdi-pencil</v-icon>Изменить
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <v-row class="my-2">
          <v-spacer></v-spacer>

          <v-btn class="ma-2" outlined color="indigo" @click="open">
            <v-icon class="mr-2">mdi-pencil</v-icon>Редактировать
          </v-btn>
        </v-row>
      </v-card>
    </v-list-group>

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

    <v-dialog
      v-model="modalTwo"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <modal-content @close="closeTwo" :card="smallCard" />
    </v-dialog>
  </v-card>
</template>

<script>
import ModalContent from "@/components/customCRM/Modal_content";

export default {
  name: "content_card",

  props: {
    card: {
      type: Object,
      require: true,
      default() {},
    },
    name: {
      type: String,
      require: true,
      default() {},
    },
  },

  components: {
    ModalContent,
  },

  data() {
    return {
      modal: false,
      modalTwo: false,
      smallCard: null
    };
  },

  methods: {
    open() {
      this.modal = true;
    },
    close() {
      this.modal = false;
    },
    openCard(item) {
      this.smallCard = item
      this.modalTwo = true;
    },
    closeTwo() {
      this.modalTwo = false;
    }
  },
};
</script>