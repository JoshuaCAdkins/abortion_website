import React from 'react';
import './navbar.css';

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
          <ul>
            <li>Home</li>
            <li>States</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
