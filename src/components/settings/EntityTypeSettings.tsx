import React, { useState } from 'react';
import { Plus, Trash2, Edit, Save, X } from 'lucide-react';

interface EntityType {
  id: string;
  name: string;
  description: string;
  color: string;
  industry: string;
  editable: boolean;
  isEditing?: boolean;
}

const EntityTypeSettings: React.FC = () => {
  const [entityTypes, setEntityTypes] = useState<EntityType[]>([
    { id: '1', name: 'Person', description: 'Names of individuals', color: '#3B82F6', industry: 'All', editable: false },
    { id: '2', name: 'Organization', description: 'Companies, agencies, institutions', color: '#8B5CF6', industry: 'All', editable: false },
    { id: '3', name: 'Location', description: 'Physical locations, cities, countries', color: '#10B981', industry: 'All', editable: false },
    { id: '4', name: 'Date', description: 'Calendar dates, time references', color: '#F59E0B', industry: 'All', editable: false },
    { id: '5', name: 'Medical Condition', description: 'Diseases, disorders, symptoms', color: '#EF4444', industry: 'Healthcare', editable: true },
    { id: '6', name: 'Medication', description: 'Drug names, treatments', color: '#14B8A6', industry: 'Healthcare', editable: true },
    { id: '7', name: 'Legal Reference', description: 'Citations to legal codes or cases', color: '#6366F1', industry: 'Legal', editable: true },
    { id: '8', name: 'Product', description: 'Items sold by businesses', color: '#EC4899', industry: 'E-commerce', editable: true },
  ]);

  const [newEntity, setNewEntity] = useState({
    name: '',
    description: '',
    color: '#3B82F6',
    industry: 'All'
  });
  
  const [isAdding, setIsAdding] = useState(false);
  
  const startEditing = (id: string) => {
    setEntityTypes(entityTypes.map(entity => 
      entity.id === id ? { ...entity, isEditing: true } : entity
    ));
  };
  
  const cancelEditing = (id: string) => {
    setEntityTypes(entityTypes.map(entity => 
      entity.id === id ? { ...entity, isEditing: false } : entity
    ));
  };
  
  const updateEntity = (id: string, field: string, value: string) => {
    setEntityTypes(entityTypes.map(entity => 
      entity.id === id ? { ...entity, [field]: value } : entity
    ));
  };
  
  const saveEntity = (id: string) => {
    setEntityTypes(entityTypes.map(entity => 
      entity.id === id ? { ...entity, isEditing: false } : entity
    ));
  };
  
  const deleteEntity = (id: string) => {
    setEntityTypes(entityTypes.filter(entity => entity.id !== id));
  };
  
  const addNewEntity = () => {
    if (newEntity.name.trim()) {
      const newId = (entityTypes.length + 1).toString();
      setEntityTypes([
        ...entityTypes,
        {
          id: newId,
          name: newEntity.name,
          description: newEntity.description,
          color: newEntity.color,
          industry: newEntity.industry,
          editable: true
        }
      ]);
      
      // Reset form
      setNewEntity({
        name: '',
        description: '',
        color: '#3B82F6',
        industry: 'All'
      });
      setIsAdding(false);
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Entity Types</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-3 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Entity Type
        </button>
      </div>
      
      {/* Add new entity form */}
      {isAdding && (
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md mb-6">
          <h3 className="text-md font-medium text-gray-900 dark:text-white mb-4">Add New Entity Type</h3>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="new-entity-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="new-entity-name"
                value={newEntity.name}
                onChange={(e) => setNewEntity({...newEntity, name: e.target.value})}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="new-entity-industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Industry
              </label>
              <select
                id="new-entity-industry"
                value={newEntity.industry}
                onChange={(e) => setNewEntity({...newEntity, industry: e.target.value})}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                <option value="All">All</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Legal">Legal</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            
            <div className="sm:col-span-1">
              <label htmlFor="new-entity-color" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Color
              </label>
              <input
                type="color"
                id="new-entity-color"
                value={newEntity.color}
                onChange={(e) => setNewEntity({...newEntity, color: e.target.value})}
                className="mt-1 block w-full h-9 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:border-gray-600"
              />
            </div>
            
            <div className="sm:col-span-1 flex items-end">
              <div className="flex space-x-2">
                <button
                  onClick={addNewEntity}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Save className="w-4 h-4 mr-1" />
                  Save
                </button>
                <button
                  onClick={() => setIsAdding(false)}
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  <X className="w-4 h-4 mr-1" />
                  Cancel
                </button>
              </div>
            </div>
            
            <div className="sm:col-span-6">
              <label htmlFor="new-entity-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <input
                type="text"
                id="new-entity-description"
                value={newEntity.description}
                onChange={(e) => setNewEntity({...newEntity, description: e.target.value})}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                placeholder="Brief description of this entity type"
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Entity types table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Color
              </th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Industry
              </th>
              <th className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {entityTypes.map((entity) => (
              <tr key={entity.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div 
                    className="w-6 h-6 rounded-full" 
                    style={{ backgroundColor: entity.color }}
                  ></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {entity.isEditing ? (
                    <input
                      type="text"
                      value={entity.name}
                      onChange={(e) => updateEntity(entity.id, 'name', e.target.value)}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  ) : (
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{entity.name}</div>
                  )}
                </td>
                <td className="px-6 py-4">
                  {entity.isEditing ? (
                    <input
                      type="text"
                      value={entity.description}
                      onChange={(e) => updateEntity(entity.id, 'description', e.target.value)}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  ) : (
                    <div className="text-sm text-gray-500 dark:text-gray-400">{entity.description}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {entity.isEditing ? (
                    <select
                      value={entity.industry}
                      onChange={(e) => updateEntity(entity.id, 'industry', e.target.value)}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    >
                      <option value="All">All</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Legal">Legal</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Finance">Finance</option>
                    </select>
                  ) : (
                    <div className="text-sm text-gray-500 dark:text-gray-400">{entity.industry}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {entity.isEditing ? (
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => saveEntity(entity.id)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Save className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => cancelEditing(entity.id)}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-end space-x-2">
                      {entity.editable && (
                        <>
                          <button
                            onClick={() => startEditing(entity.id)}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => deleteEntity(entity.id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      {!entity.editable && (
                        <span className="text-gray-400 dark:text-gray-500">System Default</span>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EntityTypeSettings;