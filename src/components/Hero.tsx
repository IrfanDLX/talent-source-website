import React, { useState } from "react";
import { Search, MapPin, Briefcase } from "lucide-react";

const Hero: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { jobTitle, location });
  };

  return (
    <main className="hero-bg min-h-[calc(100vh-200px)] flex items-center justify-start">
      <video autoPlay muted loop playsInline className="hero-video">
        <source
          src="https://talent-source-prod-bucket.lon1.digitaloceanspaces.com/assets/sale-page-banner-video.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content"></div>
      <div className="relative z-10 max-w-7xl mx-auto py-20 text-left px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* <!-- Main Heading --> */}
          <h1 className="ts-text-h2 font-extrabold leading-tight text-white mb-4">
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
                className="w-full py-3 px-5 pr-16 bg-white text-white placeholder-slate-500 focus:outline-none rounded-xl text-base"
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
          {/* <div className="mt-12 flex flex-col sm:flex-row items-start justify-start gap-8 text-white">
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
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
