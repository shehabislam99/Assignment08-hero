import React from "react";
import { Link } from "react-router";
import images from "../../../assetss/logo.png";
import { Github, Linkedin } from "lucide-react";
import { FaHackerrank } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <div className="flex gap-1">
              <img src={images} className="w-8 h-8 " alt="" />
              <a className="text-[20px] font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] inline-block text-transparent bg-clip-text ">
                DEV.IO
              </a>
            </div>
            <p className="text-gray-200 my-4">
              Discover the best mobile app for your needs. Explore <br />
              thousands of apps with detailed reviews and ratings.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/home"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/installation"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Installation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Social Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to=""
                  className="flex gap-2  text-gray-200 hover:text-white transition-colors"
                >
                  <Linkedin></Linkedin>
                  <h3 className="mt-1">Linkedin</h3>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className=" flex gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <Github></Github>
                  <h3>Github</h3>
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <FaHackerrank className="mt-1"></FaHackerrank>
                  <h3>Hackerrank</h3>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-200">
              <li>Email: contact@devio.com</li>
              <li>Phone: +91 (555) 123-4567</li>
              <li>Address: 256 webdev Street,Tech-vally </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-50 mt-8 pt-6 text-center font-medium text-gray-200">
          <p>&copy; 2025 DEV.IO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
