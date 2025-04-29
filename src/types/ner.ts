export interface EntityType {
  id: string;
  label: string;
  description: string;
  color: string;
  colorDot: string;
  isCustom: boolean;
}

export interface Entity {
  id: string;
  text: string;
  type: string;
  start: number;
  end: number;
  confidence?: number;
}

export interface Document {
  id: string;
  title: string;
  content: string;
  industry: string;
  entities?: Entity[];
}

export interface AnnotationSelection {
  text: string;
  start: number;
  end: number;
  entityType?: string;
}