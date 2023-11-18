const nodemailer = require("nodemailer");

export const sendEmail = async (mail) => {
  try {
    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    let sendingEmail = await contactEmail.sendMail(mail);

    return sendingEmail;
  } catch (e) {
    console.log(e);
  }
};
