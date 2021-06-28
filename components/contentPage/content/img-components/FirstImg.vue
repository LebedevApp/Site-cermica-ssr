<template>
  <section class="img">
    <v-img class="img_item" :src="content.img">
      <div class="img_gradient">
        <div class="img_block d-flex justify-start align-center">
          <v-container>
            <div class="img_content">
              <v-list-item-content>
                <h1
                  class="img_title white--text text-h4 text-lg-h3 text-left  font-weight-medium"
                >
                  <span
                    class="light-blue--text text-h4 text-lg-h3 font-weight-black"
                    >{{ content.title.split("").slice(0, 3).join("") }}</span
                  >{{ content.title.split("").splice(3).join("") }}
                </h1>
              </v-list-item-content>

              <v-list-item-content
                v-if="content.text"
                class="img_text white--text text-body-2 text-md-h6 font-weight-medium text-left my-3"
              >
                {{ content.text }}
              </v-list-item-content>
            </div>
          </v-container>
        </div>
      </div>
    </v-img>
  </section>
</template>

<script>
export default {
  name: 'first-img',

  props: {
    content: {
      type: Object,
      require: true
    }
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  &_item {
    object-fit: cover;
    height: 85vh;
  }
  &_gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    );
  }
  &_block {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  &_content {
    width: 70%;
  }
  &_text {
    &::after {
      content: "";
      display: block;
      border: 0;
      border-top: 1px solid #fff;
      width: 100px;
      margin-top: 3rem;
    }
  }
}
@media (max-width: 800px) {
  .img_content {
    width: 100%;
  }
}
</style>