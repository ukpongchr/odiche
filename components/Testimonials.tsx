import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-teal relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
         <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
         <div className="absolute left-0 bottom-0 w-64 h-64 bg-black rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 text-white">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase backdrop-blur-sm">Patient Stories</span>
          <h2 className="text-3xl font-bold mt-4">
            What Our Patients Say
          </h2>
          <p className="text-primary-100 mt-4 max-w-2xl mx-auto text-sm">
            Real stories from real patients who experienced exceptional care at Odiche Specialist Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-xl">
               <div className="flex gap-1 mb-4 text-yellow-400">
                 {[...Array(5)].map((_, i) => (
                   <span key={i}>★</span>
                 ))}
               </div>
               <Quote className="text-primary-200 w-10 h-10 mb-4" />
               <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.content}"</p>
               <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}{t.name.split(' ')[1]?.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;