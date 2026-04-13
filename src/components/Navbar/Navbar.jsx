import React from "react";
import logoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { House, Clock, ChartLine, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start lg:ms-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Menu className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">
                <House className="w-5 h-5" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/timeline">
                <Clock className="w-5 h-5" /> Timeline
              </NavLink>
            </li>
            <li>
              <NavLink to="/stats">
                <ChartLine className="w-5 h-5" /> Stats
              </NavLink>
            </li>
          </ul>
        </div>
        
        <Link to="/" className="text-xl pl-2 lg:pl-0">
          <img src={logoImg} alt="logo" className="h-8 w-auto" />
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex me-10">
        <ul className="menu menu-horizontal px-1 gap-x-1">
          <li>
            <NavLink to="/" className="rounded-lg">
              <House className="w-5 h-5" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className="rounded-lg">
              <Clock className="w-5 h-5" /> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className="rounded-lg">
              <ChartLine className="w-5 h-5" /> Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;