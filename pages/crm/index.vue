<template>
  <v-container>
    
    <AppCrmCards />
    
  </v-container>
</template>

<script>
import AppCrmCards from '../../components/crm/AppCrmCards'

export default {
  layout: "crm",
  components: {AppCrmCards},
  data() {
    return {
    };
  },
  computed: {
    content() {
      return this.$store.getters["crm/getContent"].find((key) => {
        return key.name === "Home";
      });
    },
    sliders() {
      const obj = this.content.content.find((key) => {
        return key.name === "Главный слайдер";
      });
      const copy = Object.assign({}, obj.sliders);
      return copy;
    },
  },
  methods: {
    bugs(i) {
      console.log(this.sliders);
    },
    getDescription(i, event) {
      this.textSlider.push({
        id: i,
        text: event,
        page: 0,
        block: 0,
      });
    },
    submit(i) {
        
      if (this.textSlider.find(key => key.id === i)) {
        const obj = this.textSlider.find((key) => {
          if (key.id === i) {
            return key.id === i;
          }
        });
        this.$store.dispatch("crm/setContent", obj);
        this.textSlider = []
      }
      this.textSlider = []
    },
    back(slider, i) {
        this.$forceUpdate()
    }
  },
};
</script>