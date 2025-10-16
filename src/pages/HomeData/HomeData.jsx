import { ArrowDownToLine } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeData = ({ singleApp }) => {
  const { image, title, id, downloads, ratingAvg } = singleApp || {};

  return (
    <Link to={`/AppDetails/${id}`}>
      <div className="bg-white border-none rounded-lg  shadow-md hover:bg-blue-400 p-4 transition-all duration-200">
        <figure className="p-4 ">
          <img
            className="h-[280px] w-[316px] rounded-md bg-gray-100 mx-auto bg-none"
            src={image}
            alt=""
          />
        </figure>
        <div className="text-center">
          <h2 className="justify-center text-[20px] font-semibold">{title}</h2>
          <div className="flex justify-between gap-3 mt-2">
            <div className="flex items-center gap-1 p-1 bg-[#F1F5E8]  rounded-sm font-semibold text-[#00D390]">
              <ArrowDownToLine></ArrowDownToLine> {downloads.toLocaleString()}M
            </div>
            <div className="flex items-center gap-1 p-1 rounded-sm bg-[#FFF0E1] text-[#FF8811] font-semibold">
              <FaStar /> {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeData;
