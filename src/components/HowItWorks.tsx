import React from "react";
import {
  Search,
  FileText,
  MessageCircle,
  Trophy,
  Users,
  Briefcase,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

const stepsForJobSeekers = [
  {
    id: 1,
    title: "Search & Discover",
    description:
      "Browse thousands of job listings from top companies and find opportunities that match your skills and interests.",
    icon: Search,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Apply with Ease",
    description:
      "Submit your application with just a few clicks using our streamlined application process.",
    icon: FileText,
    color: "from-amber-500 to-amber-600",
  },
  {
    id: 3,
    title: "Interview & Connect",
    description:
      "Connect directly with hiring managers and showcase your talents through interviews and assessments.",
    icon: MessageCircle,
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    title: "Land Your Dream Job",
    description:
      "Receive offers and start your new career journey with the support of our career guidance team.",
    icon: Trophy,
    color: "from-purple-500 to-purple-600",
  },
];

const stepsForEmployers = [
  {
    id: 1,
    title: "Post Your Jobs",
    description:
      "Create compelling job listings to attract top talent and highlight your company culture.",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Review Applications",
    description:
      "Easily manage and filter candidates through our intuitive dashboard and smart screening tools.",
    icon: ClipboardCheck,
    color: "from-amber-500 to-amber-600",
  },
  {
    id: 3,
    title: "Engage & Interview",
    description:
      "Communicate with candidates, schedule interviews, and evaluate skills all in one place.",
    icon: Users,
    color: "from-green-500 to-green-600",
  },
  {
    id: 4,
    title: "Hire the Best",
    description:
      "Make confident hiring decisions and onboard new employees seamlessly with our platform.",
    icon: Sparkles,
    color: "from-purple-500 to-purple-600",
  },
];

interface HowItWorksProps {
  audience?: "jobseeker" | "employer";
}

const HowItWorks: React.FC<HowItWorksProps> = ({ audience = "employer" }) => {
  const steps =
    audience === "employer" ? stepsForEmployers : stepsForJobSeekers;

  return (
    <section className="py-16 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Works for{" "}
            {audience === "employer" ? "Employers" : "Job Seekers"}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {audience === "employer"
              ? "Streamline your hiring process in four simple steps"
              : "Your journey to career success in four simple steps"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent z-0"></div>
                )}
                <div className="relative bg-white/70 backdrop-blur-lg rounded-xl p-6 text-center border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="mb-3">
                    <span className="bg-slate-100 text-slate-700 text-sm font-bold px-3 py-1 rounded-full">
                      Step {step.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            {audience === "employer"
              ? "Start Hiring Today"
              : "Start Your Journey"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
