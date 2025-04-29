import React, { useState } from 'react';
import { Save, Settings as SettingsIcon, RefreshCw, UserPlus, Download, Upload } from 'lucide-react';
import EntityTypeSettings from '../components/settings/EntityTypeSettings';
import ModelSettings from '../components/settings/ModelSettings';
import APISettings from '../components/settings/APISettings';

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('entity-types');
  
  return (
    <div className="py-8">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Settings</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Configure your entity extraction system and preferences
          </p>
        </div>
        <button
          className="px-4 py-2 mt-4 sm:mt-0 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Save className="w-4 h-4 inline-block mr-2" />
          Save Changes
        </button>
      </div>

      {/* Settings tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="sm:hidden">
          <label htmlFor="settings-tab" className="sr-only">Select a tab</label>
          <select
            id="settings-tab"
            name="settings-tab"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            defaultValue={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="entity-types">Entity Types</option>
            <option value="models">Models</option>
            <option value="api">API & Integrations</option>
            <option value="users">Users & Permissions</option>
            <option value="export">Import & Export</option>
            <option value="preferences">Preferences</option>
          </select>
        </div>
        <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px overflow-x-auto" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('entity-types')}
              className={`w-full sm:w-auto whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'entity-types'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <SettingsIcon className="w-4 h-4 inline-block mr-2" />
              Entity Types
            </button>
            <button
              onClick={() => setActiveTab('models')}
              className={`w-full sm:w-auto whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'models'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <RefreshCw className="w-4 h-4 inline-block mr-2" />
              Models
            </button>
            <button
              onClick={() => setActiveTab('api')}
              className={`w-full sm:w-auto whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'api'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <SettingsIcon className="w-4 h-4 inline-block mr-2" />
              API & Integrations
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full sm:w-auto whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <UserPlus className="w-4 h-4 inline-block mr-2" />
              Users & Permissions
            </button>
            <button
              onClick={() => setActiveTab('export')}
              className={`w-full sm:w-auto whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'export'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <Download className="w-4 h-4 inline-block mr-2" />
              Import & Export
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`w-full sm:w-auto whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'preferences'
                  ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <SettingsIcon className="w-4 h-4 inline-block mr-2" />
              Preferences
            </button>
          </nav>
        </div>
        
        {/* Settings content */}
        <div className="p-6">
          {activeTab === 'entity-types' && <EntityTypeSettings />}
          {activeTab === 'models' && <ModelSettings />}
          {activeTab === 'api' && <APISettings />}
          {activeTab === 'users' && (
            <div className="text-center py-12">
              <UserPlus className="w-12 h-12 mx-auto text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">User Management</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Manage users and their permissions for the NER system.
              </p>
              <div className="mt-6">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Invite New User
                </button>
              </div>
            </div>
          )}
          {activeTab === 'export' && (
            <div className="text-center py-12">
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <Download className="w-12 h-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Export Data</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                    Export your entity data, annotations, and settings
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Export Data
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <Upload className="w-12 h-12 mx-auto text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Import Data</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                    Import entity data, annotations, or settings from a file
                  </p>
                  <div className="mt-6">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Import Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'preferences' && (
            <div className="max-w-3xl mx-auto">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">User Preferences</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Theme</h3>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="theme" value="light" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Light</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="theme" value="dark" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Dark</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="theme" value="system" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">System</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Default Industry</h3>
                  <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <option value="all">All Industries</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="legal">Legal</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="finance">Finance</option>
                  </select>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Notification Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="notifications-processing" name="notifications-processing" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="notifications-processing" className="font-medium text-gray-700 dark:text-gray-300">Processing Notifications</label>
                        <p className="text-gray-500 dark:text-gray-400">Receive notifications when document processing is complete</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="notifications-updates" name="notifications-updates" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="notifications-updates" className="font-medium text-gray-700 dark:text-gray-300">System Updates</label>
                        <p className="text-gray-500 dark:text-gray-400">Receive notifications about system updates and new features</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;