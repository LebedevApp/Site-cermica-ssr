<template>
  <section class="channelbox section">
    <v-container>
      <v-list-item-action class="text-left text-button font-weight-bold grey--text"
        >Технические характеристики</v-list-item-action
      >
      <v-row
        justify="center"
        align="center"
        
      >
        <v-col cols="12" md="6" v-for="cols in content"
        :key="cols.text">
          <v-list-item-content>
            <v-list-item-title class="ml-2 text-body-1 text-lg-h5 font-weight-light text-center text-md-left">{{ cols.title }}</v-list-item-title>
            <v-divider class="my-4"></v-divider>
            <v-list-item-action-text class="my-1 my-md-3 font-weight-light text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center text-md-left">{{ cols.text }}</v-list-item-action-text>
          </v-list-item-content>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'characteristic',

  props: ["content"],
};
</script>