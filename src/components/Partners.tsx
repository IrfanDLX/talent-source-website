import React from "react";

const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-black mb-4">
              Want to Partner With Us?
            </h3>
            <p className="text-black-lite mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that trust Talent Source to find top
              talent. Post your jobs and connect with qualified candidates
              today.
            </p>
            <button
              className="btn-contained px-8 py-3"
              onClick={() => {
                window.open(
                  "https://www.talentsourceplatform.com/sales-page",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
