import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div>
    <ul className='container'>
        <li>
          <Link to="/vicky">Log In</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>

        <li>
          <Link to="/user/55"> Users</Link>
        </li>
      </ul>

    </div>
    </>
  );
}
