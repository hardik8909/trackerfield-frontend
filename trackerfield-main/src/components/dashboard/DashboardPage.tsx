import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { IncidentTable } from '@/components/dashboard/IncidentTable';
import { METRIC_CARDS } from '@/lib/constants/incidents';

export function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col">
      <Header title="Operations Dashboard" subtitle="Monitor and manage active incidents" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 p-6 bg-slate-50 overflow-auto"
      >
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Metrics Grid */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {METRIC_CARDS.map((card, index) => (
                <MetricCard key={card.label} data={card} index={index} />
              ))}
            </div>
          </section>

          {/* Incidents Table */}
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Recent Incidents</h2>
            <IncidentTable />
          </section>
        </div>
      </motion.main>
    </div>
  );
}
