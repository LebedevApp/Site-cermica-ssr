<template>
  <v-card class="slider pa-3 my-12">
    <v-list-group>
      <template v-slot:activator>
        <h1 class="text-h5 font-weight-light text--secondary">{{ name }}</h1>
      </template>

      <v-card class="pa-3 my-12" v-for="(item, i) in cards" :key="i">
        <div v-if="item.button_name">
          <h4 class="text-h5 font-weight-light text--secondary my-3">Название кнопки</h4>
          <p>{{ item.button_name }}</p>
          <v-divider></v-divider>
        </div>
        <div v-if="item.title">
          <h4 class="text-h5 font-weight-light text--secondary my-3">Название карточки</h4>
          <p>{{ item.title }}</p>
          <v-divider></v-divider>
        </div>
        <div v-if="item.description" >
          <h4 class="text-h5 font-weight-light text--secondary my-3">Описание карточки</h4>
          <v-divider></v-divider>
          <p style="white-space: pre-wrap">{{ item.description }}</p>
        </div>
        <div v-if="item.text">
          <h4 class="text-h5 font-weight-light text--secondary my-3">Текст карточки</h4>
          <v-divider></v-divider>
          <p style="white-space: pre-wrap">{{ item.text }}</p>
        </div>
        <div v-if="item.article" >
          <h4 class="text-h5 font-weight-light text--secondary my-3">Статья</h4>
          <v-divider></v-divider>
          <p style="white-space: pre-wrap">{{ item.article }}</p>
        </div>

        <div class="imgs" v-if="item.imgs">
          <img class="img" v-for="(img, idx) in item.imgs" :src="img" :key="idx" />
        </div>
        <v-row class="my-2">
          <v-spacer></v-spacer>

          <v-btn class="ma-2" outlined color="indigo" @click="open(item)">
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
  </v-card>
</template>

<script>
import ModalContent from "@/components/customCRM/Modal_content";

export default {
  name: "content_cards",

  props: {
    cards: {
      type: Array,
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
    ModalContent
  },

  data() {
    return {
      card: null,
      modal: false
    }
  },

  methods: {
    open(item) {
      this.card = item
      this.modal = true;
    },
    close() {
      this.modal = false
    }
  }
};
</script>

<style lang="scss" scoped>
.imgs {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.img {
  width: 250px;
  height: 150px;
  object-fit: cover;
}
</style>