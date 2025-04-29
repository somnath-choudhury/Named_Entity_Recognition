import React from 'react';

interface ProcessingHistoryChartProps {
  timeRange: string;
}

const ProcessingHistoryChart: React.FC<ProcessingHistoryChartProps> = ({ timeRange }) => {
  // Generate dummy data based on time range
  const generateData = () => {
    let labels: string[] = [];
    let documentCounts: number[] = [];
    let entityCounts: number[] = [];
    
    switch (timeRange) {
      case 'week':
        labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        documentCounts = [5, 8, 12, 9, 7, 4, 3];
        entityCounts = [87, 124, 198, 145, 112, 65, 42];
        break;
      case 'month':
        labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        documentCounts = [28, 42, 35, 51];
        entityCounts = [420, 630, 525, 765];
        break;
      case 'year':
        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        documentCounts = [65, 59, 80, 81, 90, 102, 95, 85, 91, 79, 65, 75];
        entityCounts = [975, 885, 1200, 1215, 1350, 1530, 1425, 1275, 1365, 1185, 975, 1125];
        break;
      case 'all':
        labels = ['2022', '2023', '2024', '2025'];
        documentCounts = [243, 412, 598, 756];
        entityCounts = [3645, 6180, 8970, 11340];
        break;
    }
    
    return { labels, documentCounts, entityCounts };
  };
  
  const { labels, documentCounts, entityCounts } = generateData();
  
  // Find the maximum value for scaling
  const maxDocumentCount = Math.max(...documentCounts);
  const maxEntityCount = Math.max(...entityCounts);
  
  return (
    <div className="relative">
      {/* Chart would be implemented with a library like Chart.js in a real app */}
      {/* Here's a simple representation of a bar chart */}
      <div className="h-64 flex items-end space-x-2">
        {labels.map((label, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full flex justify-center space-x-1 mb-1">
              <div 
                className="w-4 bg-blue-500 dark:bg-blue-600 rounded-t"
                style={{ height: `${(documentCounts[index] / maxDocumentCount) * 170}px` }}
              ></div>
              <div 
                className="w-4 bg-teal-500 dark:bg-teal-600 rounded-t"
                style={{ height: `${(entityCounts[index] / maxEntityCount) * 170}px` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</div>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="mt-4 flex justify-center space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 dark:bg-blue-600 rounded mr-2"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Documents</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-teal-500 dark:bg-teal-600 rounded mr-2"></div>
          <span className="text-xs text-gray-600 dark:text-gray-400">Entities</span>
        </div>
      </div>
    </div>
  );
};

export default ProcessingHistoryChart;