import { motion } from 'framer-motion';
import { WorkflowStep } from '@/lib/types';

interface WorkflowTimelineProps {
  steps: WorkflowStep[];
}

export function WorkflowTimeline({ steps }: WorkflowTimelineProps) {
  const activeIndex = steps.findIndex((step) => step.status === 'active');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-6">Incident Workflow</h3>

      {/* Desktop Timeline */}
      <div className="hidden md:flex items-center gap-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            {/* Step Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                step.status === 'completed'
                  ? 'bg-green-100 text-green-700'
                  : step.status === 'active'
                    ? 'bg-blue-100 text-blue-700 border-4 border-blue-400'
                    : 'bg-gray-100 text-gray-500'
              }`}
            >
              {step.status === 'completed' ? '✓' : index + 1}
            </motion.div>

            {/* Step Label */}
            <div className="ml-3 flex-1">
              <p
                className={`text-sm font-medium ${
                  step.status === 'active'
                    ? 'text-blue-600'
                    : step.status === 'completed'
                      ? 'text-green-600'
                      : 'text-gray-500'
                }`}
              >
                {step.title}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`h-1 flex-1 mx-4 origin-left ${
                  index < activeIndex ? 'bg-green-400' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Timeline (Vertical) */}
      <div className="md:hidden space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex gap-4"
          >
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                step.status === 'completed'
                  ? 'bg-green-100 text-green-700'
                  : step.status === 'active'
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-400'
                    : 'bg-gray-100 text-gray-500'
              }`}
            >
              {step.status === 'completed' ? '✓' : index + 1}
            </div>
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${
                  step.status === 'active'
                    ? 'text-blue-600'
                    : step.status === 'completed'
                      ? 'text-green-600'
                      : 'text-gray-500'
                }`}
              >
                {step.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
