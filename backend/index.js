const express=require('express');
const cors= require('cors');
const bcrypt=require('bcrypt');
const authController = require('./routes/auth.route');
const connection = require('./configs/db');
require('dotenv').config();

const app= express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

  app.get('/',(req,res)=>{
    res.send('Welcome to the BMI Calculation App')
  })

  app.use('/auth',authController);

 app.listen(8080,async()=>{
    try{
        await connection;
        console.log('DB Connected')
    }
    catch{
        console.log('Problem in DB connect')
    }
    console.log('Listening on LocalHost 8080')
})