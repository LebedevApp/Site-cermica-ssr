<template>
  <section class="channelbox section">
    <v-container class="py-8">
      <v-list-item-title class="text-button font-weight-bold grey--text">{{
        content.extra_title
      }}</v-list-item-title>
      <v-row align="center">
        <v-col cols="12" lg="7" md="7" sm="12">
          <v-list-item-content>
            <v-list-item-title
              class="ml-2 text-body-1 text-lg-h5 font-weight-light text-center text-md-left"
              >{{ content.title }}</v-list-item-title
            >
            <v-list-item-action-text
              class="my-1 my-md-3 font-weight-light text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center text-md-left"
              >{{ content.text }}</v-list-item-action-text
            >
            
          </v-list-item-content>
          <v-divider class="my-4"></v-divider>
        </v-col>
        <v-col cols="12" lg="5" md="5" sm="12">
            <v-list color="rgba(0,0,0,0)" v-for="item in content.advantages" :key="item.icon">
                <v-list-item class="my-5">
                    <v-icon class="mx-4" size="85" color="blue darken-1">{{item.icon}}</v-icon>
                    <v-list-item-content class="font-weight-light text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center text-md-left">{{item.description}}</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'our-sevice',
  
  data() {
    return {
      content: {
        name: "Service",
        extra_title: "Наше производство",
        title: "Почему керамическая мембрана?",
        text:
          "We believe that autonomous vehicles will have enormous potential benefits for society in the form of increased safety and access to transportation. Since we believe that all AVs should be EVs, these efforts will clearly advance our vision of zero crashes, zero emissions and zero congestion, and help us build a more sustainable and accessible world. ",
          advantages: [
              {
                  icon: 'mdi-earth',
                  description: 'Данное описание'
              },
              {
                  icon: 'mdi-finance',
                  description: 'Данное описание'
              },
              {
                  icon: 'mdi-fire',
                  description: 'Данное описание'
              },
          ]
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.channelbox {
  background-color: #eceff1;
}
</style>