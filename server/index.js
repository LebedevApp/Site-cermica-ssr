'use strict'

const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

app.use(express.json())

console.log('server up')

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
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'podsidka@bk.ru',
      pass: 'Qwertyuiop900@',
    },
  });

  return transporter.sendMail({
    from: 'podsidka@bk.ru',
    to: 'llle8evvv@yandex.ru',
    subject: 'Test message subject',
    html: `
    <h4>Поступила новая заявка</h4>
    <p>Поступила заявка на обратный звонок от ${message.name}</p>
    <p>Контактный номер телефона ${message.name}: ${message.phone}</p>
    <p>Просьба связаться с ${message.radio.prof}: ${message.radio.name}</p>`,
  })
}
