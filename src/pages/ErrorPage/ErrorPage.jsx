import { TriangleAlert } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import BackGroundLoading from "../../BackGroundLoading/BackGroundLoading";

const ErrorPage = () => {
  return (
    <div>
      <BackGroundLoading></BackGroundLoading>
      <div className=" flex items-center justify-center px-4 min-h-screen bg-[#F1F5E8] ">
        <div className="text-center ">
          <div className="flex justify-center mb-6">
            <TriangleAlert className="w-35 h-35 text-red-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-shadow-amber-700 mb-4">
            Oops!
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-4">
            Something went wrong!
          </p>
          <p className="text-red-500 mb-4">
            Sorry,This page doesn't exist or has been moved. You Write Wrong
            keyword.
          </p>
          <button className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] rounded-md border-none font-semibold hover:text-blue-700 ">
            <Link to="/">Go Back Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
