import Joi from "joi";

export async function validateContactUsMessageRegistration(req, res, next) {
    try {
        const schema = Joi.object({
            names: Joi.string().required(),
            email: Joi.string().email().required(),
            message: Joi.string().required()
        });

        const { error } = schema.validate(req.body);
        if (error) return errorResponse(error.message, res);

        return next();
    } catch (error) {
        return errorResponse(error.message, res);
    }
}