import React, { useEffect, useRef } from "react";
import { partnerCompanies } from "../data/mockData";

const TrustedCompanies: React.FC = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef<number | null>(null);
  const isHovered = useRef(false);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
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
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="ts-text-h2 font-bold text-black mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="ts-p-text text-black-lite max-w-2xl mx-auto">
            Join professionals working at top companies worldwide
          </p>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-flow-col auto-cols-max gap-8 items-center p-4 overflow-x-auto no-scrollbar"
          style={{ scrollBehavior: "auto" }}
        >
          {partnerCompanies.concat(partnerCompanies).map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200 group"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 w-auto transition-all duration-300 transform grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
