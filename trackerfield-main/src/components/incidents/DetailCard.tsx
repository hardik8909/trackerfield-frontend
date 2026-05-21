import { motion } from 'framer-motion';
import { DetailField } from '@/lib/types';
import { ImageIcon } from 'lucide-react';

interface DetailCardProps {
  title: string;
  fields: DetailField[];
  hasPhotos?: boolean;
  photoCount?: number;
  index?: number;
}

export function DetailCard({
  title,
  fields,
  hasPhotos = false,
  photoCount = 0,
  index = 0,
}: DetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>

      <div className="space-y-4">
        {fields.map((field, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 + idx * 0.05 }}
            className="flex justify-between items-start"
          >
            <span className="text-sm text-slate-600">{field.label}</span>
            <span className="text-sm font-medium text-slate-900 text-right max-w-xs">
              {field.value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Photo Placeholders */}
      {hasPhotos && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 pt-4 border-t border-slate-200"
        >
          <p className="text-sm font-medium text-slate-700 mb-3">Photos ({photoCount})</p>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: photoCount }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.1 }}
                className="aspect-square rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
              >
                <ImageIcon size={20} className="text-slate-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
