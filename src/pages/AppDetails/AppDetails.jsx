import React, { useState, useEffect } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
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

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find((app) => app.id === parseInt(id));

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
      toast.success("App Installed Successfully!");
      setIsInstalled(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            App Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The app you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/apps")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse All Apps
          </button>
        </div>
      </div>
    );
  }

  const chartData = app.ratings.map((rating, index) => ({
    ...rating,
    fill: ["#ff6b6b", "#ffa726", "#ffee58", "#9ccc65", "#66bb6a"][index],
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* App Header */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
          <div className="flex-shrink-0">
            <img
              src={app.image}
              alt={app.title}
              className="w-64 h-64 object-contain rounded-2xl shadow-lg bg-white p-4"
            />
          </div>

          <div className="flex-grow">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {app.title}
            </h1>
            <p className="text-gray-600 text-lg mb-4">{app.companyName}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                <span className="text-yellow-500">⭐</span>
                <span className="font-semibold">{app.ratingAvg}</span>
                <span className="text-gray-600">
                  ({app.reviews.toLocaleString()} reviews)
                </span>
              </div>

              <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                <span className="text-green-500">📥</span>
                <span className="font-semibold">
                  {app.downloads.toLocaleString()}+ downloads
                </span>
              </div>

              <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full">
                <span className="text-purple-500">📱</span>
                <span className="font-semibold">{app.size} MB</span>
              </div>
            </div>

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-all ${
                isInstalled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105"
              }`}
            >
              {isInstalled ? "✓ Installed" : "Install App"}
            </button>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            App Ratings Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{app.description}</p>
        </div>

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default AppDetails;
