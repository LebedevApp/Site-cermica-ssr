<template>
<section class="advantages-cards">
  <div>
    <v-row justify="center" align="center">
      <v-col><v-divider></v-divider></v-col>
      <v-col cols="8"
        ><v-container>
          <v-list-item-content class="text-center text-subtitle-1 text-md-h4 font-weight-thin">
            Our new Ultium Platform will help put everyone in an EV, moving us closer to a world with zero emissions.
          </v-list-item-content>
        </v-container></v-col
      >
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <v-container>
      <app-cards :cards='page_cards' />
    </v-container>
    
  </div>
</section>
  
</template>

<script>
import AppCards from '@/components/contentPage/content/cards-components/Cards'

export default {
  name: "advantages-components",

  components: {
      AppCards
  },

  props: ['page_cards'],
  
};
</script>

<style lang="scss" scoped>
.gradient{
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(117, 193, 255, 1),rgba(117, 193, 255, 0.3),rgba(117, 193, 255, 0));
    border-bottom-left-radius: 50px;
}
.img{
    width: 100%;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
