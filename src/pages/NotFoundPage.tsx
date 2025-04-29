import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
            <Search className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            404 - Page Not Found
          </h1>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Link
            to="/"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Dashboard
          </Link>
          <Link
            to="/documents"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            Browse Documents
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;