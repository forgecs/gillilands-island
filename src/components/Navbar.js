import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/gi-logo-1.png";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  function toggleKeyPress() {
    setOpen(!isOpen);
  }

  return (
    <nav
      className="navbar is-transparent text-gray-900 bg-gray-100 font-semibold border-t-4 border-teal-500"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="sm:flex sm:justify-between sm:items-center lg:max-w-4xl mx-auto">
        <div className="container flex items-center justify-between px-10 py-2">
          <Link to="/" title="Gilliland's Island Logo">
            <img
              className="w-20 rounded-full"
              src={logo}
              alt="Gilliland's Island"
            />
          </Link>
          <div className="sm:hidden">
            <button
              onClick={toggle}
              onKeyPress={toggleKeyPress}
              type="button"
              className="text-teal-600 hover:bg-gray-300 focus:bg-gray-300 rounded-full focus:outline-none p-1"
            >
              <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navMenu"
          className={`px-5 pb-4 sm:p-0 sm:flex ${isOpen ? "block" : "hidden"}`}
        >
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-teal-300 rounded"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-teal-300 rounded"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="block px-5 mt-1 sm:mt-0 hover:bg-teal-300 rounded"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
