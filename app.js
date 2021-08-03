const express = require('express');
app = express();
const cors = require('cors');
require('dotenv').config();

//Middlewares globales
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())