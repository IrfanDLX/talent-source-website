import React from 'react';
import { Target, Heart, Users, Zap, Award, Globe } from 'lucide-react';

const MissionStatement: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Mission Statement */}
        <div className="text-center mb-12">
          <h2 className="ts-text-h2 font-bold text-black-lite mb-2">
            Our Mission
          </h2>
          <p className="ts-p-text text-black-lite max-w-3xl mx-auto leading-relaxed mb-8">
            At Talent Source, we believe every professional deserves access to meaningful career opportunities. 
            Our mission is to bridge the gap between exceptional talent and forward-thinking companies, 
            creating a world where careers flourish and businesses thrive.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Heart,
              title: "Passion for People",
              description: "We're driven by genuine care for every individual's career journey and success."
            },
            {
              icon: Users,
              title: "Building Communities",
              description: "Creating connections that go beyond job placements to foster lasting professional relationships."
            },
            {
              icon: Zap,
              title: "Innovation First",
              description: "Leveraging cutting-edge technology to make job searching and hiring more efficient and effective."
            },
            {
              icon: Award,
              title: "Excellence Always",
              description: "Maintaining the highest standards in everything we do, from service quality to platform reliability."
            },
            {
              icon: Globe,
              title: "Global Impact",
              description: "Expanding opportunities worldwide and breaking down barriers to career advancement."
            },
            {
              icon: Target,
              title: "Results Driven",
              description: "Focused on delivering measurable outcomes that create real value for job seekers and employers."
            }
          ].map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-gold-light group transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="ts-text-h3 font-bold text-black-lite mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-black-lite leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
          <h3 className="ts-text-h2 font-bold text-black-lite mb-4">
            Our Vision for the Future
          </h3>
          <p className="ts-p-text text-black-lite max-w-4xl mx-auto leading-relaxed mb-6">
            We envision a world where geographical boundaries don't limit career potential, where skills are recognized 
            and rewarded fairly, and where every professional has the tools and opportunities they need to build a 
            fulfilling career. Through innovation, dedication, and unwavering commitment to our users, we're making 
            this vision a reality, one connection at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-contained px-8 py-3">
              Join Our Mission
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;