const userModel = require("../models/user.model");


module.exports.userRegister = async(newUser) => {
    try {
        await userModel.create(newUser)
    } catch (error) {
        console.log(error.message);
        throw new Error('ERROR DE REGISTRO');
    }
}

module.exports.userLooked = async (username) => {

    try {
        let userLookedFor = username;
        let userFound = await userModel.findAll({
            where: {
                USERNAME: username
            }
        })
    return userFound;
    } catch (error) {
        console.log(error.message);
        throw new Error('ERROR DE BUSQUEDA');
    }

}


