<template>
  <section>
    <v-card class="slider pa-3 my-12">
      <v-list-group>
        <template v-slot:activator>
          <h1>Табы</h1>
        </template>

        <v-card class="pa-3 my-12" v-for="(CARD, idx) in CONTENT" :key="idx">
          <h2 class="my-4">{{ CARD.BUTTON_NAME }}</h2>
          <v-divider></v-divider>
          <h3 class="my-4">{{CARD.EXTRA_TITLE}}</h3>
          <h4 class="my-4">{{CARD.TITLE}}</h4>
          <v-list-item-content>{{ CARD.TEXT }}</v-list-item-content>
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