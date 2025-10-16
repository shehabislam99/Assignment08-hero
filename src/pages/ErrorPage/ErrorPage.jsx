import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl md:text-8xl text-blue-600 mb-8">😵</div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Oops!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {error?.statusText || error?.message || "Something went wrong!"}
        </p>
        <p className="text-gray-500 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
