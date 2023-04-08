const { sendMail } = require('./services/smtp.service');
require('dotenv').config();

module.exports.handler = async (event) => {
  const request = JSON.parse(event.body);
  console.log(request);
  
  const result = sendMail(request)
  .then(result => {
    return { statusCode: 200 };
  })
  .catch(error => { 
    return { statusCode: 500 };
  });

  return result;
};
