import React from 'react';
import { BarChart2, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

interface PerformanceMetricsProps {
  timeRange: string;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ timeRange }) => {
  // These would normally be fetched based on the timeRange
  const metrics = {
    week: {
      accuracy: '94.2%',
      processingTime: '2.8s',
      documentCount: 28,
      entityCount: 492
    },
    month: {
      accuracy: '93.8%',
      processingTime: '3.1s',
      documentCount: 156,
      entityCount: 2347
    },
    year: {
      accuracy: '92.5%',
      processingTime: '3.5s',
      documentCount: 834,
      entityCount: 12894
    },
    all: {
      accuracy: '91.3%',
      processingTime: '3.8s',
      documentCount: 1253,
      entityCount: 19472
    }
  };
  
  const currentMetrics = metrics[timeRange as keyof typeof metrics];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Extraction Accuracy</h3>
          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">{currentMetrics.accuracy}</p>
        <div className="mt-2 flex items-center text-sm">
          <span className="text-green-500 dark:text-green-400">
            +1.2% from previous {timeRange}
          </span>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Processing Time</h3>
          <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">{currentMetrics.processingTime}</p>
        <div className="mt-2 flex items-center text-sm">
          <span className="text-green-500 dark:text-green-400">
            -0.3s from previous {timeRange}
          </span>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Documents Processed</h3>
          <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
            <BarChart2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">{currentMetrics.documentCount}</p>
        <div className="mt-2 flex items-center text-sm">
          <span className="text-green-500 dark:text-green-400">
            +12% from previous {timeRange}
          </span>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Entities Extracted</h3>
          <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/30">
            <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">{currentMetrics.entityCount}</p>
        <div className="mt-2 flex items-center text-sm">
          <span className="text-green-500 dark:text-green-400">
            +8% from previous {timeRange}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;