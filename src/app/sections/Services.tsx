
import { services } from '@/constants';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  return (
    <section className="max-container flex justify-center items-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} service={service} />
      ))}
    </section>
  )
}

export default Services