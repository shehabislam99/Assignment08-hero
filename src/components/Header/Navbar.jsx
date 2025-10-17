import React from "react";
import { Link } from "react-router";
import images from "../../../assetss/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 hover:text-blue-700 hover:underline font-medium text-[16px]">
          Home
        </li>
      </Link>
      <Link to="/Apps">
        <li className="m-2 hover:text-blue-700 hover:underline font-medium text-[16px]">
          Apps
        </li>
      </Link>
      <Link to="/Installation">
        <li className="m-2 hover:text-blue-700 hover:underline  font-medium text-[16px]">
          Installation
        </li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-white justify-between max-w-full shadow-sm">
      <div className="flex gap-1 ml-10">
        <div className="dropdown">
          <div tabIndex={0} role="button">
            <div className="flex gap-1">
              <img src={images} className="w-8 h-8 " alt="" />
              <a className="text-[20px] font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] inline-block text-transparent bg-clip-text ">
                Canvas.IO
              </a>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow lg:hidden"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  ">{links}</ul>
      </div>
      <div className="mr-10">
        <a
          href="https://github.com/shehabislam99"
          className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] rounded-sm border-none"
        >
          <FaGithub></FaGithub> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
