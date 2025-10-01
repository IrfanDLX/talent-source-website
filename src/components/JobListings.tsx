import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight, Bookmark, Search, TrendingUp, Users, Briefcase, Star, Shield, Zap, Award } from "lucide-react";
import { recentJobs } from "../data/mockData";

const jobStats = [
  {
    id: 1,
    title: "Active Job Listings",
    value: "12,500+",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Companies Hiring",
    value: "2,800+",
    icon: Users,
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Success Rate",
    value: "94%",
    icon: TrendingUp,
    color: "from-amber-500 to-amber-600"
  },
  {
    id: 4,
    title: "Average Rating",
    value: "4.8/5",
    icon: Star,
    color: "from-purple-500 to-purple-600"
  }
];

const JobListings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<string>>(new Set());
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [currentStat, setCurrentStat] = useState(0);
  const [bannerDesign, setBannerDesign] = useState<'design1' | 'design2' | 'design3'>('design1');
  const jobsPerPage = 6;
  
  // Calculate pagination
  const totalPages = Math.ceil(recentJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = recentJobs.slice(startIndex, endIndex);

  const handleSearch = () => {
    console.log("Searching for:", { keyword: searchKeyword, location: searchLocation });
    // Implement search functionality here
  };

  // Auto-rotate stats
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % jobStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleBookmark = (jobId: string) => {
    const newBookmarked = new Set(bookmarkedJobs);
    if (newBookmarked.has(jobId)) {
      newBookmarked.delete(jobId);
    } else {
      newBookmarked.add(jobId);
    }
    setBookmarkedJobs(newBookmarked);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const renderBannerDesign1 = () => (
    <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 rounded-2xl overflow-hidden mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left Side - Text Content & Search */}
        <div className="flex items-center p-8 lg:p-12">
          <div className="w-full">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight text-white">
              Find Your Perfect Job Match
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Discover thousands of opportunities from top companies worldwide. 
              Search by keywords, location, and find the career that matches your aspirations.
            </p>

            {/* Enhanced Search Section */}
            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Keyword Search */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Job title, skills, or company"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Location Search */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                Search Jobs
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">12,500+</div>
                <div className="text-blue-200 text-sm">Active Jobs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">2,800+</div>
                <div className="text-blue-200 text-sm">Companies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Job Statistics & Features */}
        <div className="relative bg-white/5 backdrop-blur-sm p-6 lg:p-8 flex items-center">
          <div className="w-full">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-6">Platform Statistics</h3>
              
              {/* Rotating Stats Display */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${jobStats[currentStat].color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    {React.createElement(jobStats[currentStat].icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {jobStats[currentStat].value}
                  </div>
                  <div className="text-blue-200">
                    {jobStats[currentStat].title}
                  </div>
                </div>
              </div>

              {/* Stats Indicators */}
              <div className="flex justify-center space-x-2 mb-6">
                {jobStats.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStat(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentStat
                        ? 'bg-amber-500 scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Why Choose Our Platform?</h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm">Verified job postings from trusted companies</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm">Advanced filtering and search capabilities</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm">Real-time job alerts and notifications</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm">One-click application process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBannerDesign2 = () => (
    <div className="relative overflow-hidden rounded-2xl mb-12">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side - Content */}
        <div className="flex items-center p-8 lg:p-12">
          <div className="w-full">
            <div className="inline-flex items-center bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              #1 Job Platform
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">Discover Your</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Dream Career
              </span>
            </h1>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
              Connect with top employers and unlock opportunities that match your skills, 
              passion, and career goals. Your next big break is just a search away.
            </p>

            {/* Advanced Search */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Find Your Perfect Match
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="What position are you looking for?"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                    <Briefcase className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Where do you want to work?"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    />
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  </div>
                </div>
                
                <button
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Search className="h-5 w-5" />
                  Search 12,500+ Jobs
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">2,800+ Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">94% Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Features */}
        <div className="relative p-8 lg:p-12 flex items-center">
          <div className="w-full">
            {/* Live Job Feed */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  Live Job Feed
                </h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs">Live</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {recentJobs.slice(0, 3).map((job, index) => (
                  <div key={job.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-xs font-semibold text-white">
                      {job.company.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{job.title}</div>
                      <div className="text-slate-400 text-xs">{job.company}</div>
                    </div>
                    <div className="text-amber-400 text-xs font-medium">New</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-slate-300 text-xs">Job Match Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">24h</div>
                <div className="text-slate-300 text-xs">Avg Response</div>
              </div>
            </div>

            {/* Popular Categories */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Trending Categories
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {['Technology', 'Healthcare', 'Finance', 'Marketing', 'Design', 'Sales'].map((category) => (
                  <button
                    key={category}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full transition-colors border border-white/30"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-slate-50" id="job-listings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Design Toggle Button */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setBannerDesign('design1')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                bannerDesign === 'design1'
                  ? 'bg-primary text-white'
                  : 'text-black-lite hover:bg-slate-50'
              }`}
            >
              Design 1
            </button>
            <button
              onClick={() => setBannerDesign('design2')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                bannerDesign === 'design2'
                  ? 'bg-primary text-white'
                  : 'text-black-lite hover:bg-slate-50'
              }`}
            >
              Design 2
            </button>
          </div>
        </div>

        {/* Render Selected Banner Design */}
        {bannerDesign === 'design1' ? renderBannerDesign1() : 
         bannerDesign === 'design2' ? renderBannerDesign2() : 
         renderBannerDesign3()}

        {/* Job Cards - One per row */}
        <div className="space-y-6">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-gold-light group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  {/* Left side - Job Info */}
                  <div className="flex items-start gap-4 flex-1">
                    {/* Company Logo */}
                    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                      {job.logo ? (
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <span className="text-primary font-semibold text-lg">
                          {job.company.charAt(0)}
                        </span>
                      )}
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {job.type}
                        </span>
                        <span className="bg-slate-100 text-black-lite px-3 py-1 rounded-full text-xs font-medium">
                          via {job.source}
                        </span>
                      </div>
                      
                      <h3 className="ts-text-h3 font-bold text-black-lite mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      
                      <div className="text-primary font-semibold mb-3">
                        {job.company}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-black-lite text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.postedDate}</span>
                        </div>
                        {job.salary && (
                          <div className="font-semibold text-black">
                            {job.salary}
                          </div>
                        )}
                      </div>

                      <p className="text-black-lite text-sm leading-relaxed line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                  </div>

                  {/* Right side - Actions */}
                  <div className="flex flex-col items-end gap-3 ml-4">
                    <button
                      onClick={() => toggleBookmark(job.id)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        bookmarkedJobs.has(job.id)
                          ? 'bg-primary/10 text-primary'
                          : 'bg-slate-100 text-black-lite hover:bg-slate-200'
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${bookmarkedJobs.has(job.id) ? 'fill-current' : ''}`} />
                    </button>
                    
                    <button className="btn-contained px-6 py-2 text-sm font-medium flex items-center gap-2 group">
                      Apply Now
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Results Info */}
          <div className="text-black-lite">
            Showing <span className="font-semibold">{startIndex + 1}-{Math.min(endIndex, recentJobs.length)}</span> of <span className="font-semibold">{recentJobs.length}</span> jobs
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === 1
                  ? 'bg-slate-100 text-black-lite cursor-not-allowed'
                  : 'bg-white text-black-lite hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const showPage = 
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1);
                
                if (!showPage && page !== currentPage - 2 && page !== currentPage + 2) return null;
                
                if ((page === currentPage - 2 && currentPage > 3) || (page === currentPage + 2 && currentPage < totalPages - 2)) {
                  return (
                    <span key={page} className="px-3 py-2 text-black-lite">
                      ...
                    </span>
                  );
                }

                if (!showPage) return null;

                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-primary text-white'
                        : 'bg-white text-black-lite hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? 'bg-slate-100 text-black-lite cursor-not-allowed'
                  : 'bg-white text-black-lite hover:bg-slate-50 border border-slate-200'
              }`}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;