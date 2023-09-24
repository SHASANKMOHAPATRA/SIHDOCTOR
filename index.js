const mongoose = require("mongoose");
const express = require("express");


const user = require("./user");

const app=express();
app.use(express.json());
const User=require("./user.js");
//app.use(body_parser.json());

mongoose.connect("mongodb://127.0.0.1:27017/Doctor", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>
console.log("Connection Sucessfull!")).catch((err)=>console.log("Error occured!"));
const PORT=process.env.PORT || 8000;



app.post("/new",async (req,res)=>{
    
       
        
    const euser=  await doctor.findOne({phone:req.body.phone});
    if(euser){
        res.json({status:false,msg:"DOCTOR ALREADY REGISTERED"});
    }else{
                const newuser=new doctor(req.body);
                
               
                await newuser.save().then(()=>{
                    res.json({status:true,msg:"Account created sucessfully"});
                }).catch(()=>{
                    res.json({status:false,msg:"Error in Signing Up"});
                    console.log("ERROR");
                });};
            })
                
                
            
       

    

app.get("/doctor",async(req,res)=>{
    try{
        
        const userdata=await doctor.find();
        if(!userdata){
            res.status({status:false});
        }
        else{
             res.json(userdata);
        }
    }catch(e){
        res.json({status:false,msg:"Error Occured"});
    }
})

app.listen(PORT,()=>{
    console.log("LISTENING ON PORT "+PORT);
})