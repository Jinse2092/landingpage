const nodemailer = require('nodemailer');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  const { name, email, subject, message } = JSON.parse(event.body);

  // Use environment variables for security
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASS;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: user,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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
