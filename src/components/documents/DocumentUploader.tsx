import React, { useState, useRef } from 'react';
import { X, Upload, FileText, AlertCircle } from 'lucide-react';

interface DocumentUploaderProps {
  onClose: () => void;
}

const DocumentUploader: React.FC<DocumentUploaderProps> = ({ onClose }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files).filter(
        file => file.type === 'application/pdf' || 
               file.type === 'text/plain' || 
               file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      );
      
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const uploadFiles = () => {
    setUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full mx-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Upload Documents</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Upload area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging
                ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20'
                : 'border-gray-300 dark:border-gray-600'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Drag and drop your documents here
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Supported file types: PDF, TXT, DOCX (up to 10MB each)
              </p>
            </div>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
            >
              Browse Files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.txt,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          
          {/* Uploaded files list */}
          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Selected Documents ({files.length})</h3>
              <div className="overflow-auto max-h-60">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {files.map((file, index) => (
                    <li key={index} className="py-3 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-3 flex-shrink-0">
                          <FileText className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-xs">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {(file.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Industry selection */}
          <div className="mt-6">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Document Industry
            </label>
            <select
              id="industry"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="healthcare">Healthcare</option>
              <option value="legal">Legal</option>
              <option value="ecommerce">E-commerce</option>
              <option value="finance">Finance</option>
              <option value="academic">Academic</option>
            </select>
          </div>
          
          {/* Auto-process option */}
          <div className="mt-4 flex items-start">
            <div className="flex items-center h-5">
              <input
                id="autoProcess"
                type="checkbox"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                defaultChecked
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="autoProcess" className="font-medium text-gray-700 dark:text-gray-300">
                Auto-process documents
              </label>
              <p className="text-gray-500 dark:text-gray-400">
                Automatically extract entities after upload
              </p>
            </div>
          </div>
          
          {/* Information notice */}
          {files.length > 0 && (
            <div className="flex items-start mt-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-md p-3">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                  Processing large documents may take several minutes
                </p>
              </div>
            </div>
          )}
          
          {/* Action buttons */}
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={uploadFiles}
              disabled={files.length === 0 || uploading}
              className={`px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                files.length === 0 || uploading
                  ? 'bg-blue-400 cursor-not-allowed dark:bg-blue-500/50'
                  : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
              }`}
            >
              {uploading ? 'Uploading...' : 'Upload Documents'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploader;