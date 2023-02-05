require("dotenv").config();

const express = require("express");

const app = express();
app.use(express.json());

// console.log('start', process.env.SMTP_HOST)

const { loadNuxt } = require("nuxt");
async function start() {
  const nuxt = await loadNuxt("start");
  app.use(nuxt.render);
  
  app.listen(3000);
}

// Запуск приложения.
start();