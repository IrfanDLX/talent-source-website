import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { recentJobs } from "../data/mockData";

const JobListings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  
  // Calculate pagination
  const totalPages = Math.ceil(recentJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = recentJobs.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of section
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
    <section className="py-12 bg-slate-50" id="job-listings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="ts-text-h2 font-bold text-black mb-2">
            All Job Opportunities
          </h2>
          <p className="ts-p-text text-black-lite max-w-2xl mx-auto">
            Browse through our comprehensive list of available positions
          </p>
        </div>

        {/* Job Cards - One per row */}
        <div className="space-y-6">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-100 hover:border-gold-light transform hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left side - Job Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                      {job.logo ? (
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-primary font-semibold text-xl">
                          {job.company.charAt(0)}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="ts-text-h3 font-bold text-black mb-1">
                          {job.title}
                        </h3>
                        <span className="text-xs bg-gold-light text-black-lite px-3 py-1 rounded-full font-medium ml-4">
                          {job.type}
                        </span>
                      </div>
                      
                      <div className="text-lg text-primary font-semibold mb-3">
                        {job.company}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-black-lite mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{job.postedDate}</span>
                        </div>
                        {job.salary && (
                          <div className="text-sm font-semibold text-black">
                            {job.salary}
                          </div>
                        )}
                      </div>
                      
                      <p className="text-black-lite text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side - Actions */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                  <span className="text-xs bg-slate-100 text-black-lite px-3 py-1 rounded font-medium text-center">
                    via {job.source}
                  </span>
                  <button className="btn-contained px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 group whitespace-nowrap">
                    Apply Now
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-12 space-x-2">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === 1
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-white text-black-lite hover:bg-slate-50 border border-slate-200 hover:border-primary'
            }`}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              const showPage = 
                page === 1 || 
                page === totalPages || 
                (page >= currentPage - 1 && page <= currentPage + 1);
              
              const showEllipsis = 
                (page === currentPage - 2 && currentPage > 3) ||
                (page === currentPage + 2 && currentPage < totalPages - 2);

              if (showEllipsis) {
                return (
                  <span key={page} className="px-3 py-2 text-slate-400">
                    ...
                  </span>
                );
              }

              if (!showPage) return null;

              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    currentPage === page
                      ? 'bg-primary text-white'
                      : 'bg-white text-black-lite hover:bg-slate-50 border border-slate-200 hover:border-primary'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
              currentPage === totalPages
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-white text-black-lite hover:bg-slate-50 border border-slate-200 hover:border-primary'
            }`}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>

        {/* Results Info */}
        <div className="text-center mt-6 text-sm text-black-lite">
          Showing {startIndex + 1}-{Math.min(endIndex, recentJobs.length)} of {recentJobs.length} jobs
        </div>
      </div>
    </section>
  );
};

export default JobListings;