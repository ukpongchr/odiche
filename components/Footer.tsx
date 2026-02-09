import React from 'react';
import { Plus, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-16 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="bg-brand-teal p-1.5 rounded-lg">
                 <Plus className="text-white w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-xl font-bold text-white">
                Odiche
              </span>
            </a>
            <p className="leading-relaxed mb-6">
              Odiche Specialist Hospital - Serving Obingwa LGA and Abia State with comprehensive healthcare services including surgery, paediatrics, and emergency care.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-brand-teal transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-teal transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="hover:text-brand-teal transition-colors">Find a Doctor</a></li>
              <li><a href="#appointment" className="hover:text-brand-teal transition-colors">Appointments</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6">Services</h4>
             <ul className="space-y-3">
              <li><a href="#services" className="hover:text-brand-teal transition-colors">General Medicine</a></li>
              <li><a href="#services" className="hover:text-brand-teal transition-colors">Paediatrics</a></li>
              <li><a href="#services" className="hover:text-brand-teal transition-colors">Surgery</a></li>
              <li><a href="#services" className="hover:text-brand-teal transition-colors">Maternity (OB/GYN)</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6">Contact Info</h4>
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-teal" />
                  <span>Umuahia Village, Obingwa LGA,<br/>Abia State, Nigeria</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-teal" />
                  <span>+234 803 780 7987</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brand-teal" />
                  <span>contact@odichehospital.com</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs">
           <p>&copy; 2024 Odiche Specialist Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;