import React from 'react';
import { Save, RefreshCw, Download, Upload, FileText, Trash2 } from 'lucide-react';

const AnnotationControls: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex flex-wrap gap-4">
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          <Save className="w-4 h-4 mr-2" />
          Save Annotations
        </button>
        
        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600">
          <RefreshCw className="w-4 h-4 mr-2" />
          Auto-Detect Entities
        </button>
        
        <button className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600">
          <Download className="w-4 h-4 mr-2" />
          Export
        </button>
        
        <div className="ml-auto flex gap-2">
          <button className="flex items-center px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </button>
          
          <button className="flex items-center px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600">
            <FileText className="w-4 h-4 mr-2" />
            New Document
          </button>
          
          <button className="flex items-center px-3 py-2 bg-white border border-gray-300 text-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-red-400 dark:hover:bg-red-900/20">
            <Trash2 className="w-4 h-4 mr-2" />
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnotationControls;