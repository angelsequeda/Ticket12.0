const Joi = require('joi');
const usersSchemas = require('../dto/user.dto');
const { userLookedByUsername, userLookedByEmail } = require('../services/users.service');

const validationDataRegister = (req,res,next)=> {

    try {

        Joi.assert(req.body,usersSchemas.userSchemaJoiForRegister);
        return next();

    } catch (error) {

        console.log(error.message);
        return res.status(400).json('Alguno de los datos es incorrecto');
    }

}

const validationDataLogin = (req,res,next) => {

    try {

        Joi.assert({username: req.body.username, pass_word: req.body.pass_word}, usersSchemas.userSchemaForLogin);
        return next();

    } catch (error) {

        console.log(error.message);
        return res.status(400).json('Error con usuario o contraseña');

    }
}

const doesUserExist = async (req,res,next) => {

    try {
        let result = await userLookedByUsername(req.body.username);
        if (result.length > 0){ 

            return res.status(400).json('El usuario ya existe');

        } else {
            
            return next();

        }
    } catch (error) {

        console.log(error.message);
        return res.status(400).json('ERROR CON USERNAME [MIDDLEWARE]');
    }
}

const doesMailExist = async(req,res,next) => {

    try {

        let result = await userLookedByEmail(req.body.mail);
        if(result.length > 0) {

            return res.status(400).json('El email ya existe');
        }else {
            return next();
        }
        
    } catch (error) {

        console.log(error.message);
        return res.status(400).json('ERROR CON MAIL [MIDDLEWARE]');
        
    }
}

const doesUserandPasswordExistLogin = async(req,res,next) => {

    try {
        
        let result =  await userLookedByUsername(req.body.username);

        if(result.length > 0) {

            if (result[0].pass_word !== req.body.pass_word) {

                return res.status(400).json('Contraseña incorrecta');
            } else {

                return next();
            }

        }else {

            return res.status(400).json('Usuario no encontrado');

        }

    } catch (error) {
        
        console.log(error.message);
        return res.status(400).json('ERROR CON USUARIO [MIDDLEWARE]');

    }
}


module.exports = {validationDataRegister,validationDataLogin,doesUserExist,doesMailExist,doesUserandPasswordExistLogin}