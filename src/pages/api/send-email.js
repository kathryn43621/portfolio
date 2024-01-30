// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Create a transporter using your email configuration
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Set up email data
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'kathryn43621@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      // Respond to the client
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
