import React from 'react';

const CtaBanner: React.FC = () => {
  // Function to handle smooth scrolling to appointment section
  const scrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('appointment');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
         <div className="bg-brand-teal rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-2 bg-white/20"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Experience Better <br/>Healthcare?</h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto relative z-10">
              Schedule your appointment today and take the first step towards a healthier you. Our team is ready to help.
            </p>
            <div className="flex justify-center gap-4 relative z-10 flex-col sm:flex-row">
               <a 
                 href="#appointment" 
                 onClick={scrollToAppointment}
                 className="px-8 py-3 bg-white text-brand-teal font-bold rounded-lg hover:bg-primary-50 transition-colors shadow-lg"
               >
                 Book Appointment
               </a>
               <a 
                 href="#contact" 
                 className="px-8 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
               >
                 Contact Us
               </a>
            </div>
         </div>
      </div>
    </section>
  );
};

export default CtaBanner;