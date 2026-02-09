import React from 'react';
import { DOCTORS } from '../constants';

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-600 uppercase">Meet Our Doctors</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-4">
            Expert Medical Professionals
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm">
            Our team of board-certified specialists is dedicated to providing you with the highest quality care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-teal/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center relative">
                 {/* Avatar overlap visually */}
                <div className="w-16 h-1 bg-brand-teal mx-auto mb-4 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-900">{doctor.name}</h3>
                <p className="text-brand-teal font-medium text-sm mb-4">{doctor.specialty}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;