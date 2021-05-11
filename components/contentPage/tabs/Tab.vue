<template>
  <div class="tab">
    <v-img class="tab_img gradient" :src="tab.img">
      <div class="gradient d-flex justify-start align-start">
        <v-container>
          <div class="tab_block">
              <v-list-item-content class="text-button font-weight-bold white--text">
                  {{tab.title}}
              </v-list-item-content>
            <v-list-item-content
              
              >
              <v-list-item-action class="white--text ml-2 my-4 text-body-1 text-lg-h5 font-weight-light text-center text-md-left"> {{ tab.subtitle }}</v-list-item-action>
              </v-list-item-content
            >
            <v-list-item-action-text
              class="white--text my-4 my-md-3 font-weight-light text-caption text-sm-body-2 text-md-body-2 text-xl-h6 text-center text-md-left"
              >{{ tab.text }}</v-list-item-action-text
            >
            <v-btn v-if="tab.to" style="display: block" class="ma-2 mt-8" outlined color="white">Подробней</v-btn>
          </div>
        </v-container>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  props: ["tab"],
};
</script>

<style lang="scss" scoped>
.tab {
  &_img {
    width: 100%;
    min-height: 600px;
    max-height: 600px;
    object-fit: cover;
  }
}
.tab_block {
  width: 50%;
}
.gradient {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(1, 87, 155, 0.8),
    rgba(0, 0, 0, 0.5),
    rgba(1, 87, 155, 0.8)
  );
}
@media (max-width: 800px) {
  .tab_block {
    width: 100%;
  }
}
</style>