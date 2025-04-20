import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:text-yellow-400">Home</Link>
        </li>
        <li>
          <Link to="/menu" className="hover:text-yellow-400">Menu</Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
