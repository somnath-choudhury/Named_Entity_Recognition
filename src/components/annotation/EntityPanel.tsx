import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useNER } from '../../context/NERContext';

const EntityPanel: React.FC = () => {
  const { entityTypes, selectedEntities, toggleEntitySelection, addCustomEntity } = useNER();
  const [newEntityName, setNewEntityName] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddEntity = () => {
    if (newEntityName.trim()) {
      addCustomEntity(newEntityName.trim());
      setNewEntityName('');
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Entity Types</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Add custom entity"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {isAdding && (
        <div className="mb-4">
          <div className="flex">
            <input
              type="text"
              value={newEntityName}
              onChange={(e) => setNewEntityName(e.target.value)}
              placeholder="New entity name"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <button
              onClick={handleAddEntity}
              className="px-3 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
            >
              Add
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-auto pr-2">
        {entityTypes.map((entity) => {
          const isSelected = selectedEntities.some(e => e.id === entity.id);
          
          return (
            <div
              key={entity.id}
              className={`p-3 rounded-md cursor-pointer border transition-all ${
                isSelected
                  ? 'border-blue-300 bg-blue-50 dark:border-blue-600 dark:bg-blue-900/20'
                  : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
              }`}
              onClick={() => toggleEntitySelection(entity.id)}
            >
              <div className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-sm border mr-3 flex items-center justify-center ${
                    isSelected
                      ? 'bg-blue-500 border-blue-500 dark:bg-blue-600 dark:border-blue-600'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {isSelected && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${entity.colorDot}`}></span>
                    <span className="font-medium text-gray-800 dark:text-white">{entity.label}</span>
                  </div>
                  {entity.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {entity.description}
                    </p>
                  )}
                </div>
                {entity.isCustom && (
                  <button
                    className="p-1 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                    title="Remove entity"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle entity removal
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EntityPanel;