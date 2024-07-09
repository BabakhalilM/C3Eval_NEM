import express from "express";
// import order from "../Models/order.js";
// import auth from "../middleware/auth.js";
// import books from "../Models/Book.js";
import booksa from "../Models/Book.js";
import reviews from "../Models/Review.js";

const BookDetails = express.Router();

BookDetails.get('/all', async (req, res) => {
    try {
        const orders = await booksa.find();
        res.json({ data: orders, msg: "this is all books" });
    } catch (err) {
        console.log(err);
        res.send("internal error in bookdetails fetching");
    }
});

BookDetails.get('/', async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const booksr = await booksa.find().limit(limit * 1).skip((page - 1) * limit).exec();
    res.send(booksr);
})

BookDetails.get('/:bookid/:reviews', async (req, res) => {
    try {
        const reviewsd = await reviews.find({ bookid: req.params.bookid }).populate('customerid');
        res.send(reviewsd);
    } catch (err) {
        console.log(err);
        res.send("internal error in bookreview fetching");
    }
})


export default BookDetails;