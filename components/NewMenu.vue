<template>
  <div class="menu">
    <v-container>
      <v-row justify="space-around" align="center">
        <v-col>
          <h1 class="white--text">Logo</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="text-right">
          <v-btn x-large color="white" icon @click="close"
            ><v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      </v-container>

      <v-container>
        <v-text-field
            solo
            label="Что-то ищем?"
            prepend-icon="mdi-magnify"
          ></v-text-field>
      </v-container>

      <AppLinks @closeMenu='close' />
    
  </div>
</template>

<script>
import AppLinks from "../components/LnksSite"
export default {
  components: {AppLinks},
  data() {
    return {
     
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    closeMenu() {
      this.$emit("close");
    },
    addDiscription(payload) {
      this.card = payload;
    },
    removeDescription() {
      this.card = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  background-color: rgba(117, 193, 255, 1);
  overflow-y: hidden;
  position: fixed;
  z-index: 50;
  margin-right: 10px;
  //overflow-y: scroll;
}
.link {
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.block {
  overflow: hidden;
}


@media (max-width: 1025px) {
  .desktop {
    display: none;
  }
}
@media (min-width: 1025px) {
  .mobile {
    display: none;
  }
}
</style>