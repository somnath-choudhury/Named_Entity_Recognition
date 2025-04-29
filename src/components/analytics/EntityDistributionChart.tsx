import React from 'react';

const EntityDistributionChart: React.FC = () => {
  // This would be dynamic data in a real application
  const entities = [
    { id: 1, name: 'Person', count: 342, percentage: 28, color: 'bg-blue-500' },
    { id: 2, name: 'Date', count: 267, percentage: 22, color: 'bg-yellow-500' },
    { id: 3, name: 'Organization', count: 198, percentage: 16, color: 'bg-purple-500' },
    { id: 4, name: 'Location', count: 154, percentage: 13, color: 'bg-green-500' },
    { id: 5, name: 'Medical Condition', count: 112, percentage: 9, color: 'bg-red-500' },
    { id: 6, name: 'Other', count: 146, percentage: 12, color: 'bg-gray-500' },
  ];
  
  return (
    <div>
      <div className="space-y-4">
        {entities.map((entity) => (
          <div key={entity.id}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {entity.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {entity.count} ({entity.percentage}%)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-2.5">
              <div 
                className={`${entity.color} h-2.5 rounded-full`} 
                style={{ width: `${entity.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap -m-1">
          {entities.map((entity) => (
            <div key={entity.id} className="p-1">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${entity.color} mr-1.5`}></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">{entity.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntityDistributionChart;