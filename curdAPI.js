const express = require("express");
const router = express.Router();
const USER = require("../model/userSchema");


// Create the User 

router.post("/userRegister", async (req,res)=>{
     const {name,email,password} = req.body;

     const userData = await USER.create({
        name,email,password
     })

     if(!userData)
     {
        res.status(501).json({
            success:false,
            message:"user not register!!!"
        })

     }
     
     res.status(201).json({
        success:true,
        message:"user register successFull......",
        userData
     })

})



// Read the user data 


router.get("/readData",async (req,res)=>{
    // const {email} = req.body;

    const userData = await USER.find({});
    
    if(!userData){
        res.status(501).json({
            success:false,
            message:"some error occurs !!"
        })
    }
         
    res.status(201).json({
        success:true,
        message:"user register successFull......",
        userData
     })

})



// one user data 

router.get("/getone/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const userone = await USER.findById(id);
        res.status(201).json(userone);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

router.put("/updatedata/:id",async (req,res)=>{
    try{
        const {id} = req.params;
    const updateData = await USER.findByIdAndUpdate(id,req.body)

    if(!updateData){
        res.status(501).json({
            success:false,
            message:"some error occurs"
        })
    }

    
    else{
        res.status(201).json({
            success:true,
            updateData
        })
    }


    }catch(err){
        console.log(err.message)
    }
})


// delete data 

router.delete("/deluser/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        const deluser = await USER.findByIdAndDelete(id);

        if(!deluser){
            res.status(501).json({
                success:false,
                message:"some error occurs"
            })
        }
    
        
        else{
            res.status(201).json({
                success:true,
                deluser
            })
        }
    

    }catch(err){
        console.log(err.message);
    }
})






module.exports = router;
