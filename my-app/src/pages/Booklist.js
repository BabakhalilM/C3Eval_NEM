import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{border:" 1px solid red",margin:"20px",padding:"20px" }}>
      {books.map(book => (
        <div style={{border:"1px dashed"}} key={book._id}>
          <h3> <span style={{fontWeight:"900"}}>Book:  </span> {book.title}</h3>
          <p>  <span style={{fontWeight:"900"}}>Author:</span>  {book.author}</p>
          <p>  <span style={{fontWeight:"900"}}>Price: </span> {book.price}</p>
          <p>  <span style={{fontWeight:"900"}} >Review:</span> 4/5 </p>
          <Link to={`/books/${book._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};


export default BookList;
