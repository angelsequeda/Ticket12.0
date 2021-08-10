const Joi = require('joi');

let userSchemaJoiForRegister = new Joi.object( {

    nombre1: Joi.string().alphanum().required(),
    nombre2: Joi.string().alphanum().allow(''),
    apellido1: Joi.string().alphanum().required(),
    apellido2: Joi.string().alphanum().required(),
    mail: Joi.string().email().required(),
    username: Joi.string().alphanum().min(5).max(50).required(),
    pass_word: Joi.string().pattern(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,15}$")).message('La contraseña debe contener al menos una mayúscula, una minúscula y un dígito'),
    activo: Joi.number().integer()

});



let userSchemaForLogin = Joi.object({

    username: Joi.string().alphanum().min(5).max(50).required(),
    pass_word:  Joi.string().pattern(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,15}$")).message('La contraseña debe contener al menos una mayúscula, una minúscula y un dígito')

});

let passwordSchema = Joi.object({
    newpass_word: Joi.string().pattern(new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,15}$")).message('La contraseña debe contener al menos una mayúscula, una minúscula y un dígito'),
})

module.exports = {userSchemaForLogin,userSchemaJoiForRegister,passwordSchema};