const userServices = require('../services/users.service');

module.exports.findUser = async (req,res) => {
    let userLookedFor = req.body.username;
    try {

        let userFound = await userServices.userLookedByUsername(userLookedFor);
        
        return res.status(200).json(userFound);

    } catch (error) {

        return res.status(400).json(error.message);
    }
}

module.exports.createUser = async (req,res) => {
    let newUser = req.body;
    try {
        await userServices.userRegister(newUser);
        return res.status(200).json('Usuario registrado \n con éxito');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}