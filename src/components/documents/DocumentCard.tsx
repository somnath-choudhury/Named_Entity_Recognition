import React from 'react';
import { FileText, Clock, Tag, Edit, Download, Trash2, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DocumentProps {
  document: {
    id: string;
    title: string;
    type: string;
    date: string;
    entities: number;
    status: string;
    industry: string;
  };
}

const DocumentCard: React.FC<DocumentProps> = ({ document }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Annotated':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Processed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Uploaded':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Medical Report':
        return <FileText className="w-10 h-10 text-blue-500" />;
      case 'Legal Document':
        return <FileText className="w-10 h-10 text-purple-500" />;
      case 'E-commerce':
        return <FileText className="w-10 h-10 text-green-500" />;
      case 'Financial':
        return <FileText className="w-10 h-10 text-yellow-500" />;
      case 'Research':
        return <FileText className="w-10 h-10 text-teal-500" />;
      default:
        return <FileText className="w-10 h-10 text-gray-500" />;
    }
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex">
            <div className="mr-4">
              {getTypeIcon(document.type)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {document.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {document.type} • {document.industry}
              </p>
              <div className="flex items-center mt-2">
                <Clock className="w-4 h-4 text-gray-400 mr-1" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(document.date).toLocaleDateString()}
                </span>
                <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                <Tag className="w-4 h-4 text-gray-400 mr-1" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {document.entities} entities
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
                <div className="py-1">
                  <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    <Download className="w-4 h-4 mr-3 text-gray-500" />
                    Download
                  </button>
                  <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    <Edit className="w-4 h-4 mr-3 text-gray-500" />
                    Rename
                  </button>
                  <button className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700">
                    <Trash2 className="w-4 h-4 mr-3 text-red-500" />
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(document.status)}`}>
            {document.status}
          </span>
          
          <Link
            to={`/annotate?doc=${document.id}`}
            className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;