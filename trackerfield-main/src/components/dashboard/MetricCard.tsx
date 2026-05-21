import { motion } from 'framer-motion';
import {
  AlertCircle,
  Clock,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { MetricCardData } from '@/lib/types';

interface MetricCardProps {
  data: MetricCardData;
  index: number;
}

const iconMap = {
  AlertCircle,
  Clock,
  CheckCircle,
  AlertTriangle,
};

const colorClasses = {
  blue: 'border-blue-200 hover:shadow-blue-100',
  green: 'border-green-200 hover:shadow-green-100',
  orange: 'border-orange-200 hover:shadow-orange-100',
  gray: 'border-gray-200 hover:shadow-gray-100',
};

const textColorClasses = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  gray: 'text-gray-600',
};

export function MetricCard({ data, index }: MetricCardProps) {
  const Icon = iconMap[data.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`bg-white rounded-lg border-l-4 p-6 shadow-md hover:shadow-lg transition-shadow ${colorClasses[data.color]}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-600 text-sm font-medium">{data.label}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{data.value}</p>
          {data.trend && (
            <p className={`text-xs mt-2 ${textColorClasses[data.color]}`}>
              {data.trend}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg ${textColorClasses[data.color]} bg-opacity-10`}>
            <Icon size={24} className={textColorClasses[data.color]} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
