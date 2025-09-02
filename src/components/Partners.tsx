import React from 'react';
import { partnerCompanies } from '../data/mockData';

const Partners: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join professionals working at top companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partnerCompanies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200 group"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 w-auto  transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Want to Partner With Us?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that trust Talent Source to find top talent. 
              Post your jobs and connect with qualified candidates today.
            </p>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;