require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
//const email = require("./handler/email")
const nodemailer = require('nodemailer'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
})

//contact us form implementation
app.post("/message", (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
        
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.HOST_EMAIL,
        pass: process.env.HOST_PASSWORD
     }
    });
  
    var mailOptions = {
        from: process.env.HOST_EMAIL,
        to: 'dashcamatniran@gmail.com',
        subject: email,
        text: message
     };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect("/");
    }
  });

})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
