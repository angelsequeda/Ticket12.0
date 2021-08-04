const { createUser,findUser } = require("../controllers/user.controller");
const corsOption = require("../middlewares");
const cors = require('cors');

const usersRoutes = (app) => {
    
    app.get('/users',findUser);

    app.post('/users',createUser );

}

module.exports = usersRoutes;