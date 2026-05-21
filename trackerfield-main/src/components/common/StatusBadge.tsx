import { STATUS_COLORS, STATUS_LABELS } from '@/lib/constants/incidents';

interface StatusBadgeProps {
  status: 'investigation' | 'ready-to-bill' | 'construction' | 'dispatch';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = STATUS_COLORS[status];
  const label = STATUS_LABELS[status];

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}>
      {label}
    </span>
  );
}
