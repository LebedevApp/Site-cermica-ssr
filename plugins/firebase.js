import firebase from "firebase/app"
import "firebase/database";

const config = {
  apiKey: "AIzaSyBzERrzyEO8v021Atcp2NCHSgMOZZNew5w",
  authDomain: "site-caramica-ssr.firebaseapp.com",
  databaseURL:
    "https://site-caramica-ssr-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "site-caramica-ssr",
  storageBucket: "site-caramica-ssr.appspot.com",
  messagingSenderId: "139544990876",
  appId: "1:139544990876:web:0e9cd9c00534e15071c959"
};

let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(config);
}
const p = 9
export default firebase;
