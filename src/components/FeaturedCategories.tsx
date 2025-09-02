import React from 'react';
import { 
  Monitor, Heart, TrendingUp, DollarSign, 
  Settings, GraduationCap, Target, Users 
} from 'lucide-react';
import { jobCategories } from '../data/mockData';

const iconMap = {
  Monitor,
  Heart,
  TrendingUp,
  DollarSign,
  Settings,
  GraduationCap,
  Target,
  Users
};

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore opportunities in your field of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <div
                key={category.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 cursor-pointer group transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full">
                      {category.jobCount.toLocaleString()} jobs
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;