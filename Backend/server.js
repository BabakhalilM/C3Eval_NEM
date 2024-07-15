import express from 'express';
import { } from 'dotenv/config.js';
// import sequelize from './connsection/db.js';
// import connectDB from './connsection/db1.js';
// import routerin from './Routers/customer.js';
// import orderDetails from './Routers/order.js';
// import BookDetails from './Routers/books.js';
import cors from 'cors';
import orderDetails from './Routers/order.js';
import sequelize from './config/db.js';
import connectDB from './config/db1.js';
import routerin from './Routers/customers.js';
import BookDetails from './Routers/books.js';
// import orderDetails from './Routers/order.js';
// import testConnection from './connsection/db.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/customer', routerin);
app.use('/api/orders', orderDetails);
app.use('/api/books', BookDetails);

app.use('/', (req, res) => {
    res.send("this is home route");

});

const PORT = process.env.PORT || 3200;
app.listen(PORT, async () => {
    try {
        sequelize.sync()
            .then(() => {
                console.log('Database & tables created!');
            })
            .catch(error => {
                console.error('Unable to sync database:', error);
            });

        console.log('sql connected succesfully');
        connectDB();
        console.log('mongo connected');
        console.log(`sever is runing at ${PORT}`);
    } catch (err) {
        console.log(err);
    }
})