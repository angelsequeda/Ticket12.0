const express = require('express');
app = express();
const cors = require('cors');
const corsOption = require('./middlewares');
require('dotenv').config();

//Middlewares globales
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOption));


//Inicio de servidor

app.listen(process.env.port, ()=> {

    console.log('STATUS CORRECTO [SERVIDOR]');

})