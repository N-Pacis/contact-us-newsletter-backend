import { createTransport } from "nodemailer";
import { config } from "dotenv";

config({
  path: "./.env",
});

/**
 * Utility function to send an email using nodemailer
 *
 * @param {Object} mailOptions - The mail options object
 * @param {string} mailOptions.from - The sender email address
 * @param {string} mailOptions.to - The recipient email address
 * @param {string} mailOptions.subject - The email subject
 * @param {string} mailOptions.text - The plain text body of the email
 * @param {string} mailOptions.html - The HTML body of the email
 * @returns {Promise<Object>} A promise that resolves with the info of the sent email
 */
export const sendEmail = async (mailOptions) => {
  try {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail(mailOptions);

    return info;
  } catch (error) {
    throw error;
  }
};

export default sendEmail;
