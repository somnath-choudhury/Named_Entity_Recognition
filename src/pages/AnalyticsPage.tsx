import React, { useState } from 'react';
import { BarChart, CalendarDays, FileText, Tags, Calendar } from 'lucide-react';
import PerformanceMetrics from '../components/analytics/PerformanceMetrics';
import EntityDistributionChart from '../components/analytics/EntityDistributionChart';
import ProcessingHistoryChart from '../components/analytics/ProcessingHistoryChart';
import TopEntitiesTable from '../components/analytics/TopEntitiesTable';

const AnalyticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('month');
  
  return (
    <div className="py-8">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Analytics</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Insights and statistics about your document processing and entity extraction
          </p>
        </div>
        <div className="mt-4 sm:mt-0 bg-white dark:bg-gray-800 rounded-md shadow-sm p-1 flex">
          <button
            onClick={() => setTimeRange('week')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              timeRange === 'week'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              timeRange === 'month'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setTimeRange('year')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              timeRange === 'year'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            Year
          </button>
          <button
            onClick={() => setTimeRange('all')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              timeRange === 'all'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            All Time
          </button>
        </div>
      </div>

      {/* Performance metrics */}
      <PerformanceMetrics timeRange={timeRange} />
      
      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Entity Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Entity Distribution</h2>
            <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <Tags className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <EntityDistributionChart />
        </div>
        
        {/* Processing History */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Processing History</h2>
            <div className="p-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30">
              <CalendarDays className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
          <ProcessingHistoryChart timeRange={timeRange} />
        </div>
      </div>
      
      {/* Top Extracted Entities */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Top Extracted Entities</h2>
          <div className="p-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30">
            <BarChart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <TopEntitiesTable />
      </div>
      
      {/* Recent Processing Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Processing Activity</h2>
          <div className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-700">
            <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Document
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Industry
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Entities
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Processed Date
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Processing Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  Patient Medical Records
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  Healthcare
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  42
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  May 15, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  3.2s
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  Legal Contract
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  Legal
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  67
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  May 12, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  4.8s
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  Product Catalog
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  E-commerce
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  128
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  May 10, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  6.5s
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;