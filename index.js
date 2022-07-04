const nodemailer = require('nodemailer');
require('dotenv').config();

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: process.env.MAILTRAP_USERNAME,
       pass: process.env.MAILTRAP_PASSWORD
    }
});

const message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'
};
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});