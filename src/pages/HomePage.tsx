import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Tag, BarChart2, Upload } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import RecentActivityList from '../components/dashboard/RecentActivityList';
import IndustrySelector from '../components/dashboard/IndustrySelector';

const HomePage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
        <IndustrySelector />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Documents Processed"
          value="156"
          icon={<FileText className="w-8 h-8 text-blue-500" />}
          change="+12% from last month"
          positive={true}
        />
        <StatCard 
          title="Entities Extracted"
          value="2,347"
          icon={<Tag className="w-8 h-8 text-teal-500" />}
          change="+8% from last month"
          positive={true}
        />
        <StatCard 
          title="Accuracy Rate"
          value="94.2%"
          icon={<BarChart2 className="w-8 h-8 text-purple-500" />}
          change="+2.1% from last month"
          positive={true}
        />
        <StatCard 
          title="Storage Used"
          value="1.2 GB"
          icon={<Upload className="w-8 h-8 text-gray-500" />}
          change="23% of total capacity"
          positive={null}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link to="/documents/upload" className="group">
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
              <Upload className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Upload Documents</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Upload new documents for processing and entity extraction</p>
          </div>
        </Link>
        <Link to="/annotate" className="group">
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-500">
            <div className="bg-teal-100 dark:bg-teal-900/30 p-4 rounded-full mb-4">
              <Tag className="w-8 h-8 text-teal-500 dark:text-teal-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Annotate Text</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Manually annotate text to train and improve the NER models</p>
          </div>
        </Link>
        <Link to="/analytics" className="group">
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-4">
              <BarChart2 className="w-8 h-8 text-purple-500 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">View Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">Explore insights and statistics about your entity extraction</p>
          </div>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h2>
        <RecentActivityList />
      </div>
    </div>
  );
};

export default HomePage;