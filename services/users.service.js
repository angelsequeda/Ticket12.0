const userModel = require("../models/user.model");


module.exports.userRegister = async(newUser) => {
    try {
        await userModel.create(newUser)
    } catch (error) {
        console.log(error.message);
        throw new Error('ERROR DE REGISTRO');
    }
}

module.exports.userLookedByUsername = async (username) => {

    try {

        let userFound = await userModel.findAll({
            where: {
                USERNAME: username,
                ACTIVO: 1
            }
        })
        return userFound;
    } catch (error) {
        console.log(error.message);
        throw new Error('ERROR DE BUSQUEDA');
    }

}

module.exports.userLookedByEmail = async(email) => {

    try {
        
        let userFound = await(userModel.findAll({
            where: {
                MAIL: email,
                ACTIVO: 1
            }
        }))
        return userFound;

    } catch (error) {
        console.log(error.message);
        throw new Error('ERROR DE BUSQUEDA');
    }
}

module.exports.changepassword = async (username,newpass_word) => {

    try {
        let result = await userModel.update({pass_word:newpass_word},
            {
                where: {username: username}
            })
        
    } catch (error) {
        console.log(error);
        throw new Error('ERROR DE CAMBIO DE CONTRASEÑA');
    }
}