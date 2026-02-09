import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-slate-500 font-medium text-sm">Our Services</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-slate-600 mt-4 text-sm md:text-base">
            We offer a wide range of medical services to meet all your healthcare needs under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl border border-slate-100 hover:border-brand-teal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-teal transition-colors">
                <service.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;