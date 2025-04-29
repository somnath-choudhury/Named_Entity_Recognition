import React from 'react';
import { HelpCircle, AlertCircle } from 'lucide-react';

const AnnotationInstructions: React.FC = () => {
  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <HelpCircle className="h-5 w-5 text-blue-500 dark:text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Annotation Instructions</h3>
          <div className="mt-2 text-sm text-blue-700 dark:text-blue-400 space-y-1">
            <p>Follow these steps to annotate text:</p>
            <ol className="list-decimal list-inside mt-1 pl-4 space-y-1">
              <li>Select text by clicking and dragging over the words you want to annotate</li>
              <li>Choose an entity type from the popup that appears</li>
              <li>Review your annotations in the highlighted text</li>
              <li>Use the panel on the right to enable/disable entity types</li>
              <li>Click "Save Annotations" when you're finished</li>
            </ol>
            
            <div className="flex items-start mt-4">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="ml-2 text-amber-700 dark:text-amber-400">
                For best results, select complete words or phrases. Avoid annotating partial words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnotationInstructions;