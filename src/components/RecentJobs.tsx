import React, { useEffect, useRef } from "react";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { recentJobs } from "../data/mockData";

const RecentJobs: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5; // pixels per frame (smooth)
    const autoScroll = () => {
      if (!scrollContainer) return;

      if (!isHovered.current) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Loop back to start when reaching the end
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      isHovered.current = true;
    };

    // Resume on leave
    const handleMouseLeave = () => {
      isHovered.current = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-white" id="jobs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Latest Job Opportunities
          </h2>
          <p className="text-xl text-black-lite max-w-2xl mx-auto">
            Discover the newest openings from top companies worldwide
          </p>
        </div>

        {/* Auto-scroll container */}
        <div
          className="overflow-x-auto no-scrollbar"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex gap-6 py-4" style={{ width: "max-content" }}>
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-slate-100 hover:border-blue-200 transform hover:-translate-y-1"
                style={{ minWidth: "320px", maxWidth: "320px" }}
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

                  <h3 className="text-md font-semibold text-black mb-1 line-clamp-2">
                    {job.title}
                  </h3>

                  <div className="text-md text-primary mb-3">{job.company}</div>

                  <div className="flex items-center text-black-lite mb-2">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{job.location}</span>
                  </div>

                  <div className="flex items-center text-black-lite mb-4">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{job.postedDate}</span>
                  </div>

                  {job.salary && (
                    <div className="text-md text-black mb-2">{job.salary}</div>
                  )}

                  <p className="text-black-lite text-sm mb-6 line-clamp-3">
                    {job.description}
                  </p>
                </div>

                <div className="flex items-center justify-end">
                  {/* <span className="text-xs bg-slate-100 text-black-lite px-2 py-1 rounded font-medium">
                    via {job.source}
                  </span> */}
                  <button className="btn-contained px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 group">
                    Apply Now
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="btn-contained text-white px-8 py-3 font-semibold">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentJobs;
