//import 'babel-polyfill'
const express = require('express');
//import express from 'express'
const bodyParser = require('body-parser');
//import bodyParser from 'body-parser'
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require("./config");

//const mailer = require("./mailer/index");
//import mailer from './mailer'

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
});

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

app.post('/contact', (req, res) => {
  const { email, name, subject, message} = req.body
  console.log('req.body', req.body);

  const mailOptions = {
    from: 'bruce.dev89@gmail.com',         // Sender of the email
    to: 'bruce.an52@gmail.com',  // Recipient of the email
    subject: 'Contact Form Response',              // Subject of the email
    text: 'test',                // Message of the email

  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({"success": false, error: "Some message"});
    } else {
      console.log('Email sent successfully' + info.response);
      res.json({"success": true, message: "Email sent successfully!"});
    }
  });

  // mailer({ email, name, text: message }).then(() => {
  //   console.log(`Sent the message "${message}" from <${name}> ${email}.`);
  //   res.redirect('/#success');
  // }).catch((error) => {
  //   console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
  //   res.redirect('/#error');
  // })

})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
