import express from "express";
import order from "../Models/order.js";
import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

// const orderDetails=express.Router();

export const allorders= async(req,res)=>{
    try{
    const orders= await order.findAll();
    res.json({data:orders,msg:"this is all orders"});
    }catch(err){
        console.log(err);
        res.send("internal error in orderdetails fetching");
    }
}
export const perticulatorder= async(req,res)=>{
    try{
    const orders= await order.findAll({where:{customerId:req.params.customerid}});
    res.json({data:orders,msg:"this is all orders"});
    }catch(err){
        console.log(err);
        res.send("internal error in orderdetails fetching");
    }
}


export const orderbyid= async(req,res)=>{
    try{
    const orders= await order.findAll({where:{customerId:req.params.customerid}});
    res.json({data:orders,msg:"this is all orders perticulr customer"});
    }catch(err){
        console.log(err);
        res.send("internal error in orderdetails fetching");
    }
}

