import Vue from "vue";
import YmapPlugin, { loadYmap } from 'vue-yandex-maps'

const settings = {
  apiKey: "e1c02b10-9949-46b1-9959-00a6b0951851",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
}; // настройки плагина

Vue.use(YmapPlugin, settings);


export default ({app}) => {
    loadYmap(settings)
  }
