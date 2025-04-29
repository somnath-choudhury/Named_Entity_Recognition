import React from 'react';

const TopEntitiesTable: React.FC = () => {
  // Sample data
  const entities = [
    { name: 'John Smith', type: 'Person', count: 28, documents: 15, percentage: 5.7 },
    { name: 'May 15, 2025', type: 'Date', count: 23, documents: 18, percentage: 4.7 },
    { name: 'hypertension', type: 'Medical Condition', count: 19, documents: 12, percentage: 3.9 },
    { name: 'Memorial Hospital', type: 'Organization', count: 17, documents: 14, percentage: 3.5 },
    { name: 'Metformin', type: 'Medication', count: 15, documents: 9, percentage: 3.0 },
    { name: 'Dr. Emily Johnson', type: 'Person', count: 14, documents: 11, percentage: 2.8 },
    { name: 'New York', type: 'Location', count: 12, documents: 10, percentage: 2.4 },
    { name: 'chest pain', type: 'Symptom', count: 11, documents: 8, percentage: 2.2 },
    { name: 'Legal Contract', type: 'Document Type', count: 10, documents: 7, percentage: 2.0 },
    { name: '500mg', type: 'Dosage', count: 9, documents: 6, percentage: 1.8 },
  ];
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Person':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Date':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Medical Condition':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'Organization':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Medication':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400';
      case 'Location':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Symptom':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Document Type':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400';
      case 'Dosage':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Entity Value
            </th>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Occurrences
            </th>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Documents
            </th>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              % of Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {entities.map((entity, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                {entity.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeColor(entity.type)}`}>
                  {entity.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 text-center">
                {entity.count}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 text-center">
                {entity.documents}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 text-right">
                {entity.percentage.toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopEntitiesTable;