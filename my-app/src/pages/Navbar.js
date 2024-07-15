import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{display:"flex",justifyContent:"space-around"}}>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/login">Login</Link></p>
      <p><Link to="/register">Register</Link></p>
      <p><Link to="/books:id">Books</Link></p>
    </nav>
  );
};

export default Navbar;
