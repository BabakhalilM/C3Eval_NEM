import nodemailer from 'nodemailer';
import 'dotenv/config';

export const emailSender = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Invalid request body. 'email' is required.");
  }

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user_email,
      pass: process.env.emailpassword,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.user_email, // sender address
      to: email, // list of receivers
      subject: "Order confirmation", // Subject line
      text: "Hello, your order has been placed successfully.", // plain text body
      html: "<b>Hello, your order has been placed successfully.</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    return res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Failed to send email.");
  }
  
}
export const setupCronJobs = () => {
    cron.schedule('0 0 * * 0', () => {
        // Send promotional emails every week
        console.log('Sending promotional emails');
        // Add logic to send promotional emails here
    })}
