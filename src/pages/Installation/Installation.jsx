import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import imoji from "../../../assetss/demo-app (1).webp";
import { ArrowDownToLine } from "lucide-react";
import { FaStar } from "react-icons/fa";
import BackGroundLoading from "../../BackGroundLoading/BackGroundLoading";
const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success(" Opps..This App is Uninstalled");
  };

  const sortedApps = [...installedApps].sort((a, b) =>
    sortOrder === "high-low"
      ? b.downloads - a.downloads
      : sortOrder === "low-high"
      ? a.downloads - b.downloads
      : 0
  );

  return (
    <div>
      <BackGroundLoading></BackGroundLoading>
      <div className="min-h-screen py-8 bg-[#F1F5E8]">
        <div className="container mx-auto px-5">
          <div className="text-center mt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-2">
              My Installed Apps
            </h1>
            <p className="text-[#627382] text-lg">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          <div className="mt-20  mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-2xl text-[#001931] mb-4">
                <span className="text-green-800 font-bold mr-2">
                  ({installedApps.length})
                </span>
                Apps Found
              </p>
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <select
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value);
                    toast.info(
                      e.target.value === "high-low"
                        ? "Sorted: High → Low Downloads"
                        : e.target.value === "low-high"
                        ? "Sorted: Low → High Downloads"
                        : "Sorting cleared"
                    );
                  }}
                  className="border border-gray-300 text-[#001931] px-3 py-2 rounded-md focus:outline-none"
                >
                  <option value="">Sort by Downloads</option>
                  <option value="high-low">High to Low</option>
                  <option value="low-high">Low to High</option>
                </select>
              </div>
            </div>
          </div>
          {installedApps.length === 0 ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <img src={imoji} className="w-30 h-30 rounded-full" alt="" />
              </div>
              <p className="text-red-600 text-2xl font-semibold mb-2">
                No Apps are Installed Here
              </p>
              <p className="text-amber-800">
                Install some apps from the Apps page to see them here
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {sortedApps.map((app) => (
                <div
                  key={app.id}
                  className="bg-white  rounded-lg shadow-sm hover:shadow-md hover:bg-amber-400 p-4 
                transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <img
                        src={app.image}
                        alt=""
                        className="w-20 h-20 object-contain rounded-xl bg-gray-100"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#001931] mb-2">
                          {app.title}
                        </h3>
                        <div className="flex items-center gap-8 text-sm text-gray-500">
                          <p className="flex items-center gap-2">
                            <span className="flex items-center gap-1 font-medium  text-[#00D390]">
                              <ArrowDownToLine></ArrowDownToLine>{" "}
                              {app.downloads}M
                            </span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="flex items-center gap-1  text-[#FF8811] font-medium">
                              <FaStar />
                              {app.ratingAvg}
                            </span>
                          </p>
                          <p className="flex items-center gap-2">
                            <span className="font-medium">{app.size}MB</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleUninstall(app.id)}
                      className="bg-green-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg
                    font-medium transition-colors ml-4"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;
