import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} EntityExtract. All rights reserved.
        </p>
        <div className="mt-2 sm:mt-0 text-sm text-gray-500 dark:text-gray-400">
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 mr-4">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 mr-4">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;