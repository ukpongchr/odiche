import React from 'react';
import { ExternalLink, CalendarCheck } from 'lucide-react';

const AppointmentForm: React.FC = () => {
  return (
    <section id="appointment" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden text-center">
           {/* Top accent */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-primary-400"></div>

           <div className="max-w-2xl mx-auto">
             <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarCheck className="w-8 h-8 text-brand-teal" />
             </div>
             
             <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Book Your Appointment Online</h2>
             <p className="text-slate-600 mb-8 leading-relaxed">
               To ensure we have all the necessary details for your visit, please fill out our secure online appointment form. 
               Our staff will review your request and contact you to confirm the time.
             </p>

             <a 
               href="https://docs.google.com/forms" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-8 py-4 bg-brand-teal hover:bg-primary-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-teal/20 transform hover:-translate-y-1"
             >
               <span>Fill Appointment Form</span>
               <ExternalLink className="ml-2 w-5 h-5" />
             </a>
             
             <p className="mt-6 text-xs text-slate-400">
               You will be redirected to a secure Google Form to complete your booking.
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;