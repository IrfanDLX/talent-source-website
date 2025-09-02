import React from 'react';
import { Database, Shield, Zap, HeadphonesIcon, Award, Users } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Extensive Job Database',
    description: 'Access over 10,000 active job listings from verified companies across all industries and experience levels.',
    icon: Database,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Verified Employers',
    description: 'All our partner companies are thoroughly vetted to ensure legitimate opportunities and professional work environments.',
    icon: Shield,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Lightning Fast Applications',
    description: 'Apply to multiple jobs with one-click using our smart application system and pre-filled profiles.',
    icon: Zap,
    color: 'from-amber-500 to-amber-600'
  },
  {
    id: 4,
    title: '24/7 Career Support',
    description: 'Get personalized career guidance, resume reviews, and interview coaching from our expert team.',
    icon: HeadphonesIcon,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 5,
    title: 'Industry Recognition',
    description: 'Trusted by leading companies and recognized as the top recruitment platform by industry experts.',
    icon: Award,
    color: 'from-red-500 to-red-600'
  },
  {
    id: 6,
    title: 'Community Network',
    description: 'Join a thriving community of professionals and access networking opportunities and career events.',
    icon: Users,
    color: 'from-indigo-500 to-indigo-600'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Talent Source?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We're committed to connecting talent with opportunity through innovative solutions and unmatched service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            
            return (
              <div
                key={benefit.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 group transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Take the Next Step?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of professionals who have already found their dream careers through Talent Source
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Create Free Account
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Browse Jobs Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;