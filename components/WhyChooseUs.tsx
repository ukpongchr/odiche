import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="bg-primary-50 text-brand-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Why Choose Odiche</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-4">
            Patient-Centered Care Excellence
          </h2>
          <p className="text-slate-600 mt-4 text-sm">
            Experience healthcare that puts you first with modern conveniences and compassionate service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex gap-4 p-6 hover:bg-slate-50 rounded-xl transition-colors duration-300">
               <div className="w-12 h-12 bg-brand-teal text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-teal/20">
                 <feature.icon size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                 <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
               </div>
            </div>
          ))}
        </div>
        
        {/* Insurance Banner */}
        <div className="mt-20 border-t border-slate-100 pt-16 text-center">
           <h3 className="text-lg font-semibold text-slate-900 mb-8">We Accept Most Insurance Plans</h3>
           <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using text placeholders as standard logos aren't available without external SVGs, but styling implies logos */}
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-blue-100 rounded-full mb-2"></div>
                 <span className="text-xs font-bold">Medicare</span>
              </div>
              <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-blue-400 rounded-full mb-2"></div>
                 <span className="text-xs font-bold">Blue Cross</span>
              </div>
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-yellow-400 rounded-full mb-2"></div>
                 <span className="text-xs font-bold">Aetna</span>
              </div>
               <div className="flex flex-col items-center">
                 <div className="w-12 h-12 bg-green-400 rounded-full mb-2"></div>
                 <span className="text-xs font-bold">United Health</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;