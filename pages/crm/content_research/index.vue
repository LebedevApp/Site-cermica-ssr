<template>
  <section>
    <v-container>
      <h1 class="my-8 text-center">Лабораторные исследования</h1>

      <app-first-img-edit :CONTENT="CONTENT_PAGE" />

      <app-description-edit :CONTENT="CONTENT_PAGE" />

      <app-block-with-edit :CONTENT="CONTENT_PAGE" />

      <app-our-service-edit :CONTENT="CONTENT_PAGE" />

      <app-tabs-edit :CONTENT="CONTENT_PAGE" />
    </v-container>
  </section>
</template>


<script>
import AppFirstImgEdit from "@/components/crm/edit_components/img_content.vue";
import AppDescriptionEdit from "@/components/crm/edit_components/description_content.vue";
import AppBlockWithEdit from "@/components/crm/edit_components/block_with_contents.vue";
import AppOurServiceEdit from "@/components/crm/edit_components/our_service_content";
import AppTabsEdit from "@/components/crm/edit_components/tabs_edit";

export default {
  layout: "crm",

  name: "content-porous-ceramics",

  components: {
    AppFirstImgEdit,
    AppDescriptionEdit,
    AppBlockWithEdit,
    AppOurServiceEdit,
    AppTabsEdit,
  },

  computed: {
    GET_CONTENT() {
      return this.$store.getters["crm/GET_CONTENT"];
    },
    CONTENT_PAGE() {
      return this.GET_CONTENT.RESEARCH_PAGE;
    },
  },
};
</script>