import React from "react";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-md transition duration-200 ${
    isActive
      ? "bg-primary text-white"
      : "text-dark hover:bg-primaryLight hover:text-white"
  }`;
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-sm shadow-md border-b border-white/20">
      <div className="xl:w-[1200px] text-navText lg:w-[900px] md:w-full mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        <NavLink to="/" className="text-2xl font-bold text-primary">
          Authify
        </NavLink>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative  py-1 font-medium transition duration-200
                ${
                  isActive
                    ? 'text-primary after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-primary'
                    : 'text-dark hover:text-primary after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primaryLight hover:after:w-full after:transition-all after:duration-300'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                `relative  py-1 font-medium transition duration-200
                ${
                  isActive
                    ? 'text-primary after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-primary'
                    : 'text-dark hover:text-primary after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primaryLight hover:after:w-full after:transition-all after:duration-300'
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                `relative  py-1 font-medium transition duration-200
                ${
                  isActive
                    ? 'text-primary after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-full after:bg-primary'
                    : 'text-dark hover:text-primary after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primaryLight hover:after:w-full after:transition-all after:duration-300'
                }`
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
