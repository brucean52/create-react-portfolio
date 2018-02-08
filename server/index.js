const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require("./config");

//const mailer = require("./mailer/index");
//import mailer from './mailer'

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
});

app.post('/contact', (req, res) => {
  const { email, name, subject, message} = req.body
  console.log('req.body', req.body);

  const mailOptions = {
    from: email,         // Sender of the email
    to: 'bruce.dev89@gmail.com',  // Recipient of the email
    subject: `${subject} - ${name}`,              // Subject of the email
    text: message,                // Message of the email

  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.json({"success": false, error: "There was an error sending the email!"});
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

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
