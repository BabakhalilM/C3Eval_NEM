import express from 'express';
// import { register,login,token,logout } from '../controllers/userRouter.js';
import protect from '../middleware/auth.js';
import role from '../middleware/role.js';
import { allorders, orderbyid, perticulatorder } from '../controlers/order.js';
const orderDetails = express.Router();

orderDetails.get('/',protect,role(["admin"]),allorders);
orderDetails.get('/:id', protect,perticulatorder);
orderDetails.get('/:id', protect,role(["admin"]),orderbyid);
// router.get('/logout', logout);

export default orderDetails;

