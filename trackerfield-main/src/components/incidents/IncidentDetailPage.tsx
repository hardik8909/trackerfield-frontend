import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { Header } from '@/components/layout/Header';
import { StatusBadge } from '@/components/common/StatusBadge';
import { WorkflowTimeline } from '@/components/incidents/WorkflowTimeline';
import { DetailCard } from '@/components/incidents/DetailCard';
import { ReportModal } from '@/components/common/ReportModal';
import { INCIDENT_DETAILS } from '@/lib/constants/incidents';
import { IncidentDetail } from '@/lib/types';

interface IncidentDetailPageProps {
  incidentId: string;
}

export function IncidentDetailPage({ incidentId }: IncidentDetailPageProps) {
  const navigate = useNavigate();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const incident: IncidentDetail | undefined = INCIDENT_DETAILS[incidentId];

  if (!incident) {
    return (
      <div className="flex-1 flex flex-col">
        <Header title="Incident Not Found" />
        <div className="flex-1 bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-slate-600 mb-4">The incident you&apos;re looking for doesn&apos;t exist.</p>
            <button
              onClick={() => navigate({ to: "/" })}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleGenerateReport = () => {
    setIsReportModalOpen(true);
  };

  const handleCloseIncident = () => {
    toast.success('Incident Closed Successfully');
  };

  return (
    <div className="flex-1 flex flex-col">
      <Header title={incident.title} subtitle={incident.address} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 p-6 bg-slate-50 overflow-auto"
      >
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Back Button & Status */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <button
              onClick={() => navigate({ to: "/" })}
              className="flex items-center gap-2 px-4 py-2 hover:bg-white rounded-lg transition-colors text-slate-600"
            >
              <ArrowLeft size={20} />
              <span>Back to Dashboard</span>
            </button>
            <StatusBadge status={incident.status} />
          </motion.div>

          {/* Workflow Timeline */}
          <WorkflowTimeline steps={incident.workflow} />

          {/* Detail Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {incident.dispatch && (
              <DetailCard
                title="Dispatch"
                fields={incident.dispatch}
                index={0}
              />
            )}
            {incident.construction && (
              <DetailCard
                title="Construction"
                fields={incident.construction}
                index={1}
              />
            )}
            {incident.investigation && (
              <DetailCard
                title="Investigation"
                fields={incident.investigation}
                hasPhotos={true}
                photoCount={incident.photos?.length || 0}
                index={2}
              />
            )}
            {incident.billing && (
              <DetailCard
                title="Billing"
                fields={incident.billing}
                index={3}
              />
            )}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-end"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerateReport}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Generate Report
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCloseIncident}
              className="px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Close Incident
            </motion.button>
          </motion.div>
        </div>
      </motion.main>

      {/* Report Modal */}
      <ReportModal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} />
    </div>
  );
}
