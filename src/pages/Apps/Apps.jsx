import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppData from "../AppData/AppData";

const Apps = () => {
  const data = useLoaderData();
  const [allApps, setAllApps] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    setAllApps(data);
    setLoading(false);
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

  const filteredApps = allApps
    .filter((apps) =>
      apps.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "high-low"
        ? b.downloads - a.downloads
        : sortOrder === "low-high"
        ? a.downloads - b.downloads
        : 0
    );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our All Applications
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore All Apps on the Market developed by us. We code for
            Millions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-lg text-gray-700">
              (<b className="text-blue-600">{filteredApps.length}</b>)Apps Found
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="search Apps"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="input input-bordered w-full lg:w-64 pr-10"
                />
                {searchLoading && (
                  <div className="absolute right-3 top-3">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  </div>
                )}
              </div>

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="select select-bordered w-full lg:w-auto"
              >
                <option value="">Sort by Downloads</option>
                <option value="high-low">High to Low</option>
                <option value="low-high">Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {searchLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Searching apps...</p>
          </div>
        ) : filteredApps.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-red-500 text-xl mb-4">📱</div>
            <p className="text-red-500 text-xl font-semibold">No App Found</p>
            <p className="text-gray-600 mt-2">
              Try adjusting your search terms or browse all apps
            </p>
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
  );
};

export default Apps;
