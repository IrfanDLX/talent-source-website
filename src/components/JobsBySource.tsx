import React, { useState } from "react";
import { MapPin, Clock, ExternalLink, Filter } from "lucide-react";
import { recentJobs, jobSources } from "../data/mockData";

const JobsBySource: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState("All Sources");
  const [showAll, setShowAll] = useState(false);

  const filteredJobs =
    selectedSource === "All Sources"
      ? recentJobs
      : recentJobs.filter((job) => job.source === selectedSource);

  const jobsToShow = showAll ? filteredJobs : filteredJobs.slice(0, 6);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="ts-text-h2 font-bold text-black mb-2">
            Jobs by Source
          </h2>
          <p className="ts-p-text text-black-lite max-w-2xl mx-auto">
            Find opportunities from your preferred job platforms
          </p>
        </div>

        {/* Source Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {jobSources.map((source) => (
            <button
              key={source}
              onClick={() => {
                setSelectedSource(source);
                setShowAll(false); // reset when switching tabs
              }}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedSource === source
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-slate-100 text-black-lite hover:bg-slate-200"
              }`}
            >
              <Filter className="h-4 w-4" />
              {source}{" "}
              {source !== "All Sources" &&
                `(${recentJobs.filter((job) => job.source === source).length})`}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobsToShow.map((job) => (
            <div
              key={job.id}
              className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-100 hover:border-gold-light transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-primary font-semibold text-lg">
                    {job.company.charAt(0)}
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    {job.type}
                  </span>
                </div>

                <h3 className="ts-p-text font-semibold text-black mb-2">
                  {job.title}
                </h3>

                <div className="ts-p-text text-primary mb-3">
                  {job.company}
                </div>

                <div className="flex items-center text-black-lite mb-2">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{job.location}</span>
                </div>

                <div className="flex items-center text-black-lite mb-4">
                  <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{job.postedDate}</span>
                </div>

                {job.salary && (
                  <div className="ts-p-text text-black mb-2">
                    {job.salary}
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-slate-100 text-black-lite px-2 py-1 rounded font-medium">
                  {job.source}
                </span>
                <button className="btn-contained text-white px-4 py-2 text-sm font-medium flex items-center gap-2 group">
                  Apply
                  <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        {filteredJobs.length > 6 && !showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="btn-contained text-white px-8 py-3 font-semibold transition-colors"
            >
              Show All Jobs
            </button>
          </div>
        )}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-black text-lg">
              No jobs found for the selected source
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsBySource;
