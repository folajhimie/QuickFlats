const Joi = require('joi');

function validateUser() {
    const schema = Joi.object({
        fullName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        password: Joi.string().min().max(1024).required().password(),
        phoneNumber: Joi.number().min().max(11).required().phoneNumber()
    })
    return schema.validate();
}

module.exports = validateUser