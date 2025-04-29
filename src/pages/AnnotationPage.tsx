import React, { useState, useRef, useEffect } from 'react';
import TextAnnotator from '../components/annotation/TextAnnotator';
import EntityPanel from '../components/annotation/EntityPanel';
import AnnotationControls from '../components/annotation/AnnotationControls';
import AnnotationInstructions from '../components/annotation/AnnotationInstructions';
import { useNER } from '../context/NERContext';

const sampleText = `Patient John Smith, a 45-year-old male, presented to Memorial Hospital on January 15, 2025, complaining of chest pain and shortness of breath. His medical history includes hypertension diagnosed in 2020 and type 2 diabetes. Current medications include Metformin 500mg twice daily and Lisinopril 10mg once daily. Lab results show elevated troponin levels at 0.5 ng/mL. Dr. Emily Johnson, cardiologist, recommended an immediate ECG and cardiac enzyme panel.`;

const AnnotationPage: React.FC = () => {
  const { selectedEntities, currentDocument, loadDocument } = useNER();
  const [text, setText] = useState(sampleText);
  const [showInstructions, setShowInstructions] = useState(false);
  
  // Simulating document loading
  useEffect(() => {
    if (!currentDocument) {
      loadDocument({
        id: 'sample-1',
        title: 'Sample Medical Report',
        content: sampleText,
        industry: 'healthcare'
      });
    }
  }, [currentDocument, loadDocument]);

  return (
    <div className="py-8">
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Text Annotation</h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Select text to annotate entities or review automatically detected entities
          </p>
        </div>
        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="px-4 py-2 mt-4 sm:mt-0 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
        >
          {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
        </button>
      </div>

      {showInstructions && <AnnotationInstructions />}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main annotation area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Document info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {currentDocument?.title || 'Sample Document'}
            </h2>
            
            {/* Text annotator component */}
            <div className="border rounded-lg border-gray-200 dark:border-gray-700 min-h-[300px] p-4">
              <TextAnnotator 
                text={text} 
                entities={selectedEntities}
              />
            </div>
          </div>
          
          {/* Annotation controls */}
          <AnnotationControls />
        </div>
        
        {/* Entity selection panel */}
        <div className="lg:col-span-1">
          <EntityPanel />
        </div>
      </div>
    </div>
  );
};

export default AnnotationPage;