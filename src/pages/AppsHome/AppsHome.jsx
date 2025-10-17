import React from "react";
import { Link } from "react-router-dom";
import HomeData from "../HomeData/HomeData";
import { TrendingUp } from "lucide-react";

const AppsHome = ({ apps = [] }) => {
  return (
    <div className="mx-auto py-16 bg-[#F1F5E8]">
      <div className="px-4">
        <div className="item-center text-center mb-12">
          <div className="flex justify-center">
            <h2 className="text-blue-600 text-[48px] font-bold mb-3">
              Trending Apps
            </h2>
            <TrendingUp className="text-green-600"></TrendingUp>
          </div>
          <p className="text-[#627382] text-lg">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="px-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {apps?.map((singleApp) => (
            <HomeData key={singleApp.id} singleApp={singleApp} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/Apps"
            className="px-10 p-3 w-auto text-white font-semibold bg-gradient-to-br from-[#632ee3] to-[#9f62f2] rounded-md text-[16px] hover:bg-blue-700 transition-colors transform hover:scale-105"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppsHome;
