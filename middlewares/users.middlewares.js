const Joi = require('joi');
const usersSchemas = require('../dto/user.dto');

const validationDataRegister = (req,res,next)=> {

    try {

        Joi.assert(req.body,usersSchemas.userSchemaJoiForRegister)
        return next();

    } catch (error) {

        console.log(error.message);
        return res.status(400).json(error.message);
    }

}

const validationDataLogin = (req,res,next) => {

    try {
        Joi.assert({username: req.body.username, pass_word: req.body.pass_word}, usersSchemas.userSchemaForLogin);
        return next();

    } catch (error) {

        console.log(error.message);
        return res.status(400).json('Error con usuario o contrasña');

    }
}

module.exports = {validationDataRegister,validationDataLogin}