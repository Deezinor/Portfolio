import React from "react";
import { Link } from "react-router-dom"; // Adjust if not using react-router-dom

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-9xl font-extrabold text-accent">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page not found.
      </p>
      <p className="text-muted mt-2">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-accent text-white text-lg font-medium rounded-md shadow-md hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-75"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
