import { Contact } from "../models/contact.model.js";
import { serverErrorResponse, successResponse } from "../utils/api.response.js";
import { config } from "dotenv";
import sendEmail from "../utils/mailer.js";
config({
  path: "./.env",
});


export const create = async (req, res) => {
  try {
    let message = new Contact(req.body);
    message = await message.save();

    const mailOptions = {
      from: req.body.email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Us Message from - ${req.body.names}`,
      text: `
        Name: ${req.body.names}
        Email: ${req.body.email}
        Message: ${req.body.message}
      `
    };

    await sendEmail(mailOptions);

    return successResponse("Message saved successfully", message, res);
  } catch (ex) {
    return serverErrorResponse(ex, res);
  }
};
