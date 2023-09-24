const mongoose=require("mongoose");

const doctorschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    experince:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        required:true,
    },
    
   
});

module.exports=doctor=new mongoose.model("doctor",doctorschema);
