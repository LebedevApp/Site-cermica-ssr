<template>
  <section>
    <v-card class="slider pa-3 my-12">
      <v-list-group>
        <template v-slot:activator>
          <h1>Блок с контентом</h1>
        </template>

        <v-card class="pa-3 my-12">
          <h2>{{ CONTENT.TITLE }}</h2>
          <v-divider></v-divider>
          <v-list-item-content>{{ CONTENT.TEXT }}</v-list-item-content>
          <v-list-item-content>{{ CONTENT.DESCRIPTION }}</v-list-item-content>
          <v-divider></v-divider>
          <v-row class="my-2">
            <v-spacer></v-spacer>

            <v-btn class="ma-2" outlined color="indigo">
              <v-icon>mdi-pencil</v-icon>Редактировать
            </v-btn>
          </v-row>
        </v-card>
      </v-list-group>
    </v-card>
  </section>
</template>

<script>
export default {
  props: ["CONTENT"],
};
</script>