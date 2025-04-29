import React, { useState } from 'react';
import { RefreshCw, ClipboardCopy, Eye, EyeOff } from 'lucide-react';

const APISettings: React.FC = () => {
  const [apiKey, setApiKey] = useState('sk_test_d8e8fca2dc0f896fd7cb4cb0031ba249');
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  const regenerateApiKey = () => {
    // In a real app, this would call an API to regenerate the key
    const newKey = 'sk_test_' + Math.random().toString(36).substring(2, 15);
    setApiKey(newKey);
  };
  
  const maskApiKey = (key: string) => {
    return key.substring(0, 8) + '••••••••••••••••' + key.substring(key.length - 4);
  };
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">API Key</h2>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Use this API key to access the EntityExtract API. Keep this key secure and never share it publicly.
          </p>
          
          <div className="flex items-center">
            <div className="flex-grow">
              <label htmlFor="api-key" className="sr-only">API Key</label>
              <div className="relative rounded-md shadow-sm">
                <input
                  type={showKey ? 'text' : 'password'}
                  id="api-key"
                  className="block w-full pr-10 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  value={showKey ? apiKey : maskApiKey(apiKey)}
                  readOnly
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowKey(!showKey)}
                    className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                  >
                    {showKey ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="ml-4 flex space-x-3">
              <button
                onClick={copyApiKey}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
              >
                <ClipboardCopy className="h-4 w-4 mr-2" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={regenerateApiKey}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerate
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">API Endpoints</h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Endpoint
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Method
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                  /api/v1/extract
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  Extract entities from text or documents
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded dark:bg-green-900/30 dark:text-green-400">
                    POST
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                  /api/v1/documents
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  Manage documents for processing
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded dark:bg-blue-900/30 dark:text-blue-400">
                    GET
                  </span>
                  <span className="ml-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded dark:bg-green-900/30 dark:text-green-400">
                    POST
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                  /api/v1/entities
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  Retrieve and manage extracted entities
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded dark:bg-blue-900/30 dark:text-blue-400">
                    GET
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 dark:text-blue-400">
                  /api/v1/models
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  Manage and train extraction models
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded dark:bg-blue-900/30 dark:text-blue-400">
                    GET
                  </span>
                  <span className="ml-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded dark:bg-green-900/30 dark:text-green-400">
                    POST
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">External Integrations</h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/google-cloud.svg" alt="Google Cloud" className="h-8 w-8" />
                  <h3 className="ml-3 text-md font-medium text-gray-900 dark:text-white">Google Cloud Storage</h3>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                    Not Connected
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Connect to Google Cloud Storage to store and manage documents
              </p>
              <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Connect
              </button>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws-s3.svg" alt="AWS S3" className="h-8 w-8" />
                  <h3 className="ml-3 text-md font-medium text-gray-900 dark:text-white">Amazon S3</h3>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Connected
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Store and manage documents with Amazon S3
              </p>
              <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600">
                Configure
              </button>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/slack-icon.svg" alt="Slack" className="h-8 w-8" />
                  <h3 className="ml-3 text-md font-medium text-gray-900 dark:text-white">Slack</h3>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                    Not Connected
                  </span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Get notifications about processing status and results in Slack
              </p>
              <button className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APISettings;