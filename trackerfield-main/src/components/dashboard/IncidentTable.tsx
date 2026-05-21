import { motion } from 'framer-motion';
import { useNavigate } from '@tanstack/react-router';
import { INCIDENTS } from '@/lib/constants/incidents';
import { StatusBadge } from '@/components/common/StatusBadge';
import { IncidentRow } from '@/lib/types';

interface IncidentTableProps {
  incidents?: IncidentRow[];
}

export function IncidentTable({ incidents = INCIDENTS }: IncidentTableProps) {
  const navigate = useNavigate();

  const handleRowClick = (id: string) => {
    navigate({ to: '/incidents/$id', params: { id } });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Incident ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Assigned To
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Last Updated
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {incidents.map((incident, index) => (
              <motion.tr
                key={incident.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                onClick={() => handleRowClick(incident.id)}
                className="hover:bg-slate-50 cursor-pointer transition-colors"
                whileHover={{ backgroundColor: '#f8fafc' }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                  {incident.id}
                </td>
                <td className="px-6 py-4 text-sm text-slate-900">{incident.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={incident.status} />
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{incident.assignedTo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {incident.lastUpdated}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="divide-y divide-slate-200">
          {incidents.map((incident) => (
            <motion.div
              key={incident.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => handleRowClick(incident.id)}
              className="p-4 hover:bg-slate-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-blue-600">{incident.id}</span>
                <StatusBadge status={incident.status} />
              </div>
              <p className="text-sm text-slate-600 mb-2">{incident.address}</p>
              <div className="flex justify-between text-xs text-slate-500">
                <span>{incident.assignedTo}</span>
                <span>{incident.lastUpdated}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
