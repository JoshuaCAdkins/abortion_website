import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <p>Logo</p>
        </div>
        <div className='title'>
          <h1>Title</h1>
        </div>
        <div className='tab'>
          {/* <NavLink>Home</NavLink>
          <NavLink>States</NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar
