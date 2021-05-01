<template>
  <header class="header py-2">
    <v-container class="px-5">
      <v-row align="center" justify="start">
        <v-col>
          <v-row align="center">
            <v-btn fab icon dark color="white" class="menu" @click="openMenu">
              <v-icon size="36" color="white">mdi-menu</v-icon>
            </v-btn>
            <h1 class="white--text mx-3">Logo</h1>
          </v-row>
        </v-col>
        <v-col class="text-right">
          <v-row justify="end" align="center">
            <v-list-item-content class="content_info text-right mr-3">
              <v-list-item-title> + 7 (568)-457-45-78 </v-list-item-title>
              <v-list-item-subtitle> test@mail.ru </v-list-item-subtitle>
            </v-list-item-content>

            <v-btn
              class="mx-2"
              fab
              dark
              color="blue"
              @click.stop="dialog = true"
            >
              <v-icon dark size="36"> mdi-phone </v-icon>
            </v-btn>

            <v-dialog v-model="dialog" max-width="500">
              <v-card>
                <v-card-title class="headline text-body-1">
                  Заказать обратный звонок
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="mt-5 mb-n5">
                  <v-text-field
                    label="Введите имя"
                    placeholder="Ваше имя?"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    label="Введите телефон"
                    placeholder="Ваш номер телефона?"
                    outlined
                    dense
                  ></v-text-field>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  

                  <v-btn color="red darken-1" outlined text @click="dialog = false">
                    Назад
                  </v-btn>
                            <v-spacer></v-spacer>
                  <v-btn color="green darken-1" outlined text @click="dialog = false">
                    Заказать
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  color: white;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
}

.contact {
  position: relative;
}
.links_link {
  text-decoration: none;
}
@media (max-width: 460px) {
  .content_info {
    display: none;
  }
}
</style>