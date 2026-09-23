const express = require("express")
const app = express();
const mongoose=require('mongoose');
require("dotenv").config();

const port = process.env.port;
const DB_URI=process.env.mongoDB_URI

app.set ('view engine', 'ejs');

const student =[
    {
        firstName:"Smileyz",
        lastName:"Abolaji",
        age:18, 
        level:"level Three",
    },
    {
        firstName:"kofoworola",
        lastName:"Abolaji",
        age:18, 
        level:"level Three",
    },
    {
        firstName:"qudroh",
        lastName:"Abimbola",
        age:18, 
        level:"level Three",
    },
    {
        firstName:"Aishat",
        lastName:"Dasola",
        age:18, 
        level:"level Three",
    },
];
app.get("/user",(req,res)=>{
    res.json(user);
});

app.listen(port,()=>{
    console.log(`working fine on port ${port}`);
    
});

mongoose.connect(DB_URI)
    .then(() => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(err);

    });








