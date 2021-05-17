<template>
  <section>
    <v-parallax :src="content.img" height="650">
      <v-container >
        <v-row justify="end" align="center">
          <v-col class=" mb-n16 mb-md-0" cols="12" md="6" sm="12">
            <v-list-item-title class=" text-h4 text-md-h2 font-weight-black text-center text-md-left">{{ content.title }}</v-list-item-title>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-card class="mt-16">
              <v-card-title>
                {{ content.subtitle }}
              </v-card-title>
              <v-card-text>
                {{ content.text }}
              </v-card-text>
              <v-card-actions class="text-center">
                <v-btn class="ma-2" outlined color="indigo">
                  Подробней
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
export default {
    props: ['content'],
  data() {
    return {
      fd: {
        name: "Gasprom",
        img: "img/partners/russia.jpg",
        icon: "",
        title: "Газпром",
        subtitle:
          "Jesse Ortega // Architectural Chief Engineer, Autonomous and Electric Vehicle Programs",
        text:
          "We believe it’s our responsibility to leave the world in a better place than we found it while working to become the most inclusive company in the world.",
        to: "",
      },
    };
  },
};
</script>

