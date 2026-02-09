import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-40 pb-20 md:pt-48 md:pb-32 bg-primary-50 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 relative z-10">
            <span className="text-brand-teal font-semibold tracking-wide text-sm uppercase mb-4 block">Trusted Healthcare Partner</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
              Your Health Is Our <br/>
              <span className="text-brand-teal">Top Priority</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Experience world-class healthcare with compassionate doctors, cutting-edge technology, and personalized treatment plans designed just for you.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#appointment"
                className="px-8 py-3.5 bg-brand-teal hover:bg-primary-700 text-white rounded font-medium flex items-center transition-all shadow-lg shadow-brand-teal/20"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <button className="px-8 py-3.5 bg-white border border-slate-200 hover:border-brand-teal hover:text-brand-teal text-slate-700 rounded font-medium flex items-center transition-all group">
                <Play className="mr-2 w-4 h-4 fill-current" />
                Watch Video
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">15+</p>
                <p className="text-slate-500 text-xs md:text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">50k+</p>
                <p className="text-slate-500 text-xs md:text-sm mt-1">Happy Patients</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">100+</p>
                <p className="text-slate-500 text-xs md:text-sm mt-1">Expert Doctors</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative">
             {/* Background Blob Shape */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-100/50 rounded-full blur-3xl -z-10"></div>
             
             <div className="relative">
                {/* Hero Image: Updated per user request */}
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPO4VD_uX8JYxEkR30_ERuLlyEP7fzZpbKX6AR3rl1S7DIZrLMW6-b-UpjAe6KKw35LSBonSQNHJ3oETym8MT7ZnMsUTnkPspuWvBixx40F1mmWZS1wAXmuHyJmrkfsfcvGcHrR7xVKXlpEJyL4GtU=w382-h260-s-no-gm?authuser=2"
                  alt="Friendly Doctor"
                  className="w-full max-w-md mx-auto relative z-10 rounded-3xl shadow-2xl object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-10 -right-4 md:-right-12 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-bounce-slow">
                   <div className="bg-yellow-100 p-2 rounded-full">
                     <span className="text-xl">😊</span>
                   </div>
                   <div>
                      <p className="font-bold text-slate-900 text-sm">Verified Doctors</p>
                      <p className="text-slate-500 text-xs">100% Certified</p>
                   </div>
                </div>

                <div className="absolute bottom-10 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full text-green-600">
                     <CheckCircle size={20} />
                   </div>
                   <div>
                      <p className="font-bold text-slate-900 text-sm">24/7 Support</p>
                      <p className="text-slate-500 text-xs">Always Available</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;