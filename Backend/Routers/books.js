import express from 'express';
// import { login, logout, register, token } from '../controlers/customer';
import { addbook, all, pagination, review } from '../controlers/books.js';
import protect from '../middleware/auth.js';
import role from '../middleware/role.js';
// import { register,login,token,logout } from '../controllers/userRouter.js';
const BookDetails = express.Router();

BookDetails.get('/all',all);
BookDetails.get('/', pagination);
BookDetails.get('/:reviews', protect, review);
BookDetails.post('/addbook',role("admin"), protect, addbook);

export default BookDetails;

