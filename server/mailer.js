const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'mail.holocruxe.com', 
  port: 465, 
  secure: true, 
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.PASSWORD, 
  },
});

module.exports = transporter;