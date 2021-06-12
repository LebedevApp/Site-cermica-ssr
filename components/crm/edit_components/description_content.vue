<template>
  <section>
    <v-card class="pa-3 my-12">
      <h4>{{ DESCRIPTION }}</h4>
      <v-row class="my-2">
        <v-spacer></v-spacer>

        <v-btn class="ma-2" outlined color="indigo">
          <v-icon>mdi-pencil</v-icon>Редактировать
        </v-btn>
      </v-row>
    </v-card>
  </section>
</template>

<script>
export default {
  props: ["DESCRIPTION"],
};
</script>