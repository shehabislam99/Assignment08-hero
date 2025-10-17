import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AppData from "../AppData/AppData";
import BackGroundLoading from "../../BackGroundLoading/BackGroundLoading";

const Apps = () => {
  const data = useLoaderData();
  const [allApps, setAllApps] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [searchLoading, setSearchLoading] = useState(false);
  useEffect(() => {
    setAllApps(data);
  }, [data]);

  useEffect(() => {
    if (searchText) {
      setSearchLoading(true);
      const timer = setTimeout(() => {
        setSearchLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [searchText]);

  const filteredApps = allApps.filter((apps) =>
    apps.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <BackGroundLoading></BackGroundLoading>
      <div className="min-h-screen bg-[#F1F5E8] ">
        <div className="text-center">
          <h1 className="text-[40px] md:text-[48px] font-bold mt-18 mb-2">
            Our All Applications
          </h1>
          <p className="text-[#627382] text-xl mx-auto">
            Explore All Apps on the Market developed by us. We code for
            Millions.
          </p>
        </div>
        <div className="py-16 px-12">
          <div className="mb-5 flex flex-col lg:flex-row justify-between items-center gap-8">
            <p className="font-semibold text-2xl text-[001931]">
              (<b className="">{filteredApps.length}</b>)Apps Found
            </p>

            <div className="flex flex-col border-1 border-[#D2D2D2] shadow-xs rounded-sm sm:flex-row sm:justify-center gap-3 w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="search Apps"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className=" p-2 "
                />
              </div>
            </div>
          </div>

          {searchLoading ? (
            <div className="text-center py-12">
              <p className="text-blue-600  text-xl mt-4">
                Searching apps.........
              </p>
            </div>
          ) : filteredApps.length === 0 ? (
            <div className="text-center mt-20 ">
              <h1 className="text-red-700 text-3xl font-bold my-4">
                Such App Is None Here
              </h1>
              <button className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] rounded-md border-none font-semibold hover:text-blue-700">
                <Link to="/">Go Back Home</Link>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredApps.map((singleApp) => (
                <AppData key={singleApp.id} singleApp={singleApp} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
