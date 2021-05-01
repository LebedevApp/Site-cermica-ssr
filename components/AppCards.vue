<template>
  <v-list class="d-flex justify-center flex-wrap flex-sm-wrap flex-md-nowrap">
    <v-hover v-slot="{ hover }" v-for="card in cards" :key="card.img">
      <v-expand-transition>
        <v-card
          :elevation="hover ? 16 : 2"
          rounded="true"
          class="rounded-xl ma-4 transition-fast-in-fast-out"
          min-width="300"
          :img="card.img"
        >
          <div class="gradient pt-16">
            <v-card-title
              class="white--text font-weight-black text-body-1 text-sm-body-1 text-md-h6 text-lg-h4 pt-16"
              >{{ card.title }}</v-card-title
            >
            <v-card-text
              class="white--text text-caption text-sm-body-2 text-md-body-1"
              >{{ card.text }}</v-card-text
            >
            <div class="text-right mb-4 mr-4">
              <v-btn rounded outlined color="white">Узнать</v-btn>
            </div>
          </div>
        </v-card>
      </v-expand-transition>
    </v-hover>
  </v-list>
</template>


<script>
export default {
  props: ['cards'],
  data() {
    return {
      
    };
  },
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
</style>