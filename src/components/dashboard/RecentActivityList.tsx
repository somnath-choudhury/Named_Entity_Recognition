import React from 'react';
import { FileText, Tag, Upload, Download, User, Calendar } from 'lucide-react';

interface Activity {
  id: number;
  type: 'upload' | 'extraction' | 'annotation' | 'export';
  title: string;
  description: string;
  user: string;
  timestamp: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: 'upload',
    title: 'Medical Reports Batch',
    description: 'Uploaded 5 medical reports for processing',
    user: 'John Smith',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    type: 'extraction',
    title: 'Patient Data Extraction',
    description: 'Completed extraction of patient data entities',
    user: 'System',
    timestamp: '3 hours ago'
  },
  {
    id: 3,
    type: 'annotation',
    title: 'Legal Document Manual Annotation',
    description: 'Manually annotated 3 legal contracts',
    user: 'Sarah Johnson',
    timestamp: '5 hours ago'
  },
  {
    id: 4,
    type: 'export',
    title: 'E-commerce Product Data',
    description: 'Exported product entities to JSON format',
    user: 'Michael Chen',
    timestamp: '1 day ago'
  },
  {
    id: 5,
    type: 'upload',
    title: 'Financial Reports',
    description: 'Uploaded 10 financial reports for processing',
    user: 'Emily Davis',
    timestamp: '1 day ago'
  }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case 'upload':
      return <Upload className="w-5 h-5 text-blue-500" />;
    case 'extraction':
      return <FileText className="w-5 h-5 text-teal-500" />;
    case 'annotation':
      return <Tag className="w-5 h-5 text-purple-500" />;
    case 'export':
      return <Download className="w-5 h-5 text-orange-500" />;
    default:
      return <Calendar className="w-5 h-5 text-gray-500" />;
  }
};

const RecentActivityList: React.FC = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {activities.map((activity) => (
        <div key={activity.id} className="py-4 first:pt-0 last:pb-0">
          <div className="flex items-start">
            <div className="p-2 mr-4 rounded-full bg-gray-100 dark:bg-gray-700">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.description}
              </p>
              <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                <User className="w-3 h-3 mr-1" />
                <span>{activity.user}</span>
                <span className="mx-1">•</span>
                <span>{activity.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivityList;