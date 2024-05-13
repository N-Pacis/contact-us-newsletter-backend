import Joi from "joi";

export async function validateNewsLetterRegistration(req, res, next) {
    try {
        const schema = Joi.object({
            email: Joi.string().email().required()
        });

        const { error } = schema.validate(req.body);
        if (error) return errorResponse(error.message, res);

        return next();
    } catch (error) {
        return errorResponse(error.message, res);
    }
}