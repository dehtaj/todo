const Todo=require("../models/Todo")
let createTodo=async(req,res)=>{
    try{
        const {title, description}=req.body;
        const response=await Todo.create({title,description});
        res.status(200).json(

            {
                success:true,
                data:response,
                message:"Data sucessfully created"
            }
        )
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            sucess:false,
            data:"Internal server error",
            message:"Data failed to created" 
        })
    }
}


module.exports = createTodo;