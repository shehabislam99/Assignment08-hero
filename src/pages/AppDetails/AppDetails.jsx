import React, { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "react-toastify/dist/ReactToastify.css";
import Downloads from "../../../assetss/icon-downloads.png";
import ratings from "../../../assetss/icon-ratings.png";
import reviewss from "../../../assetss/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const app = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (app) {
      const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
      setIsInstalled(stored.some((item) => item.id === app.id));
    }
    setLoading(false);
  }, [app]);

  const handleInstall = () => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!stored.some((item) => item.id === app.id)) {
      stored.push(app);
      localStorage.setItem("installedApps", JSON.stringify(stored));
      toast.success("Yahoo! App Installed Successfully!");
      setIsInstalled(true);
    }
  };

  const chartData = app.ratings.map((rating, index) => ({
    ...rating,
    fill: ["#ff6b6b", "#ffa726", "#ffee58", "#9ccc65", "#66bb6a"][index],
  }));

  return (
    <div className="min-h-screen bg-[#F1F5E8] mt-20 my-10">
      <div className=" container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-start gap-15 mb-12">
          <div className="">
            <img
              src={app.image}
              className="w-70 h-70 object-contain rounded-2xl shadow-lg bg-white p-2"
            />
          </div>
          <div>
            <div className="flex-grow">
              <h1 className="text-3xl font-bold text-[#001931] mb-2 ">
                {app.title}
              </h1>
              <p className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2]  text-transparent bg-clip-text font-semibold text-lg mb-4">
                {app.companyName}
              </p>
            </div>
            <div className="flex text-[#001931] flex-wrap gap-4 mb-6">
              <div className="text-center  items-center mr-2">
                <img
                  src={Downloads}
                  alt=""
                  className="ml-4 bg-none w-10 h-10"
                />
                <p className="my-2">Downloads</p>
                <span className="font-extrabold  text-4xl">
                  {app.downloads}M
                </span>
              </div>

              <div className="text-center  items-center ml-8">
                <img src={ratings} alt="" className="ml-9 bg-none w-10 h-10" />
                <p className="my-2">Average Ratings</p>
                <span className="font-extrabold  text-4xl">
                  {app.ratingAvg}M
                </span>
              </div>

              <div className="text-center items-center ml-10">
                <img src={reviewss} alt="" className="ml-9 bg-none w-10 h-10" />
                <p className="my-2">Total Reviews</p>
                <span className="font-extrabold  text-4xl">{app.reviews}K</span>
              </div>
            </div>
            <div>
              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`px-8 py-3 rounded-md font-semibold text-white transition-all ${
                  isInstalled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-green-700 transform hover:scale-120"
                }`}
              >
                {isInstalled ? "It Installed" : "Install Now (2 MB)"}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-amber-200">
            Ratings
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <YAxis />
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="count"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-amber-100 rounded-2xl shadow-sm p-5">
          <h2 className="text-2xl font-semibold mb-4 ">Description</h2>
          <p className="text-[#627382] leading-relaxed">{app.description}</p>
        </div>

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default AppDetails;
