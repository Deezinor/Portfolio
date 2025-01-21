import React from "react";
import { Link } from "react-router-dom"; // Adjust if not using react-router-dom

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-9xl font-extrabold text-red-600">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page not found.
      </p>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-md shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
