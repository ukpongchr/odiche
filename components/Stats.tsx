import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-teal/90 py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div className="space-y-1">
             <p className="text-4xl font-bold">98%</p>
             <p className="text-xs text-primary-100 uppercase tracking-wider">Patient Satisfaction</p>
          </div>
          <div className="space-y-1">
             <p className="text-4xl font-bold">4.9/5</p>
             <p className="text-xs text-primary-100 uppercase tracking-wider">Average Rating</p>
          </div>
          <div className="space-y-1">
             <p className="text-4xl font-bold">10K+</p>
             <p className="text-xs text-primary-100 uppercase tracking-wider">5-Star Reviews</p>
          </div>
          <div className="space-y-1">
             <p className="text-4xl font-bold">100%</p>
             <p className="text-xs text-primary-100 uppercase tracking-wider">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;