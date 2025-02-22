const express=require("express");
const app=express();
const db=require("./config/db")
const route=require("./routes/router")
const dotenv=require("dotenv");


app.use(express.json());

dotenv.config()
const port=process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"served started sucessfully"
    })
})

app.use("/api/v1",route);

app.listen(port, ()=>console.log(`\n\t 💻 127.0.0.1:${port}`))
console.log(db())