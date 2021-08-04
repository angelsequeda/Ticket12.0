const Joi = require('joi');

let userSchemaJoiForRegister = new Joi.object( {

    nombre1: Joi.string().alphanum().required(),
    nombre2: Joi.string().alphanum(),
    apellido1: Joi.string().alphanum().required(),
    apellido2: Joi.string().alphanum().required(),
    mail: Joi.string().email().required(),
    username: Joi.string().alphanum().min(5).max(10).required(),
    pass_word: Joi.string().alphanum().min(6).max(10).required(),
    activo: Joi.number().integer()

});



let userSchemaForLogin = Joi.object({

    username: Joi.string().alphanum().min(5).max(10).required(),
    pass_word: Joi.string().alphanum().min(6).max(10).required()

});

module.exports = {userSchemaForLogin,userSchemaJoiForRegister};