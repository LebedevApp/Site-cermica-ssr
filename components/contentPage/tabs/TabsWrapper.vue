<template>
  <section class="channelbox section-tabs tabs">
      <div class="tabs_buttons divader">
        <v-btn
          class="ma-2 "
          outlined
          color="white"
          v-for="(tab, i) in content"
          :key="i"
          @click="setTab(tab, i)"
          :class="{ active: i === tabIdx }"
          >{{ tab.button_name }}</v-btn
        >
      </div>

     
     <app-tab :tab="tab" />
  </section>
</template>

<script>
import AppTab from "../../contentPage/tabs/Tab";

export default {
  name: 'tabs',

  props: {
    content: {
      type: Array,
      require: true,
    }
  },

  components: {
    AppTab,
  },

  created() {
    this.tab = this.content.find((item, i) => {
      if (this.tabIdx === i) {
        return item;
      }
    });
  },

  data() {
    return {
      tabIdx: 0,
      tab: null,
    };
  },

  methods: {
    setTab(tab, i) {
      this.tabIdx = this.content.indexOf(tab);
      this.tab = tab;
    },
  },

  
};
</script>

<style lang="scss" scoped>
.section-tabs {
  width: 100%;
  height: 600px;
}
.tabs {
  position: relative;
  &_buttons {
    width: 100%;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    text-align: center;
  }
}
.divader::after {
    
    content: "";
      display: block;
      width: 80%;
      border: 0;
      border-top: 1px solid #fff;
      position: absolute;
      top: -35%;
      left: 50%;
    transform: translateX(-50%);
      z-index: 15;

   
}
.active {
  background-color: rgba(0,0,0,0.5);
  transition: all ease-in-out 1s;
}

//===========================//
.tabs-enter {
  opacity: 0;
}
.tabs-enter-to {
  opacity: 1;
  transition: all 2s;
}
.tabs-leave {
  opacity: 1;
}
.tabs-leave-to {
  opacity: 0;
  transition: all 2s;
}
</style>