import { IncidentDetail, IncidentRow, MetricCardData } from '../types';

export const METRIC_CARDS: MetricCardData[] = [
  {
    label: 'Open Incidents',
    value: 12,
    icon: 'AlertCircle',
    trend: '+3 this week',
    color: 'blue',
  },
  {
    label: 'Pending Investigation',
    value: 4,
    icon: 'Clock',
    trend: '2 overdue',
    color: 'orange',
  },
  {
    label: 'Ready to Bill',
    value: 2,
    icon: 'CheckCircle',
    trend: '$45K value',
    color: 'green',
  },
  {
    label: 'High Priority',
    value: 1,
    icon: 'AlertTriangle',
    trend: 'Requires attention',
    color: 'gray',
  },
];

export const INCIDENTS: IncidentRow[] = [
  {
    id: 'INC-1024',
    address: '2847 Heritage Way, Springfield',
    status: 'investigation',
    assignedTo: 'Sarah Johnson',
    lastUpdated: '2 hours ago',
  },
  {
    id: 'INC-1023',
    address: '156 Oak Lane, Riverside',
    status: 'ready-to-bill',
    assignedTo: 'Mike Chen',
    lastUpdated: '1 day ago',
  },
  {
    id: 'INC-1022',
    address: '89 Maple Court, Highville',
    status: 'construction',
    assignedTo: 'Emily Rodriguez',
    lastUpdated: '3 days ago',
  },
  {
    id: 'INC-1021',
    address: '234 Birch Avenue, Downtown',
    status: 'dispatch',
    assignedTo: 'James Wilson',
    lastUpdated: '5 days ago',
  },
  {
    id: 'INC-1020',
    address: '567 Cedar Street, Westside',
    status: 'investigation',
    assignedTo: 'Sarah Johnson',
    lastUpdated: '1 week ago',
  },
  {
    id: 'INC-1019',
    address: '890 Pine Road, Eastend',
    status: 'ready-to-bill',
    assignedTo: 'Mike Chen',
    lastUpdated: '1 week ago',
  },
];

export const INCIDENT_DETAILS: Record<string, IncidentDetail> = {
  'INC-1024': {
    id: 'INC-1024',
    title: 'Water Damage Restoration',
    address: '2847 Heritage Way, Springfield',
    status: 'investigation',
    assignedTo: 'Sarah Johnson',
    lastUpdated: '2 hours ago',
    workflow: [
      { id: '1', title: 'Dispatch', status: 'completed' },
      { id: '2', title: 'Construction', status: 'completed' },
      { id: '3', title: 'Investigation', status: 'active' },
      { id: '4', title: 'Billing', status: 'pending' },
    ],
    dispatch: [
      { label: 'Date Dispatched', value: 'March 15, 2024' },
      { label: 'Dispatcher', value: 'Tom Anderson' },
      { label: 'Initial Assessment', value: 'Water intrusion, basement flooding' },
      { label: 'Response Time', value: '45 minutes' },
    ],
    construction: [
      { label: 'Work Started', value: 'March 16, 2024' },
      { label: 'Contractor', value: 'Premier Restoration Inc.' },
      { label: 'Work Scope', value: 'Water extraction, drying, dehumidification' },
      { label: 'Progress', value: '75% complete' },
    ],
    investigation: [
      { label: 'Root Cause', value: 'Burst pipe in foundation wall' },
      { label: 'Damage Assessment', value: '$28,500' },
      { label: 'Insurance Claim', value: 'Submitted' },
      { label: 'Investigation Status', value: 'In Progress' },
    ],
    billing: [
      { label: 'Estimated Total', value: '$32,800' },
      { label: 'Insurance Coverage', value: '95%' },
      { label: 'Client Responsibility', value: '$1,640' },
      { label: 'Expected Invoice', value: 'April 2, 2024' },
    ],
    photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
  },
};

export const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  investigation: { bg: 'bg-orange-100', text: 'text-orange-700' },
  'ready-to-bill': { bg: 'bg-green-100', text: 'text-green-700' },
  construction: { bg: 'bg-blue-100', text: 'text-blue-700' },
  dispatch: { bg: 'bg-gray-100', text: 'text-gray-700' },
};

export const STATUS_LABELS: Record<string, string> = {
  investigation: 'Investigation',
  'ready-to-bill': 'Ready to Bill',
  construction: 'Construction',
  dispatch: 'Dispatch',
};
