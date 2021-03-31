const Joi = require('joi');

function validateUser() {
    const schema = Joi.object({
        fullName: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        address: Joi.string().min(5).max(50).required().address(),
        location: Joi.string().min().max().required().location(),
        city: Joi.string().min().max().required().city(),
        state: Joi.string().min().max().required().city(),
        flatDescription: Joi.string().min().max().required().flatDescription(),
        paymentSystem: Joi.number().min().max().required().paymentSystem(),
        flatPrice: Joi.number().min().max().required().flatPrice(),
        rentDuration: Joi.number().min().max().required().rentDuration(),
        imageUrl: Joi.number().min().max().required().imageUrl(),
        numberRooms: Joi.number().min().max().required().numberRooms(),

    })
    return schema.validate();
}

module.exports = validateUser
