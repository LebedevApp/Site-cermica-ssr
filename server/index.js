'use strict'
require("dotenv").config();

const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())

app.post('/', function (req, res) {

  let message = req.body.message

  sendMail(message)
    .then(result => {
      res.status(200).json({ 'success': true, 'message': 'Your mail send successfully' })
    })
    .catch(err => {
      res.status(200).json({ 'success': false, 'message': err.message })
    })
})

module.exports = {
  path: '/server/index',
  handler: app
}

const sendMail = (message) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "cermicsfilters@gmail.com",
      pass: "siteceramics!V01",
      
    }
  });

  return transporter.sendMail({
    from: "cermicsfilters@gmail.com",
    to: ['llle8evvv@yandex.ru', 'info@ceramicfilter.ru'],
    subject: 'Message User',
    html: `
    <h4>Поступила новая заявка</h4>
    <p>Поступила заявка на обратный звонок от <b>${message.name}</b></p>
    <p>Контактный номер телефона <b>${message.name}</b>: <b>${message.phone}</b></p>
    <p>Запрошенный контакт для связи <b>${message.radio.prof}</b>: <b>${message.radio.name}</b></p>`,
  })
}
