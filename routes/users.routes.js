const { createUser,findUser, userChanger, startSeesionJWT } = require("../controllers/user.controller");
const corsOption = require("../middlewares");
const cors = require('cors');
const { validationDataRegister ,validationDataLogin, doesUserExist, doesMailExist, doesUserandPasswordExistLogin, doesNewPasswordPass} = require("../middlewares/users.middlewares");


const usersRoutes = (app) => {
    
    app.post('/users/myuser',validationDataLogin,doesUserandPasswordExistLogin,findUser);

    app.post('/users/newuser',validationDataRegister,doesUserExist,doesMailExist,createUser);

    app.post('/users/changepass',validationDataLogin,doesUserandPasswordExistLogin,doesNewPasswordPass,userChanger);

    app.post('/users/begin', validationDataLogin,doesUserandPasswordExistLogin,startSeesionJWT)

}

module.exports = usersRoutes;