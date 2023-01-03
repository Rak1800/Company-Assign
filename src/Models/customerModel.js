const mongoose=require('mongoose');

const customerModel= new mongoose.Schema({
    tittle:{
        type:String,
        enum:['mr','ms','mrs']
    },
    fName:{
        type: String,
        require:true
    },
    lName:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true,
        enum:['male','female','others']
    },
    phone:{
        type:Number,

    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    customerType:{
        type:String,
        enum:['regular','gold','paltinum'],
        default:"regular"
    },
    totalDiscount:{
        type:Number,
        default:0
    },
   

},{timestamps:true})

 module.exports=mongoose.model('customer',customerModel) 
