import React, { useState } from 'react';
import { RefreshCw, Download, UploadCloud, Check } from 'lucide-react';

const ModelSettings: React.FC = () => {
  const [activeModel, setActiveModel] = useState('general-ner');
  
  // Sample models
  const models = [
    {
      id: 'general-ner',
      name: 'General NER',
      description: 'Base model for general purpose named entity recognition',
      version: '1.2.0',
      lastUpdated: '2 months ago',
      size: '45 MB',
      entities: ['Person', 'Organization', 'Location', 'Date'],
      accuracy: '89%'
    },
    {
      id: 'healthcare-ner',
      name: 'Healthcare NER',
      description: 'Specialized model for medical and healthcare documents',
      version: '1.1.5',
      lastUpdated: '1 month ago',
      size: '68 MB',
      entities: ['Person', 'Organization', 'Date', 'Medical Condition', 'Medication', 'Procedure'],
      accuracy: '92%'
    },
    {
      id: 'legal-ner',
      name: 'Legal NER',
      description: 'Specialized model for legal documents and contracts',
      version: '1.0.2',
      lastUpdated: '3 months ago',
      size: '52 MB',
      entities: ['Person', 'Organization', 'Date', 'Legal Reference', 'Jurisdiction', 'Clause'],
      accuracy: '87%'
    },
    {
      id: 'ecommerce-ner',
      name: 'E-commerce NER',
      description: 'Specialized model for product catalogs and listings',
      version: '0.9.8',
      lastUpdated: '4 months ago',
      size: '49 MB',
      entities: ['Product', 'Brand', 'Category', 'Price', 'Feature', 'Specification'],
      accuracy: '85%'
    }
  ];
  
  // Get the current active model
  const currentModel = models.find(model => model.id === activeModel);
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Active Model Settings</h2>
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{currentModel?.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{currentModel?.description}</p>
              <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span>Version {currentModel?.version}</span>
                <span className="mx-2">•</span>
                <span>Updated {currentModel?.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>Accuracy: {currentModel?.accuracy}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <RefreshCw className="w-4 h-4 mr-1" />
                Update Model
              </button>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
                <Download className="w-4 h-4 mr-1" />
                Download
              </button>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Supported Entity Types</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {currentModel?.entities.map((entity, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                >
                  {entity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Available Models</h2>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700">
            <UploadCloud className="w-4 h-4 mr-1" />
            Upload Custom Model
          </button>
        </div>
        
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {models.map((model) => (
              <li key={model.id}>
                <div className={`px-6 py-4 ${model.id === activeModel ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {model.id === activeModel ? (
                          <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <Check className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                            <RefreshCw className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{model.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{model.description}</p>
                      </div>
                    </div>
                    <div>
                      {model.id === activeModel ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          Active
                        </span>
                      ) : (
                        <button
                          onClick={() => setActiveModel(model.id)}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        >
                          Activate
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>Version {model.version}</span>
                    <span className="mx-2">•</span>
                    <span>Size: {model.size}</span>
                    <span className="mx-2">•</span>
                    <span>Accuracy: {model.accuracy}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Training Settings</h2>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="batch-size" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Batch Size
              </label>
              <select
                id="batch-size"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                defaultValue="16"
              >
                <option>8</option>
                <option>16</option>
                <option>32</option>
                <option>64</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="learning-rate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Learning Rate
              </label>
              <select
                id="learning-rate"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                defaultValue="0.001"
              >
                <option>0.0001</option>
                <option>0.0005</option>
                <option>0.001</option>
                <option>0.005</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="epochs" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Training Epochs
              </label>
              <input
                type="number"
                id="epochs"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                defaultValue="10"
                min="1"
                max="100"
              />
            </div>
            
            <div>
              <label htmlFor="validation-split" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Validation Split
              </label>
              <input
                type="number"
                id="validation-split"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                defaultValue="0.2"
                min="0.1"
                max="0.5"
                step="0.05"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Start Training
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSettings;