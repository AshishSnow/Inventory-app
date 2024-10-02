const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cors = require('cors')


const app = express()

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI).then(()=>{


    app.listen(PORT,()=>{

        console.log(`server is live on ${PORT}`)



    })


}).catch((err)=> console.log(err))

