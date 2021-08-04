const { createUser,findUser } = require("../controllers/user.controller");
const corsOption = require("../middlewares");
const cors = require('cors');
const { validationDataRegister ,validationDataLogin, doesUserExist, doesMailExist, doesUserandPasswordExistLogin} = require("../middlewares/users.middlewares");

const usersRoutes = (app) => {
    
    app.post('/users/myuser',validationDataLogin,doesUserandPasswordExistLogin,findUser);

    app.post('/users/newuser',validationDataRegister,doesUserExist,doesMailExist,createUser);

}

module.exports = usersRoutes;