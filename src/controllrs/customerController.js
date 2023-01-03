const customerModel = require("../Models/customerModel")


const customer= async function (req,res){
    let data =req.body

    const saveData= await customerModel.create(data)

    res.send({status:true,message:saveData})
    
}

module.exports={customer}