import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-primary-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-teal font-bold text-xs uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-primary-100">Get In Touch</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-4">Contact Us</h2>
          <p className="text-slate-600 mt-4 max-w-lg mx-auto text-sm">
            Visit us in Umuahia Village, Obingwa, or reach out to us for appointments and emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
          {/* Map and Info */}
          <div className="flex flex-col h-full">
            <div className="space-y-8 mb-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                     <p className="text-sm text-slate-500 leading-relaxed">Umuahia Village,<br/>Obingwa Local Government Area,<br/>Abia State, Nigeria</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                     <p className="text-sm text-slate-500 leading-relaxed">Emergency: +234 803 780 7987<br/>Reception: +234 803 780 7987</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-teal text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                     <p className="text-sm text-slate-500 leading-relaxed">Emergency: 24/7<br/>Outpatient: Mon - Sat, 8:00 AM - 6:00 PM</p>
                  </div>
               </div>
            </div>
            
            {/* Google Map Integration */}
            <div className="flex-1 min-h-[300px] bg-slate-100 rounded-2xl overflow-hidden relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127160.060134444!2d7.33!3d5.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104299bd6057a1bf%3A0x6003756d10825f8!2sObingwa%2C%20Abia!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, position: 'absolute', top: 0, left: 0}} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Odiche Hospital Location Map"
               ></iframe>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">Your Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">Department</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all">
                   <option>General Inquiry</option>
                   <option>Paediatrics</option>
                   <option>Surgery</option>
                   <option>Maternity</option>
                   <option>Laboratory</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all"></textarea>
              </div>
              <button className="w-full py-3.5 bg-brand-teal hover:bg-primary-700 text-white font-bold rounded-lg shadow-lg shadow-brand-teal/20 transition-all">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;