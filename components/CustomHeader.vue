<template>
  <section class="custom-header">
    <v-container class="my-4">
      <v-row>
        <v-col>
          <v-row align="center">
            <v-btn fab icon dark color="white" class="menu" @click="openMenu">
              <v-icon size="36" color="white">mdi-menu</v-icon>
            </v-btn>
            <h1
              class="white--text mx-3"
              style="cursor: pointer"
              @click="$router.push('/')"
            >
              Logo
            </h1>
          </v-row>
        </v-col>
        <v-col class="text-right" sm="4">
          <v-row justify="end" align="center">
            <v-list-item-content
              class="content_info white--text text-right mr-3"
            >
              <a
                class="links_tel white--text"
                style="text-decoration: none"
                href="tel:+79689680780"
              >
                +7 (968)-968-07-80</a
              >
              <v-list-item-subtitle
                class="email white--text"
                style="text-decoration: none"
              >
                <v-menu transition="slide-y-transition" bottom min-width="150" max-width="300">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      class="mx-2"
                      size="18"
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      >mdi-chevron-down
                    </v-icon>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="contact in CONTACT_INFO.tel"
                      :key="contact.tel"
                    >
                    <v-list-item-content>
                      <v-list-item-title>{{ contact.name }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        contact.prof
                      }}</v-list-item-subtitle>
                      <v-list-item
                        ><v-icon class="mx-2">mdi-phone</v-icon
                        ><a
                          class="links black--text"
                          style="text-decoration: none"
                          :href="contact.telLink"
                        >
                          {{contact.tel}}</a
                        ></v-list-item
                      >
                      <v-divider></v-divider>
                    </v-list-item-content>
                    
                      
                    </v-list-item>
                  </v-list>
                </v-menu>

                info@ceramicfilter.ru</v-list-item-subtitle
              >
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
                  <v-btn
                    color="red darken-1"
                    outlined
                    text
                    @click="dialog = false"
                  >
                    Назад
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    outlined
                    text
                    @click="dialog = false"
                  >
                    Заказать
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
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
  computed: {
    CONTACT_INFO() {
      return this.$store.getters["options/SAVE_CONTACT_INFO"];
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-header {
  width: 100%;
}
.email {
  overflow: visible;
}
.links_tel {
  display: block;
}
@media (max-width: 460px) {
  .content_info {
    display: none;
  }
}
</style>