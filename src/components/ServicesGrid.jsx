import ServiceCard from "./ServiceCard";
import { SERVICES } from "../data/services";

export default function ServicesGrid({ className = "" }) {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-6 items-stretch min-w-0 w-full ${className}`}
    >
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} className="w-full h-full" />
      ))}
    </div>
  );
}
