<template>
  <v-list class="d-flex justify-center flex-wrap flex-sm-wrap flex-md-nowrap">
    <v-hover v-slot="{ hover }" v-for="card in cards" :key="card.img">
      <v-expand-transition>
        <v-card
          :elevation="hover ? 16 : 2"
          rounded="true"
          class="rounded-xl ma-4 transition-fast-in-fast-out"
          min-width="300"
          max-width="350"
          :img="card.img"
          style="position: relative"
        >
          <div class="gradient pt-16">
            <h2
              class="
                white--text
                text-center
                font-weight-black
                text-body-1 text-sm-body-1 text-md-body-1 text-lg-h6
                pt-16
              "
              >{{ card.title }}</h2
            >
            <v-card-text
              class="
                white--text
                text-caption text-sm-body-2 text-md-body-1
                mb-8
              "
              >{{ card.description }}</v-card-text
            >

            <v-btn class="btn" rounded outlined color="white" :to="card.to"
              >Узнать</v-btn
            >
          </div>
        </v-card>
      </v-expand-transition>
    </v-hover>
  </v-list>
</template>


<script>
export default {
  name: "cards",

  parent: "advantages-component",

  props: ["cards"],
};
</script>

<style lang="scss" scoped>
.gradient {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(117, 193, 255, 1),
    rgba(117, 193, 255, 0.1)
  );
  border-bottom-left-radius: 50px;
  overflow: hidden;
}
.btn {
  position: absolute;
  bottom: 2%;
  right: 5%;
}
</style>