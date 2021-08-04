const { createUser,findUser } = require("../controllers/user.controller");
const corsOption = require("../middlewares");
const cors = require('cors');
const { validationDataRegister ,validationDataLogin} = require("../middlewares/users.middlewares");

const usersRoutes = (app) => {
    
    app.post('/users/myuser',validationDataLogin,findUser);

    app.post('/users/newuser',validationDataRegister,createUser );

}

module.exports = usersRoutes;