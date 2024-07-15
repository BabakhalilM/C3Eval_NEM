// Routers/admin.js
import express from 'express';
import { createObjectCsvWriter } from 'csv-writer';
import { Readable } from 'stream';
import order from '../Models/order.js';
import fs from 'fs'
import protect from '../middleware/auth.js';
import role from '../middleware/role.js';

const router = express.Router();

router.get('/export-orders', protect,role(["admin"]),async (req, res) => {
    const orders = await order.findAll();

    const csvWriter = createObjectCsvWriter({
        path: 'orders.csv',
        header: [
            { id: 'id', title: 'ID' },
            { id: 'customerEmail', title: 'Customer Email' },
            { id: 'status', title: 'Status' },
            { id: 'createdAt', title: 'Created At' },
        ],
    });

    await csvWriter.writeRecords(orders);

    const fileStream = fs.createReadStream('orders.csv');
    res.setHeader('Content-Type', 'text/csv');
    fileStream.pipe(res);
});

export default router;
