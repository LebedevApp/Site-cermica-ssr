<template>
  <section>
    <v-img
      class="partner"
      v-for="card in content"
      :key="card.name"
      :src="card.img"
    >
      <v-container>
        <v-row justify="end" align="center" style="height: 650px">
          <v-col class="mb-n16 mb-md-0" cols="12" md="6" sm="12"> </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-card class="mt-16">
              <v-list-item-title
                class="text-h4 text-md-h2 font-weight-black text-center my-3 pt-5"
                >{{ card.title }}</v-list-item-title
              >
              <v-card-title>
                {{ card.subtitle }}
              </v-card-title>
              <v-card-text>
                {{ card.text }}
              </v-card-text>
              <v-card-actions class="text-center">
                <v-btn class="ma-2" outlined color="indigo" to="/article">
                  Подробней
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </section>
</template>
    
<script>
export default {
  name: "partners-page",

  data() {
    return {
      content: [
        {
          name: "Gasprom",
          img: "img/gasprom.jpg",
          icon: "",
          title: "Газпром",
          subtitle:
            "Jesse Ortega // Architectural Chief Engineer, Autonomous and Electric Vehicle Programs",
          text:
            "We believe it’s our responsibility to leave the world in a better place than we found it while working to become the most inclusive company in the world.",
          to: "",
        },
        {
          name: "mvd",
          img: "img/mvd.jpg",
          title: "МВД РФ",
          subtitle:
            "Jesse Ortega // Architectural Chief Engineer, Autonomous and Electric Vehicle Programs",
          text:
            "We believe it’s our responsibility to leave the world in a better place than we found it while working to become the most inclusive company in the world.",
          to: "",
        },
        {
          name: "Other",
          img: "img/partners/Fotoram.io (8).jpg",
          title: "Еще что-то",
          subtitle:
            "Jesse Ortega // Architectural Chief Engineer, Autonomous and Electric Vehicle Programs",
          text:
            "We believe it’s our responsibility to leave the world in a better place than we found it while working to become the most inclusive company in the world.",
          to: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.partner {
  width: 100%;
  height: 750px;
  object-fit: cover;
}
</style>