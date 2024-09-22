const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "ar0117785@gmail.com",
    pass: "x38T7$1ea8&t2P7D3V",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(name, team, phone) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'ar0117785@gmail.com', // sender address
    to: `codemark.codes@gmail.com`, // list of receivers
    subject: "Futsal Registration Email", // Subject line
    text: `${name}, successfully registered in ${team} Contact No. ${phone}`, // plain text body
    html: `${name}, You have successfully registered in ${team} Contact No. ${phone}`, // html body
  });

  console.log("Message sent: %s", to);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = sendMail
