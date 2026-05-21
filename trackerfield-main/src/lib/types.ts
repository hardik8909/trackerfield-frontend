export interface WorkflowStep {
  id: string;
  title: string;
  status: 'completed' | 'active' | 'pending';
  timestamp?: string;
}

export interface DetailField {
  label: string;
  value: string;
}

export interface IncidentDetail {
  id: string;
  title: string;
  address: string;
  status: 'investigation' | 'ready-to-bill' | 'construction' | 'dispatch';
  assignedTo: string;
  lastUpdated: string;
  workflow: WorkflowStep[];
  dispatch?: DetailField[];
  construction?: DetailField[];
  investigation?: DetailField[];
  billing?: DetailField[];
  photos?: string[];
}

export interface MetricCardData {
  label: string;
  value: number;
  icon: string;
  trend?: string;
  color: 'blue' | 'green' | 'orange' | 'gray';
}

export interface IncidentRow {
  id: string;
  address: string;
  status: 'investigation' | 'ready-to-bill' | 'construction' | 'dispatch';
  assignedTo: string;
  lastUpdated: string;
}
