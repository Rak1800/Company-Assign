const express=require('express');
const router=express.Router()
const { customer } = require('../controllrs/customerController');
const { order } = require('../controllrs/ordercontrollr');


router.post('/customer',customer)
router.post('/order', order)
 
  
module.exports=router