import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight, Bookmark, Share2, TrendingUp, Users, Building2, Star } from "lucide-react";
import { recentJobs } from "../data/mockData";

const JobListings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<string>>(new Set());
  const jobsPerPage = 4;
  
  // Calculate pagination
  const totalPages = Math.ceil(recentJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = recentJobs.slice(startIndex, endIndex);

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

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden" id="job-listings">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            Premium Job Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your Next
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"> Career Move</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Handpicked opportunities from industry leaders, designed to accelerate your professional journey
          </p>
        </div>

        {/* Job Cards */}
        <div className="space-y-8">
          {currentJobs.map((job, index) => (
            <div
              key={job.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50 transform hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Section - Company & Job Info */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            {job.logo ? (
                              <img
                                src={job.logo}
                                alt={job.company}
                                className="w-full h-full object-contain p-2"
                              />
                            ) : (
                              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {job.company.charAt(0)}
                              </span>
                            )}
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                              {job.type}
                            </span>
                            <span className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                              via {job.source}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {job.title}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Building2 className="h-5 w-5 text-blue-600" />
                            <span className="text-xl font-semibold text-blue-600">{job.company}</span>
                            <div className="flex items-center gap-1 ml-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                              ))}
                              <span className="text-sm text-gray-500 ml-1">(4.8)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleBookmark(job.id)}
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            bookmarkedJobs.has(job.id)
                              ? 'bg-red-100 text-red-600 hover:bg-red-200'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          <Bookmark className={`h-5 w-5 ${bookmarkedJobs.has(job.id) ? 'fill-current' : ''}`} />
                        </button>
                        <button className="p-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Location</p>
                          <p className="font-semibold text-gray-900">{job.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl">
                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Posted</p>
                          <p className="font-semibold text-gray-900">{job.postedDate}</p>
                        </div>
                      </div>
                      
                      {job.salary && (
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Users className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 font-medium">Salary</p>
                            <p className="font-semibold text-gray-900">{job.salary}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl p-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {job.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Section - Actions */}
                  <div className="lg:w-80 flex flex-col justify-center space-y-4">
                    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-6 text-white shadow-xl">
                      <div className="text-center space-y-4">
                        <div className="space-y-2">
                          <p className="text-blue-100 text-sm font-medium">Ready to apply?</p>
                          <p className="text-2xl font-bold">Join {Math.floor(Math.random() * 50 + 10)}+ applicants</p>
                        </div>
                        
                        <button className="w-full bg-white text-blue-700 hover:bg-blue-50 px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                          Apply Now
                          <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <div className="flex items-center justify-center gap-4 pt-2">
                          <div className="text-center">
                            <p className="text-2xl font-bold">95%</p>
                            <p className="text-xs text-blue-200">Match Score</p>
                          </div>
                          <div className="w-px h-8 bg-blue-400"></div>
                          <div className="text-center">
                            <p className="text-2xl font-bold">Fast</p>
                            <p className="text-xs text-blue-200">Response</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-amber-800">Trending Position</p>
                          <p className="text-sm text-amber-600">High demand in your area</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Pagination */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Results Info */}
            <div className="text-gray-600 font-medium">
              Showing <span className="text-blue-600 font-bold">{startIndex + 1}-{Math.min(endIndex, recentJobs.length)}</span> of <span className="text-blue-600 font-bold">{recentJobs.length}</span> premium opportunities
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const showPage = 
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1);
                  
                  if (!showPage && page !== currentPage - 2 && page !== currentPage + 2) return null;
                  
                  if ((page === currentPage - 2 && currentPage > 3) || (page === currentPage + 2 && currentPage < totalPages - 2)) {
                    return (
                      <span key={page} className="px-4 py-3 text-gray-400 font-medium">
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
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
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                Next
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default JobListings;