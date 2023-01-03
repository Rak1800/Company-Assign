const { default: mongoose } = require("mongoose")
const customerModel = require("../Models/customerModel")
const orderModel = require("../Models/orderModel")




const order= async function(req,res){
    try{
    const data= req.body

    let {customerId,price}=data
    if(Object.keys(data).length==0) return res.status(400).send({status:false,message:"abcd"})

    if(!customerId)  return res.status(400).send({status:false,message:"abcd"})

    const customerExist=await customerModel.findById({_id:customerId})
    if(!customerExist)  return res.status(400).send({status:false,message:"abcd" })

    const oldorder= await orderModel.find({customerId:customerId})

    
    const saveData=await orderModel.create(data)
    let totalorder=oldorder.length+1
    saveData._doc.orderNumber=totalorder

    if(totalorder==9) {
       return res.status(200).send({status:true, message:"You have placed 9 orders with us. Buy one more stuff and you will be promoted to Gold customer and enjoy 10% discounts!"})
    }
    if(totalorder==10){
        let update = await customerModel.findOneAndUpdate({_id:customerId},{customerType:"gold"},{new:true})
        let discount=(price/100)*10
        saveData._doc.discount=discount
      return  res.status(200).send({status:true,message:"succefull",data:saveData,update})

    }
    if(totalorder==19) {
        return res.status(200).send({status:true, message:"You have placed 19 orders with us. Buy one more stuff and you will be promoted to Paltinum customer and enjoy 20% discounts!",saveData})
     }
     
     if(totalorder>10 && totalorder<20){
        let discount=(price/100)*10
        saveData._doc.discount=discount
        let totalAddDiscount=customerExist.totalDiscount
        totalAddDiscount+=discount
        let updateDiscount = await customerModel.findOneAndUpdate({_id:customerId},{totalDiscount:totalAddDiscount},{new:true})
     return   res.status().send({status:true,message:"succefull",data:saveData,updateDiscount})
        
     }
     if(totalorder==20){
        let update = await customerModel.findOneAndUpdate({_id:customerId},{customerType:"paltinum"},{new:true})
        let discount=(price/100)*20
        saveData._doc.discount=discount
      return  res.status(200).send({status:true,message:"succefull",data:saveData,update})

    }
     if(totalorder>20){
        let discount=(price/100)*20
        saveData._doc.discount=discount
        let totalAddDiscount=customerExist.totalDiscount
        totalAddDiscount+=discount
        let updateDiscount = await customerModel.findOneAndUpdate({_id:customerId},{totalDiscount:totalAddDiscount},{new:true})
      return res.status(200).send({status:true,message:"succefull",data:saveData,updateDiscount})
        
     }
    res.status(200).send({status:true,message:saveData})
}
    

catch(err){
    return res.status(500).send({status:false,message:err.message})
 }
}



module.exports={order} 

