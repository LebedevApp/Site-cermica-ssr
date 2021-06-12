<template>
  <section class="content">
    <v-container>
      <v-row align="center" class="mb-4">
        <v-col cols="12" lg="7" md="7" sm="12">
          <img class="img" :src="content.img" alt="" />
        </v-col>
        <v-col cols="12" lg="5" md="5" sm="12">
          <v-list>
            <v-list-item-content>
              <v-list-item-title
                class="ml-2 text-body-1 text-lg-h4 font-weight-bold text-center text-md-left"
                >{{ content.title }}</v-list-item-title
              >
              <v-list-item-action-text
                class="my-1 my-md-3 font-weight-light text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center text-md-left"
                >{{ content.text }}</v-list-item-action-text
              >
              <v-list-item-action-text
                class="my-1 my-md-3 font-weight-regular text-caption text-center text-md-left"
              >
                <v-icon class="mr-3">mdi-cog-outline</v-icon>
                {{ content.subtitle }}</v-list-item-action-text
              >
            </v-list-item-content>
            <div class="text-center text-md-left">
              <v-btn
                class="mx-auto"
                outlined
                color="blue darken-1"
                to="/article"
              >
                Подробней
              </v-btn>
            </div>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'content-block',
  
  props: {
    content: {
      type: Object,
      require: true,
      default: {
        img: "img/error/error.img",
        title: "No text",
        text: "No text",
        subtext: "No text",
        to: "/",
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
}
</style>