<template>
  <div>
    <v-card
      class="slider pa-3 my-12"
      v-for="block in page.content"
      :key="block.blockName"
    >
      <v-list-group>
        <template v-slot:activator>
          <h1>{{ block.blockName }}</h1>
        </template>

        <div v-if="block.name === 'Slider'">
          <v-card
            class="slider pa-3 my-12"
            v-for="slider in block.sliders"
            :key="slider.id"
          >
            <h2>{{ slider.title }}</h2>
            <v-divider></v-divider>
            <v-list-item-content>{{ slider.text }}</v-list-item-content>
            <v-divider></v-divider>
            <v-row class="my-2">
              <v-spacer></v-spacer>

              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                @click="openDialogSlider(slider)"
              >
                <v-icon>mdi-pencil</v-icon>Редактировать
              </v-btn>
            </v-row>
          </v-card>
        </div>

        <div v-else-if="block.name === 'Cards'">
          <v-card
            class="slider pa-3 my-12"
            v-for="card in block.cards"
            :key="card.id"
          >
            <h2>{{ card.title }}</h2>
            <v-divider></v-divider>
            <v-list-item-content>{{ card.text }}</v-list-item-content>
            <v-divider></v-divider>
            <v-row class="my-2">
              <v-spacer></v-spacer>

              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                @click="openDialogCard(card)"
              >
                <v-icon>mdi-pencil</v-icon>Редактировать
              </v-btn>
            </v-row>
          </v-card>
        </div>

        <div v-else>
          <v-card class="slider pa-3 my-12">
            <h2>{{ block.title }}</h2>
            <v-divider></v-divider>
            <v-list-item-content>{{ block.text }}</v-list-item-content>
            <v-list-item-content>{{ block.subtitle }}</v-list-item-content>
            <v-divider></v-divider>
            <v-row class="my-2">
              <v-spacer></v-spacer>

              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                @click="openDialog(block)"
              >
                <v-icon>mdi-pencil</v-icon>Редактировать
              </v-btn>
            </v-row>
          </v-card>
        </div>
      </v-list-group>
    </v-card>
    <v-dialog
      v-model="dialogSlider"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <ModalSlider
        @close="dialogSlider = false"
        @saveSlider="saveSlider"
        :content="content"
      />
    </v-dialog>

    <v-dialog
      v-model="dialogCards"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <ModalCards
        @close="dialogCards = false"
        @saveCard="saveCard"
        :content="content"
      />
    </v-dialog>

    <v-dialog
      v-model="dialog"
      persistent
      min-width="350"
      max-width="600"
      class="ma-6"
      :retain-focus="false"
    >
      <ModalBase
        @close="dialog = false"
        @save="saveContent"
        :content="content"
      />
    </v-dialog>
  </div>
</template>

<script>

import ModalSlider from "./ModalSlider";
import ModalCards from "./ModalCards";
import ModalBase from "./ModalBase";

export default {
  components: { ModalSlider, ModalCards, ModalBase },
  data() {
    return {
      dialog: false,
      dialogSlider: false,
      dialogCards: false
    };
  },
  computed: {
    allContent() {
      return this.$store.getters["crm/getContent"];
    },
    page() {
      return this.allContent.find((key) => {
        return key.name === "Home";
      });
    },
    content() {
      return this.$store.getters["crmSetting/getBlock"];
    },
  },
  methods: {
    bugs() {
      this.dialog = false;
    },
    openDialog(slider) {
      this.dialog = true;
      this.$store.dispatch("crmSetting/setBlock", slider);
    },
    saveContent() {
      this.dialog = false;
      this.$store.dispatch("crm/saveContent", this.allContent);
    },
    openDialogSlider(slider) {
      this.dialogSlider = true;
      this.$store.dispatch("crmSetting/setBlock", slider);
    },
    saveSlider() {
      this.dialogSlider = false;
      
      this.$store.dispatch("crm/saveContent", this.allContent);
    },
    openDialogCard(card) {
      this.dialogCards = true;
      this.$store.dispatch("crmSetting/setBlock", card);
    },
    saveCard() {
      this.dialogCards = false;
      this.$store.dispatch("crm/saveContent", this.allContent);
    }
  },
};
</script>