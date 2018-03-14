const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require("./config");

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
  const { email, name, subject, message} = req.body;


  const mailOptions = {
    from: email,         // Sender of the email
    to: 'bruce.dev89@gmail.com',  // Recipient of the email
    subject: `${email} - ${subject}`,              // Subject of the email
    text: `${name} - ${message}`,                // Message of the email

  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      //console.log(error);
      res.json({"success": false, message: "There was an error sending the email!"});
    } else {
      //console.log('Email sent successfully' + info.response);
      res.json({"success": true, message: "Email sent successfully!"});
    }
  });

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})
