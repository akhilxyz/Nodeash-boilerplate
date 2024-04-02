import Joi from "joi";

export const customErrorMessages = {
    email: 'Invalid email or password',
    required: '{#label} field is required',
    stringMin: 'Password must be at least {#limit} characters long',
    stringMax: 'Password cannot exceed {#limit} characters',
    mustBeNumber : '{#label} must be a number',
    mustBeString : '{#label} must be a string',
    max12Digits: '{#label} Value must have at most 12 digits, including up to 2 decimal places',
};

export const JoiInstance = Joi.defaults((schema :any) => {
    return schema.options({
        errors: {
            wrap: {
                // Remove quotes from variable names in error messages
                label: false
            }
        }
    });
});