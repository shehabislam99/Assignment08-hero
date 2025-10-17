import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import imoji from "../../../assetss/demo-app (1).webp";
import { ArrowDownToLine } from "lucide-react";
import { FaStar } from "react-icons/fa";
const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortedApps, setSortedApps] = useState([]);

  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
    setSortedApps(stored);
  }, []);
  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success(" Opps..This App is Uninstalled");
  };

  const sortAppsBySize = (apps, order = "asc") => {
    return [...apps].sort((a, b) => {
      const sizeA = parseFloat(a.size);
      const sizeB = parseFloat(b.size);

      if (order === "asc") {
        return sizeA - sizeB;
      } else {
        return sizeB - sizeA;
      }
    });
  };

  const handleSortBySize = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sorted = sortAppsBySize(installedApps, newSortOrder);
    setSortedApps(sorted);

    toast.info(`Sorted by size ${newSortOrder === "asc" ? "↑" : "↓"}`);
  };
  return (
    <div className="min-h-screen py-8 bg-[#F1F5E8]">
      <div className="container mx-auto px-5">
        <div className="text-center mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001931] mb-2">
            Your Installed Apps
          </h1>
          <p className="text-[#627382] text-lg">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="mt-20  mb-4">
          <div className="flex flex-row justify-between items-center">
            <p className="text-2xl text-[#001931] mb-4">
              <span className="text-green-800 font-bold mr-2">
                ({installedApps.length})
              </span>
              Apps Found
            </p>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <button
                className="text-[#627382]  px-3 py-2 rounded-md border 
              border-gray-300 "
              >
                Sort By Size
                <span className="text-sm">
                  {sortOrder === "asc" ? "↑" : "↓"}
                </span>
              </button>
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
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="bg-white  rounded-lg shadow-sm hover:shadow-md hover:bg-amber-400 p-4 
                transition-shadow"
              >
                <div className="flex items-center justify-between">
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
                            <ArrowDownToLine></ArrowDownToLine> {app.downloads}M
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

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default Installation;
