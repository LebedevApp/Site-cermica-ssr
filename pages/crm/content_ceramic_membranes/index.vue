<template>
  <section>
    <v-container>
      <app-first-img-edit :CONTENT="CONTENT_PAGE" />

      <app-description-edit :DESCRIPTION="CONTENT_PAGE.DESCRIPTION" />

      <app-block-with-edit
        :CONTENT="CONTENT_PAGE.CONTENT.CONTENT_BLOCK"
      />

      <app-our-service-edit
        :CONTENT="CONTENT_PAGE.CONTENT.OUR_SERVICE"
      />

      <app-characteristic-edit
        :CONTENT="CONTENT_PAGE.CONTENT.CHARACTERISTIC"
      />

      <app-tabs-edit :CONTENT="CONTENT_PAGE.CONTENT.TAB" />
    </v-container>
  </section>
</template>

<script>
import AppFirstImgEdit from "@/components/crm/edit_components/img_content.vue";
import AppDescriptionEdit from "@/components/crm/edit_components/description_content.vue";
import AppBlockWithEdit from "@/components/crm/edit_components/block_with_contents.vue";
import AppOurServiceEdit from "@/components/crm/edit_components/our_service_content";
import AppCharacteristicEdit from "@/components/crm/edit_components/characteristic_edit";
import AppTabsEdit from "@/components/crm/edit_components/tabs_edit";

export default {
  layout: "crm",

  name: "content-porous-ceramics",

  components: {
    AppFirstImgEdit,
    AppDescriptionEdit,
    AppBlockWithEdit,
    AppOurServiceEdit,
    AppCharacteristicEdit,
    AppTabsEdit,
  },

  computed: {
    GET_CONTENT() {
      return this.$store.getters["crm/GET_CONTENT"];
    },
    CONTENT_PAGE() {
      return this.GET_CONTENT.CERAMIC_MEMBRANES_PAGE;
    },
  },
};
</script>