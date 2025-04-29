import React from 'react';
import { Menu, Bell, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onMenuButtonClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuButtonClick }) => {
  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        {/* Mobile hamburger */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={onMenuButtonClick}
          aria-label="Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Brand */}
        <Link 
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white flex items-center"
        >
          <div className="w-10 h-10 mr-3 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">NER</span>
          </div>
          <span>EntityExtract</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {/* Theme toggler - to be implemented */}
          
          {/* Notifications */}
          <button
            className="relative p-2 text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          {/* Settings */}
          <Link
            to="/settings"
            className="p-2 text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" />
          </Link>
          
          {/* Profile */}
          <button
            className="p-2 text-gray-500 rounded-full hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Account"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;