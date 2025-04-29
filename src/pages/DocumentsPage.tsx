import React, { useState } from 'react';
import { Search, FileText, Filter, SortAsc, Upload, Download } from 'lucide-react';
import DocumentCard from '../components/documents/DocumentCard';
import DocumentUploader from '../components/documents/DocumentUploader';

const DocumentsPage: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample documents for demonstration
  const documents = [
    {
      id: 'doc1',
      title: 'Patient Medical Records - John Smith',
      type: 'Medical Report',
      date: '2025-01-15',
      entities: 42,
      status: 'Annotated',
      industry: 'Healthcare'
    },
    {
      id: 'doc2',
      title: 'Legal Contract - Acme Corp Partnership',
      type: 'Legal Document',
      date: '2025-01-10',
      entities: 67,
      status: 'Processed',
      industry: 'Legal'
    },
    {
      id: 'doc3',
      title: 'Product Catalog - Summer Collection',
      type: 'E-commerce',
      date: '2025-01-08',
      entities: 128,
      status: 'Processing',
      industry: 'E-commerce'
    },
    {
      id: 'doc4',
      title: 'Quarterly Financial Report - Q4 2024',
      type: 'Financial',
      date: '2025-01-05',
      entities: 92,
      status: 'Processed',
      industry: 'Finance'
    },
    {
      id: 'doc5',
      title: 'Research Paper - Advances in NLP',
      type: 'Research',
      date: '2025-01-03',
      entities: 53,
      status: 'Uploaded',
      industry: 'Academic'
    },
    {
      id: 'doc6',
      title: 'Patient Medical Records - Sarah Johnson',
      type: 'Medical Report',
      date: '2024-12-28',
      entities: 38,
      status: 'Annotated',
      industry: 'Healthcare'
    }
  ];
  
  const filteredDocuments = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-8">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Documents</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Manage and process your documents for entity extraction
          </p>
        </div>
        <button
          onClick={() => setIsUploading(true)}
          className="px-4 py-2 mt-4 sm:mt-0 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Upload className="w-4 h-4 inline-block mr-2" />
          Upload Documents
        </button>
      </div>

      {/* Search and filter bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600">
              <Filter className="h-4 w-4 inline-block mr-1" />
              Filter
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600">
              <SortAsc className="h-4 w-4 inline-block mr-1" />
              Sort
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600">
              <Download className="h-4 w-4 inline-block mr-1" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Documents grid */}
      {filteredDocuments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <FileText className="w-16 h-16 mx-auto text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No documents found</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {searchQuery ? 'Try a different search term' : 'Upload documents to get started'}
          </p>
          <button
            onClick={() => setIsUploading(true)}
            className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Upload className="w-4 h-4 inline-block mr-2" />
            Upload Documents
          </button>
        </div>
      )}

      {/* Document uploader modal */}
      {isUploading && (
        <DocumentUploader onClose={() => setIsUploading(false)} />
      )}
    </div>
  );
};

export default DocumentsPage;