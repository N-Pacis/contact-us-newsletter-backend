import { serverErrorResponse, successResponse } from "../utils/api.response.js";
import { NewsLetter } from "../models/newsletter.model.js";

export const create = async (req, res) => {
  try {
    const existingUser = await NewsLetter.findOne({ email: req.body.email });
    if (existingUser) {
      return successResponse("User saved successfully", existingUser, res);
    }

    let user = new NewsLetter(req.body);
    await user.save();
    return successResponse("User saved successfully", user, res);
  } catch (ex) {
    return serverErrorResponse(ex, res);
  }
};
