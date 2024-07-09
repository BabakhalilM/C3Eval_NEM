import express from "express";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { customers } from "../Models/customer.js";
// import {customers} from "../Models/customer.js";
// import customers from "../Models/customer.js";
const routerin=express.Router();


routerin.post('/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        console.log(req.body);
        const customer=await customers.findOne({where:{email}});
        // const customer=false;
        console.log(customer);
        if(!customer){
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(password, salt);
            // const hashedpassword= await  bcrypt.hash(password,12,process.env.jwt_SECRET);
            const newcustomer= new customers({name,email,password:hashedpassword});
            await newcustomer.save();
            const token=jwt.sign({_id:customer._id},process.env.jwt_SECRET);
            res.header('Authorization',token).json({TOken:token,msg:"customer account Created"});

        }else{
            res.send("customer Already registered try to login ");
        }
    }catch(err){
        console.log(err);
        res.send("somthing went wront in registration");
    }
})



routerin.post('/login',async(req,res)=>{

    try{
        const {email,password}=req.body;
        const customer=await customers.findOne({where:{email}});
        if(!customer){
            return res.status(400).send("Email or password is wrong")
        }
        const validpassword=await bcrypt.compare(password,customer.password)
        if(!validpassword){
            res.status(400).send("invalid Password");

        }
        const token=jwt.sign({_id:customer._id},process.env.jwt_SECRET);
        res.header('Authorization',token).json({Token:token});

    }catch(err){
        console.log(err);
        res.send("somthing went wront in registration");
    }
})
export default routerin;