import { JoiInstance, customErrorMessages } from "./joi"


export default class UserValidator {
    static register = {
        body: JoiInstance.object().keys({
            email: JoiInstance.string().email({ tlds: { allow: true } }).required().messages({
                'string.email': customErrorMessages.email,
                'any.required': customErrorMessages.required,
            }),
            password: JoiInstance.string().min(6).max(128)
                .required().messages({
                    'string.min': customErrorMessages.stringMin,
                    'string.max': customErrorMessages.stringMax,
                    'any.required': customErrorMessages.required,
                }),
        })
    }

    static login = {
        body: JoiInstance.object().keys({
            email: JoiInstance.string().email({ tlds: { allow: true } }).required().messages({
                'string.email': customErrorMessages.email,
                'any.required': customErrorMessages.required,
            }),
            password: JoiInstance.string().required().messages({
                'any.required': customErrorMessages.required,
            }),
        })
    }
}