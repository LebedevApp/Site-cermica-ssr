import colors from "vuetify/es5/util/colors";
import FirebaseModule from "@nuxtjs/firebase";

export default {
  mode: 'universal',
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",

  // Global page headers: https://go.nuxtjs.dev/config-head
  // head: {
  //   titleTemplate: "%s - site-ceramica-ssr",
  //   title: "site-ceramica-ssr",
  //   htmlAttrs: {
  //     lang: "ru"
  //   },
  //   meta: [
  //     { charset: "utf-8" },
  //     { name: "viewport", content: "width=device-width, initial-scale=1" },
  //     { hid: "description", name: "description", content: "" }
  //   ],
  //   link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/firebase.js",
    { src: "~/plugins/ymapPlugin.js", mode: "client" },
    { src: "~/plugins/vuelidate" },
    { src: "~/plugins/maskPhone", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [[FirebaseModule]],

  firebase: {
    injectModule: false,
    terminateDatabasesAfterGenerate: true,
    config: {
      // REQUIRED: Official config for firebase.initializeApp(config):
      apiKey: "AIzaSyBzERrzyEO8v021Atcp2NCHSgMOZZNew5w",
      authDomain: "site-caramica-ssr.firebaseapp.com",
      databaseURL:
        "https://site-caramica-ssr-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "site-caramica-ssr",
      storageBucket: "site-caramica-ssr.appspot.com",
      messagingSenderId: "139544990876",
      appId: "1:139544990876:web:0e9cd9c00534e15071c959"
    },
    services: {
      database: true,
      auth: {
        initialize: {
          //onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: "onAuthStateChangedAction",
          subscribeManually: false
        }
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    //fallback: true,
    mode: "history"
  },

  serverMiddleware: [
    '~/server/index'
  ],
 
};
