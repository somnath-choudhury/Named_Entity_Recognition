import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  positive: boolean | null;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, positive }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline">
        <p className="text-2xl font-semibold text-gray-800 dark:text-white">{value}</p>
      </div>
      <div className="mt-2 flex items-center text-sm">
        {positive !== null ? (
          <>
            {positive ? (
              <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1 text-red-500" />
            )}
            <span className={`${positive ? 'text-green-500' : 'text-red-500'}`}>
              {change}
            </span>
          </>
        ) : (
          <span className="text-gray-500 dark:text-gray-400">{change}</span>
        )}
      </div>
    </div>
  );
};

export default StatCard;