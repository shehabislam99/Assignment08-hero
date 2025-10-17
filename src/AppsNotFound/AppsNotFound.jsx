import React from "react";
import { Link } from "react-router-dom";
import pictures from "../../assetss/App-Error.png";
import Apps from "../pages/Apps/Apps";

const AppsNotFound = () => {
  return (
    <div className="min-h-screen item-center text-center bg-[#F1F5E8]">
      <div className="mt-20 flex justify-center mb-6">
        <img src={pictures} alt="" />
      </div>
      <h1 className="py-3 font-semibold text-5xl text-[#001931] ">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="py-3 text-lg text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] rounded-md border-none font-semibold hover:text-blue-700 ">
        <Link to="/">Go Main App</Link>
      </button>
    </div>
  );
};

export default AppsNotFound;
