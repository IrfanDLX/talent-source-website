import React from 'react';
import { Target, Heart, Users, Zap, Award, Globe } from 'lucide-react';

const MissionStatement: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.3),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Mission Statement */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Target className="h-4 w-4" />
            Our Mission
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Connecting Dreams with
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Opportunities</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
            At Talent Source, we believe every professional deserves access to meaningful career opportunities. 
            Our mission is to bridge the gap between exceptional talent and forward-thinking companies, 
            creating a world where careers flourish and businesses thrive.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: "Passion for People",
              description: "We're driven by genuine care for every individual's career journey and success.",
              color: "from-red-500 to-pink-500"
            },
            {
              icon: Users,
              title: "Building Communities",
              description: "Creating connections that go beyond job placements to foster lasting professional relationships.",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Zap,
              title: "Innovation First",
              description: "Leveraging cutting-edge technology to make job searching and hiring more efficient and effective.",
              color: "from-yellow-500 to-orange-500"
            },
            {
              icon: Award,
              title: "Excellence Always",
              description: "Maintaining the highest standards in everything we do, from service quality to platform reliability.",
              color: "from-purple-500 to-indigo-500"
            },
            {
              icon: Globe,
              title: "Global Impact",
              description: "Expanding opportunities worldwide and breaking down barriers to career advancement.",
              color: "from-green-500 to-teal-500"
            },
            {
              icon: Target,
              title: "Results Driven",
              description: "Focused on delivering measurable outcomes that create real value for job seekers and employers.",
              color: "from-indigo-500 to-purple-500"
            }
          ].map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/15"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-blue-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Vision for the Future
          </h3>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            We envision a world where geographical boundaries don't limit career potential, where skills are recognized 
            and rewarded fairly, and where every professional has the tools and opportunities they need to build a 
            fulfilling career. Through innovation, dedication, and unwavering commitment to our users, we're making 
            this vision a reality, one connection at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join Our Mission
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;