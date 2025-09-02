import React, { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";

const Hero: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { jobTitle, location });
  };

  // return (
  //   <section className="relative bg-gradient-to-br from-primary-900 via-primary-500 to-primary-900 text-white">
  //     {/* Background overlay */}
  //     <div className="absolute inset-0 bg-black bg-opacity-20"></div>

  //     {/* Background pattern */}
  //     <div className="absolute inset-0 opacity-10">
  //       <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:20px_20px]"></div>
  //     </div>

  //     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
  //       <div className="text-center">
  //         <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
  //           Find Your Dream Job
  //           <br />
  //           With Elite Opportunities
  //         </h1>
  //         <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
  //           Connect with top employers and discover career opportunities that
  //           match your ambitions. Your next career move starts here.
  //         </p>

  //         {/* Search Bar */}
  //         <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-8">
  //           <div className="flex flex-col md:flex-row gap-4">
  //             <div className="flex-1 relative">
  //               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
  //                 <Briefcase className="h-5 w-5 text-black" />
  //               </div>
  //               <input
  //                 type="text"
  //                 placeholder="Job title, keywords, or company"
  //                 value={jobTitle}
  //                 onChange={(e) => setJobTitle(e.target.value)}
  //                 className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-lg text-black-lite placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
  //               />
  //             </div>

  //             <div className="flex-1 relative">
  //               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
  //                 <MapPin className="h-5 w-5 text-black" />
  //               </div>
  //               <input
  //                 type="text"
  //                 placeholder="City, state, or remote"
  //                 value={location}
  //                 onChange={(e) => setLocation(e.target.value)}
  //                 className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-lg text-black-lite placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
  //               />
  //             </div>

  //             <button
  //               onClick={handleSearch}
  //               className="btn-contained px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
  //             >
  //               <Search className="h-5 w-5" />
  //               Search Jobs
  //             </button>
  //           </div>
  //         </div>

  //         {/* Stats */}
  //         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
  //           <div className="text-center">
  //             <div className="text-3xl md:text-4xl font-bold text-white mb-2">
  //               10,000+
  //             </div>
  //             <div className="text-blue-100 text-lg">Active Job Listings</div>
  //           </div>
  //           <div className="text-center">
  //             <div className="text-3xl md:text-4xl font-bold text-white mb-2">
  //               500+
  //             </div>
  //             <div className="text-blue-100 text-lg">Trusted Companies</div>
  //           </div>
  //           <div className="text-center">
  //             <div className="text-3xl md:text-4xl font-bold text-white mb-2">
  //               95%
  //             </div>
  //             <div className="text-blue-100 text-lg">Success Rate</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <main className="hero-bg min-h-[calc(100vh-120px)] flex items-center justify-start">
      <div className="relative z-10 max-w-7xl mx-auto py-20 text-left px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* <!-- Main Heading --> */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-4">
            Find Your Dream Job <br />
            With Elite Opportunities
          </h1>
          {/* <!-- Subtitle --> */}
          <p className="text-sm md:text-base text-white-lite mb-8 max-w-2xl">
            An intuitive platform designed to streamline your sourcing and
            recruitment process from end-to-end.
          </p>

          {/* <!-- Interactive Search Bar & Button --> */}
          <div className="relative max-w-xl mb-8">
            <div className="flex items-center rounded-xl bg-white/10 border border-slate-800 shadow-xl">
              <input
                type="text"
                placeholder="Search for skills, roles, or companies..."
                className="w-full py-3 px-5 pr-16 bg-transparent text-white placeholder-slate-500 focus:outline-none rounded-xl text-base"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary hover:bg-white/20 transition-colors rounded-lg shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Stats Section --> */}
          <div className="mt-12 flex flex-col sm:flex-row items-start justify-start gap-8 text-white">
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-bold text-white">10k+</h3>
              <p className="text-sm text-white-lite">Sourced Talents</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-sm text-white-lite">Hiring Partners</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-bold text-white">25k+</h3>
              <p className="text-sm text-white-lite">Total Users</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
