import React from 'react';
import { Check, Plus } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Visuals - Custom Grid for Hospital Photos */}
          <div className="lg:w-1/2 relative">
            <div className="flex gap-4 h-[500px]">
               {/* Column 1: Tall Exterior Building Image */}
               <div className="w-1/2 h-full">
                  <img 
                    src="https://lh3.googleusercontent.com/pw/AP1GczMejU6B9hbdTzbz_ojGbJS7NIf5XsakY-cz73nAZLM8TrDP5kxY6BqSYYTZQtWQ2rBsNo_u0OLplH0FlMYcYNAKXzvJMYG84aB0cWMODfjDS-uB6HN7jPlUwwcEL0qob25iVFV1r3PaEFfkZZEs5Ck=w659-h878-s-no-gm?authuser=2" 
                    alt="Odiche Hospital Exterior" 
                    className="rounded-2xl w-full h-full object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500"
                  />
               </div>
               
               {/* Column 2: Stacked Interior Images */}
               <div className="w-1/2 flex flex-col gap-4 h-full">
                  {/* Waiting Room */}
                  <div className="h-1/2">
                    <img 
                      src="https://lh3.googleusercontent.com/pw/AP1GczNI_H9K_n147pEskvqzCFNIQBKE_SfM-IHlCJhQbq_ZzBscOd020EyASXe0bjARxW1pnM5bV6GE09UWChlhmZnm_EkciA-CMrHSeWZrITEoMgupHYzY-qzqEasvu3E83s0yiw2SQlmPLDHDrpHlXto=w1080-h810-s-no-gm?authuser=2" 
                      alt="Waiting Room" 
                      className="rounded-2xl w-full h-full object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Ward / Patient Bed */}
                  <div className="h-1/2 relative group">
                    <img 
                      src="https://lh3.googleusercontent.com/pw/AP1GczOtsszKTfYwaMX5tPZdR6jsW0YHzOJRWdx5iJE2L59anT_yhj10BaFS49TftNfLN96ZcnKH0qoqIGm_Ifvs6FeN1TauWTtpg83mAek6mQsk803go7r9moNDcUY6B9BQc8LS6owwM9Nl7L2piAQQqtk=w659-h878-s-no-gm?authuser=2" 
                      alt="Patient Ward" 
                      className="rounded-2xl w-full h-full object-cover shadow-lg hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                       <p className="text-xs font-bold text-brand-teal uppercase tracking-wider">Private Wards</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:w-1/2">
            <span className="text-slate-500 font-medium text-sm mb-2 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Quality Healthcare in <br/>Umuahia Village
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Odiche Specialist Hospital is dedicated to serving the people of Obingwa Local Government Area and surrounding communities. We provide accessible, high-quality medical care ranging from emergency services to specialized surgery, ensuring that our community stays healthy and strong.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Modern Facilities', desc: 'Well-equipped private wards and comfortable waiting areas.' },
                { title: 'Specialist Services', desc: 'Expert surgical, paediatric, and maternity care.' },
                { title: 'Community Focused', desc: 'Serving Obingwa with dedication and compassion.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="#doctors" className="text-brand-teal font-bold hover:text-primary-700 inline-flex items-center transition-colors">
                 Meet Our Specialists <Plus className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;