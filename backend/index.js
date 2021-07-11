const express=require('express');
require('dotenv/config');

const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

const maindata= require('./routes/route');

app.use(cors());
app.use(express.json());



mongoose.connect("mongodb+srv://somesh:sumitshirpe@cluster0.y5vnn.mongodb.net/database")

app.use('/', require("./routes/route")

);

app.listen(3002,function()
{
        console.log('running on server 3002');
});
