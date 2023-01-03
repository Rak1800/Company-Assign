const mongoose=require('mongoose');
const customerModel = require('./customerModel');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderModel=new mongoose.Schema({
    ProductName:{
        type:String
    },
    price:{
        type:Number
    }, 
    customerId:{
        type:ObjectId,
        ref:'customer'
    }
},{timestamps:true})

module.exports=mongoose.model('order',orderModel) 