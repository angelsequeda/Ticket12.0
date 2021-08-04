const express = require('express');
app = express();
const cors = require('cors');
const corsOption = require('./middlewares');
const sequelize = require('./db/connection');
require('dotenv').config();
const userRoutes = require('./routes/users.routes')

//Middlewares globales
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


//Inicio de servidor

app.listen(process.env.port, async ()=> {
    try {
        console.log('STATUS CORRECTO [SERVIDOR]');
        await sequelize.authenticate() 
    } catch (error) {
        console.log(error.message);
    }
    
})

userRoutes(app);