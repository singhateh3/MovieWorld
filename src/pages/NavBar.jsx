import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
          <Link to="/">🎬 MovieBox</Link>
        </div>

        <div className="flex space-x-6 text-gray-300">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
