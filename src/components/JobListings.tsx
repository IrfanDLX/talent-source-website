import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import { recentJobs } from "../data/mockData";

const JobListings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Set<string>>(new Set());
  const jobsPerPage = 6;
  
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
    <section className="py-12 bg-slate-50" id="job-listings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="ts-text-h2 font-bold text-black-lite mb-2">
            All Job Opportunities
          </h2>
          <p className="ts-p-text text-black-lite max-w-2xl mx-auto">
            Browse through our comprehensive list of job opportunities from top companies
          </p>
        </div>

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