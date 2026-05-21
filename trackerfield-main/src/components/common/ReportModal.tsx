import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReportModal({ isOpen, onClose }: ReportModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>

              {/* Content */}
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 border-4 border-slate-200 border-t-blue-500 rounded-full"
                  />
                  <p className="mt-4 text-slate-600">Generating report...</p>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-center"
                >
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Report Generated</h2>
                  <p className="text-slate-600 text-sm mb-6">
                    INC-1024 summary compiled successfully.
                  </p>

                  {/* Bullet Points */}
                  <ul className="text-left space-y-3 mb-6 bg-slate-50 p-4 rounded-lg">
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span>Sent to Dispatch</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span>Saved to Incident Archive</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <span>Billing export marked Ready</span>
                    </li>
                  </ul>

                  {/* Close Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="w-full py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  >
                    Close
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
