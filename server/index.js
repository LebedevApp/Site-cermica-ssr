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
    service: 'Gmail',
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    ignoreTLS:true,
    requireTLS:false,
    auth: {
      type: "OAuth2",
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
      clientId: "989327039447-02cr3of6n69qcbdnrsl104jjshf5j1h4.apps.googleusercontent.com",
      clientSecret: "LL3mctlHPs3udnHBi7Gs_tpS",
      refreshToken: "1//04XB11KyMlAgrCgYIARAAGAQSNwF-L9IrQtrH-oLyhadluxJyYRsTPppZ2aoZ-4S7545LwrhocvKekk3an-g1TrJQ2BkBlLP6O5U",
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  return transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to: ['llle8evvv@yandex.ru', 'info@ceramicfilter.ru'],
    subject: 'Message User',
    html: `
    <h4>Поступила новая заявка</h4>
    <p>Поступила заявка на обратный звонок от <b>${message.name}</b></p>
    <p>Контактный номер телефона <b>${message.name}</b>: <b>${message.phone}</b></p>
    <p>Запрошенный контакт для связи <b>${message.radio.prof}</b>: <b>${message.radio.name}</b></p>`,
  })
}
