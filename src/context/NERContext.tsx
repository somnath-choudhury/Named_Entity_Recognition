import React, { createContext, useContext, useState, useCallback } from 'react';
import { EntityType, Document } from '../types/ner';

interface NERContextType {
  entityTypes: EntityType[];
  selectedEntities: EntityType[];
  toggleEntitySelection: (id: string) => void;
  addCustomEntity: (name: string) => void;
  currentDocument: Document | null;
  loadDocument: (document: Document) => void;
}

const defaultEntityTypes: EntityType[] = [
  {
    id: '1',
    label: 'Person',
    description: 'Names of individuals',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    colorDot: 'bg-blue-500',
    isCustom: false
  },
  {
    id: '2',
    label: 'Organization',
    description: 'Companies, agencies, institutions',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    colorDot: 'bg-purple-500',
    isCustom: false
  },
  {
    id: '3',
    label: 'Location',
    description: 'Physical locations, cities, countries',
    color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    colorDot: 'bg-green-500',
    isCustom: false
  },
  {
    id: '4',
    label: 'Date',
    description: 'Calendar dates, time references',
    color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    colorDot: 'bg-yellow-500',
    isCustom: false
  },
  {
    id: '5',
    label: 'Medical Condition',
    description: 'Diseases, disorders, symptoms',
    color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    colorDot: 'bg-red-500',
    isCustom: false
  },
  {
    id: '6',
    label: 'Medication',
    description: 'Drug names, treatments',
    color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400',
    colorDot: 'bg-teal-500',
    isCustom: false
  },
  {
    id: '7',
    label: 'Doctor',
    description: 'Medical professionals',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    colorDot: 'bg-blue-500',
    isCustom: false
  },
  {
    id: '8',
    label: 'Hospital',
    description: 'Medical facilities',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    colorDot: 'bg-purple-500',
    isCustom: false
  },
  {
    id: '9',
    label: 'Legal Reference',
    description: 'Citations, case numbers, statutes',
    color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400',
    colorDot: 'bg-indigo-500',
    isCustom: false
  },
  {
    id: '10',
    label: 'Product',
    description: 'Items that are sold or manufactured',
    color: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400',
    colorDot: 'bg-pink-500',
    isCustom: false
  }
];

const NERContext = createContext<NERContextType | undefined>(undefined);

export const NERProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [entityTypes, setEntityTypes] = useState<EntityType[]>(defaultEntityTypes);
  const [selectedEntities, setSelectedEntities] = useState<EntityType[]>([
    defaultEntityTypes[0], // Person
    defaultEntityTypes[4], // Medical Condition
    defaultEntityTypes[5], // Medication
    defaultEntityTypes[6], // Doctor
  ]);
  const [currentDocument, setCurrentDocument] = useState<Document | null>(null);
  
  const toggleEntitySelection = useCallback((id: string) => {
    const entity = entityTypes.find(e => e.id === id);
    if (!entity) return;
    
    setSelectedEntities(prev => {
      const isSelected = prev.some(e => e.id === id);
      if (isSelected) {
        return prev.filter(e => e.id !== id);
      } else {
        return [...prev, entity];
      }
    });
  }, [entityTypes]);
  
  const addCustomEntity = useCallback((name: string) => {
    const newId = (entityTypes.length + 1).toString();
    
    // Generate a random color from a predefined set
    const colors = [
      { bg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400', dot: 'bg-blue-500' },
      { bg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400', dot: 'bg-purple-500' },
      { bg: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400', dot: 'bg-green-500' },
      { bg: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400', dot: 'bg-yellow-500' },
      { bg: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400', dot: 'bg-red-500' },
      { bg: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400', dot: 'bg-teal-500' },
      { bg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400', dot: 'bg-indigo-500' },
      { bg: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400', dot: 'bg-pink-500' },
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const newEntity: EntityType = {
      id: newId,
      label: name,
      description: 'Custom entity type',
      color: randomColor.bg,
      colorDot: randomColor.dot,
      isCustom: true
    };
    
    setEntityTypes(prev => [...prev, newEntity]);
    setSelectedEntities(prev => [...prev, newEntity]);
  }, [entityTypes]);
  
  const loadDocument = useCallback((document: Document) => {
    setCurrentDocument(document);
  }, []);
  
  return (
    <NERContext.Provider value={{
      entityTypes,
      selectedEntities,
      toggleEntitySelection,
      addCustomEntity,
      currentDocument,
      loadDocument
    }}>
      {children}
    </NERContext.Provider>
  );
};

export const useNER = (): NERContextType => {
  const context = useContext(NERContext);
  if (context === undefined) {
    throw new Error('useNER must be used within a NERProvider');
  }
  return context;
};