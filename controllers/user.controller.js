const userServices = require('../services/users.service');

module.exports.findUser = async (req,res) => {
    let userLookedFor = req.query.username;
    console.log(userLookedFor);
    try {
        let userFound = await userServices.userLooked(userLookedFor);
        return res.status(200).json(userFound);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports.createUser = async (req,res) => {
    let newUser = req.body;
    try {
        await userServices.userRegister(newUser);
        return res.status(200).json('Todo bien')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}