<template>
  <section class="custom-header">
    <v-container class="my-4">
      <v-row>
        <v-col>
          <v-row align="center">
            <v-btn fab icon dark color="white" class="menu" @click="openMenu">
              <v-icon size="36" color="white">mdi-menu</v-icon>
            </v-btn>
            <img height="60" class="logo ml-1 ml-md-5" src="../../../../static/img/logo/logo-min.png" @click="$router.push('/')" />
          </v-row>
        </v-col>
        <v-col class="text-right" cols="1" sm="4">
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
                <v-menu
                  transition="slide-y-transition"
                  bottom
                  min-width="150"
                  max-width="350"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      class="mx-2"
                      size="25"
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      >mdi-chevron-down
                    </v-icon>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="contact in contact_info.tel"
                      :key="contact.tel"
                    >
                      <v-list-item-content>
                        <v-list-item>
                          <v-avatar color="indigo" size="36" class="ml-n4 mr-3" >
                            <v-icon dark> mdi-account-circle </v-icon>
                          </v-avatar>
                          <v-list-item-content>
                            <v-list-item-title>{{
                          contact.name
                        }}</v-list-item-title>
                        <v-divider></v-divider>
                        <v-list-item-content class="body-2 font-weight-light">{{
                          contact.prof
                        }}</v-list-item-content>
                          </v-list-item-content>
                        </v-list-item>
                        
                        <v-list-item class="mt-2"
                          ><v-icon class="ml-5 mr-3">mdi-phone</v-icon
                          ><a
                            class="links black--text"
                            style="text-decoration: none"
                            :href="contact.telLink"
                          >
                            {{ contact.tel }}</a
                          ></v-list-item
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <a
                class="links_tel white--text"
                style="text-decoration: none ; display: inline"
                href="mailto:info@ceramicfilter.ru?subject=Обратный звонок"
              >
                info@ceramicfilter.ru</a
              >
                </v-list-item-subtitle
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
              <app-card-call @closeDialog="closeDialog" />
            </v-dialog>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import AppCardCall from '@/components/contentPage/content/header-component/TheCardCall'

export default {
  name: 'app-header',

  components: {
    AppCardCall
  },

  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    contact_info() {
      return this.$store.getters["GET_CONTACT_INFO"];
    },
  },

  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
    closeDialog() {
      this.dialog = false
    }
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
.logo {
  cursor: pointer;
  height: 60px;
}
@media (max-width: 774px) {
  .content_info {
    display: none;
  }
  .logo {
    height: 45px;
  }
}
</style>