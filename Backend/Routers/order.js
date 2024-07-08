import express from "express";
import order from "../Models/order.js";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

const orderDetails=express.Router();

// orderDetails.get('/', async(req,res)=>{
//     try{
//     const orders= await order.findAll();
//     res.json({data:orders,msg:"this is all orders"});
//     }catch(err){
//         console.log(err);
//         res.send("internal error in orderdetails fetching");
//     }
// })
orderDetails.get('/customer/:customerid',auth, async(req,res)=>{
    try{
    const orders= await order.findAll({where:{customerId:req.params.customerid}});
    res.json({data:orders,msg:"this is all orders"});
    }catch(err){
        console.log(err);
        res.send("internal error in orderdetails fetching");
    }
})


orderDetails.get('/customer/:customerid',auth, role([admin]), async(req,res)=>{
    try{
    const orders= await order.findAll({where:{customerId:req.params.customerid}});
    res.json({data:orders,msg:"this is all orders"});
    }catch(err){
        console.log(err);
        res.send("internal error in orderdetails fetching");
    }
})


export default orderDetails;