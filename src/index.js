const express=require("express");
const app=express();
const db=require("./config/db")

const dotenv=require("dotenv");

dotenv.config()
const port=process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"served started sucessfully"
    })
})
app.listen(port, ()=>console.log(`\n\t 💻 127.0.0.1:${port}`))
console.log(db())