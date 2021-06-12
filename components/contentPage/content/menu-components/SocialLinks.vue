<template>
    <section class="socialLinks">
      <v-container>
        <v-list>
          <v-list-item-title
            class="text-subtitle-1 text-md-h4 font-weight-black text--secondary text-center"
            >Social links</v-list-item-title
          >
          <v-row justify="center" class="my-5">
            <v-icon class="mx-2" size="48">mdi-twitter</v-icon>
            <v-icon class="mx-2" size="48">mdi-facebook</v-icon>
            <v-icon class="mx-2" size="48">mdi-vk</v-icon>
            <v-icon class="mx-2" size="48">mdi-instagram</v-icon>
          </v-row>
        </v-list>
      </v-container>
    </section>
</template>

<script>
export default {
    name: 'social-links'
}
</script>