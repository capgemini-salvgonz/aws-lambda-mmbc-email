const nodemailer = require('nodemailer');

/**
 * 
 * @returns SMTPTransport
 */
const createTranspoft = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
}

/**
 * 
 * @param {any} request 
 * @returns Promise
 */
module.exports.sendMail = (request) => {
  const mailOptions = { from: process.env.EMAIL_USER, ...request };
  return new Promise((resolve, reject) => {
    createTranspoft().sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });

}

