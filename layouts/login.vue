<template>
  <v-app>
    <nuxt />

    <template v-if="errors">
      <v-snackbar value="true" timeout="7000" @input="closeError">
        {{ errors }}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="closeError">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (store.state.user.user) {
      return redirect("/customCRM");
    }
    return;
  },

  computed: {
    errors() {
      return this.$store.getters["user/GET_ERRORS"];
    },
  },

  data() {
    return {
      snackbar: true,
    };
  },
  methods: {
    closeError() {
      this.$store.commit("user/CLEAR_ERRORS");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>