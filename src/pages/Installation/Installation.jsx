import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import AppData from "../AppData/AppData";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(stored);
    setLoading(false);
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

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
            My Installation
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your installed applications
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-lg text-gray-700 mb-4 sm:mb-0">
              Total Installed Apps:{" "}
              <b className="text-blue-600">{installedApps.length}</b>
            </p>
            {installedApps.length > 0 && (
              <button
                onClick={() => {
                  setInstalledApps([]);
                  localStorage.setItem("installedApps", JSON.stringify([]));
                  toast.success("All apps uninstalled successfully!");
                }}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Uninstall All
              </button>
            )}
          </div>
        </div>
        {installedApps.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📱</div>
            <p className="text-gray-500 text-xl font-semibold mb-2">
              No Apps Installed
            </p>
            <p className="text-gray-400">
              Install some apps from the Apps page to see them here
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {installedApps.map((app) => (
              <div key={app.id} className="relative">
                <AppData singleApp={app} />
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  title="Uninstall App"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
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
