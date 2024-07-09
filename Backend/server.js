import express from 'express';
import {} from 'dotenv/config.js';
import sequelize from './connsection/db.js';
import connectDB from './connsection/db1.js';
import routerin from './Routers/customer.js';
import orderDetails from './Routers/order.js';
import BookDetails from './Routers/books.js';
import cors from 'cors';
const app=express();
app.use(cors());
app.use(express.json());
app.use('/customer',routerin);
app.use('/orders',orderDetails);
app.use('/books',BookDetails);


app.use('/',(req,res)=>{
    res.send("this is home route");
});


const PORT=process.env.PORT || 3200;
app.listen(PORT,async()=>{
    try{
        sequelize;
        console.log('sql connected succesfully');
        connectDB()
        console.log('mongo connected');
        console.log(`sever is runing at ${PORT}`);
    }catch(err){
        console.log(err);
    }
})