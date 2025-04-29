import React, { useState } from 'react';
import { CheckIcon, ChevronDown } from 'lucide-react';

const industries = [
  { id: 'all', name: 'All Industries' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'legal', name: 'Legal' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'finance', name: 'Finance' }
];

const IndustrySelector: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-between w-52 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedIndustry.name}</span>
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-52 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-700 dark:border-gray-600">
          <ul className="py-1">
            {industries.map((industry) => (
              <li key={industry.id}>
                <button
                  type="button"
                  className={`flex items-center justify-between w-full px-4 py-2 text-sm text-left ${
                    industry.id === selectedIndustry.id
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600'
                  }`}
                  onClick={() => {
                    setSelectedIndustry(industry);
                    setIsOpen(false);
                  }}
                >
                  {industry.name}
                  {industry.id === selectedIndustry.id && (
                    <CheckIcon className="w-4 h-4 ml-2" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IndustrySelector;