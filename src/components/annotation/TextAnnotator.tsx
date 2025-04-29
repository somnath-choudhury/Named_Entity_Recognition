import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Tag } from 'lucide-react';
import { EntityType } from '../../types/ner';

interface TextAnnotatorProps {
  text: string;
  entities: EntityType[];
}

interface TextSelection {
  start: number;
  end: number;
  text: string;
}

const TextAnnotator: React.FC<TextAnnotatorProps> = ({ text, entities }) => {
  const [selection, setSelection] = useState<TextSelection | null>(null);
  const [hoveredEntity, setHoveredEntity] = useState<string | null>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Handle text selection
  const handleMouseUp = useCallback(() => {
    const windowSelection = window.getSelection();
    if (!windowSelection || windowSelection.isCollapsed) {
      setSelection(null);
      return;
    }

    const range = windowSelection.getRangeAt(0);
    const textContent = textRef.current?.textContent || '';
    
    // Get selection coordinates relative to text container
    const start = range.startOffset;
    const end = range.endOffset;
    
    if (start !== end) {
      setSelection({
        start,
        end,
        text: textContent.substring(start, end),
      });
    }
  }, []);

  // Clear selection when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (textRef.current && !textRef.current.contains(e.target as Node)) {
        setSelection(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Render the text with highlighted entities
  const renderText = () => {
    // Simulated entity annotations for demonstration
    const annotations = [
      { id: 'e1', start: 8, end: 18, text: 'John Smith', type: 'PERSON', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
      { id: 'e2', start: 22, end: 34, text: '45-year-old', type: 'AGE', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
      { id: 'e3', start: 63, end: 80, text: 'Memorial Hospital', type: 'HOSPITAL', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
      { id: 'e4', start: 84, end: 97, text: 'January 15, 2025', type: 'DATE', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
      { id: 'e5', start: 112, end: 122, text: 'chest pain', type: 'SYMPTOM', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
      { id: 'e6', start: 127, end: 146, text: 'shortness of breath', type: 'SYMPTOM', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
      { id: 'e7', start: 180, end: 192, text: 'hypertension', type: 'CONDITION', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' },
      { id: 'e8', start: 220, end: 237, text: 'type 2 diabetes', type: 'CONDITION', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' },
      { id: 'e9', start: 260, end: 269, text: 'Metformin', type: 'MEDICATION', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400' },
      { id: 'e10', start: 295, end: 305, text: 'Lisinopril', type: 'MEDICATION', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400' },
      { id: 'e11', start: 338, end: 346, text: 'troponin', type: 'LAB_TEST', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400' },
      { id: 'e12', start: 360, end: 367, text: '0.5 ng/mL', type: 'LAB_VALUE', color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400' },
      { id: 'e13', start: 369, end: 382, text: 'Dr. Emily Johnson', type: 'DOCTOR', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
      { id: 'e14', start: 384, end: 396, text: 'cardiologist', type: 'SPECIALITY', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' },
    ];

    // Create an array of characters with their annotations
    const characters = text.split('').map((char, index) => {
      const matchingAnnotations = annotations.filter(
        (anno) => index >= anno.start && index < anno.end
      );
      
      return {
        char,
        index,
        annotations: matchingAnnotations,
      };
    });

    // Group consecutive characters with the same annotations
    const segments: {
      text: string;
      annotations: typeof annotations;
      startIndex: number;
      endIndex: number;
    }[] = [];
    
    let currentSegment = {
      text: characters[0]?.char || '',
      annotations: characters[0]?.annotations || [],
      startIndex: 0,
      endIndex: 0,
    };

    for (let i = 1; i < characters.length; i++) {
      const current = characters[i];
      const prev = characters[i - 1];
      
      // Check if annotations are the same
      const sameAnnotations =
        current.annotations.length === prev.annotations.length &&
        current.annotations.every((anno) =>
          prev.annotations.some((prevAnno) => prevAnno.id === anno.id)
        );
      
      if (sameAnnotations) {
        // Add to current segment
        currentSegment.text += current.char;
        currentSegment.endIndex = i;
      } else {
        // Push current segment and start a new one
        segments.push({ ...currentSegment });
        currentSegment = {
          text: current.char,
          annotations: current.annotations,
          startIndex: i,
          endIndex: i,
        };
      }
    }
    
    // Add the last segment
    segments.push({ ...currentSegment });
    
    // Render segments
    return segments.map((segment, idx) => {
      if (segment.annotations.length === 0) {
        // Plain text
        return <span key={idx}>{segment.text}</span>;
      } else {
        // Annotated text
        const annotation = segment.annotations[0]; // Use the first annotation for styling
        return (
          <span
            key={idx}
            className={`${annotation.color} px-1 py-0.5 rounded cursor-pointer`}
            onMouseEnter={() => setHoveredEntity(annotation.id)}
            onMouseLeave={() => setHoveredEntity(null)}
            title={`${annotation.type}: ${segment.text}`}
          >
            {segment.text}
            {hoveredEntity === annotation.id && (
              <span className="text-xs ml-1 opacity-80">({annotation.type})</span>
            )}
          </span>
        );
      }
    });
  };

  return (
    <div className="relative">
      <div
        ref={textRef}
        className="text-gray-800 dark:text-gray-200 leading-relaxed select-text"
        onMouseUp={handleMouseUp}
      >
        {renderText()}
      </div>
      
      {selection && (
        <div className="absolute mt-2 flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-2 z-10">
          <Tag className="w-4 h-4 mr-2 text-blue-500" />
          <span className="text-sm font-medium">Selected: "{selection.text}"</span>
          <div className="ml-4 flex space-x-2">
            {entities.slice(0, 3).map((entity) => (
              <button
                key={entity.id}
                className={`px-2 py-1 text-xs rounded ${entity.color}`}
                onClick={() => {
                  // Handle entity annotation
                  console.log(`Annotating "${selection.text}" as ${entity.label}`);
                  setSelection(null);
                }}
              >
                {entity.label}
              </button>
            ))}
            {entities.length > 3 && (
              <button className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                +{entities.length - 3} more
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextAnnotator;