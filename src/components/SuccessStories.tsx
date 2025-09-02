import React from 'react';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { successStories } from '../data/mockData';

const SuccessStories: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="ts-text-h2 font-bold text-black mb-2">
            Success Stories
          </h2>
          <p className="ts-p-text text-black-lite max-w-2xl mx-auto">
            Real people, real success stories. See how Talent Source transformed careers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100 hover:border-blue-200 group"
            >
              <div className="md:flex h-full">
                <div className="md:w-1/3">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Career Growth
                    </div>
                  </div>
                  
                  <h3 className="ts-p-text font-bold text-black mb-2">
                    {story.name}
                  </h3>
                  
                  <div className="flex items-center mb-4 text-sm">
                    <span className="text-black-lite">{story.beforeRole}</span>
                    <ArrowRight className="h-4 w-4 mx-2 text-primary" />
                    <span className="text-primary font-semibold">{story.afterRole}</span>
                  </div>
                  
                  <div className="text-lg font-semibold text-primary mb-3">
                    {story.company}
                  </div>
                  
                  <p className="text-black-lite mb-4 leading-relaxed">
                    {story.story}
                  </p>
                  
                  <div className="flex items-center text-black-lite text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Success achieved in {story.timeframe}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-contained px-8 py-3">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;