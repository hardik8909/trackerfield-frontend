import { createFileRoute } from "@tanstack/react-router";
import { IncidentDetailPage } from "@/components/incidents/IncidentDetailPage";

export const Route = createFileRoute("/incidents/$id")({
  component: IncidentRoute,
});

function IncidentRoute() {
  const { id } = Route.useParams();
  return <IncidentDetailPage incidentId={id} />;
}
