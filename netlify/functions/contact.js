const nodemailer = require('nodemailer');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  const { name, email, subject, message, phone } = JSON.parse(event.body);

  // Hardcoded credentials (not recommended for production)
  const user = 'forvoq@gmail.com';
  const pass = 'qhwm bayz ofvm zjrh';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: user,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nMessage: ${message}`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
