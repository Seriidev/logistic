import ServiceCard from "./ServiceCard";
import { SERVICES } from "../data/services";

export default function ServicesGrid({ className = "" }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 min-w-0 ${className}`}>
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} className="w-full" />
      ))}
    </div>
  );
}
