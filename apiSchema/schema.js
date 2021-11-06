const Joi = require('joi');

module.exports.register = Joi.object().keys({
    username:Joi.string().required(),
    password:Joi.string().required(),
    email:Joi.string().email().required(),
    address:Joi.string().required(),
    mobile: Joi.string().required()

});

module.exports.login = Joi.object().keys({
    email:Joi.string().email().required(),
    password:Joi.string().required(),
});

module.exports.update = Joi.object().keys({
    username:Joi.string().required(),
    password:Joi.string().required(),
    email:Joi.string().email().required(),
    address:Joi.string().required(),
    mobile: Joi.string().required(),
    user_id:Joi.number().required()
});

module.exports.delete = Joi.object().keys({
user_id:Joi.number().required()
});

module.exports.fetch = Joi.object().keys({
 user_id:Joi.number().required()
});

