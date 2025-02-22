const mongoose = require("mongoose");

require("dotenv").config();


const db=async () =>{
    try{
       await mongoose.connect(process.env.Mongo_Uri)
       console.log("\n\t 🍏 MongoDb conected scuessfull \n")
    }catch(err){
        console.error(err);
        console.log("\n\t connection failed ❌ \n")
    }
}

module.exports = db