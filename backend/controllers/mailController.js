const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "ayankhajuria2005@gmail.com",
    pass: process.env.SMTP_PASS,
  },
});

const sendVerificationEmail = async (to, token) => {
  const link = `${process.env.BASE_URL}/verify/${token}`;
  const mailOptions = {
    from: '"LitLink" <ayankhajuria2005@gmail.com>',
    to,
    subject: 'Verify your email',
    html: `<p>Click <a href="${link}">here</a> to verify your account.</p>`,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };





