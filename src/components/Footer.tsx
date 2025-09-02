import React from 'react';
import { Search, Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Search className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-2xl font-bold">
                Talent <span className="text-amber-500">Source</span>
              </span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Connecting exceptional talent with extraordinary opportunities. 
              Your career success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Job Seekers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Career Advice</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Interview Tips</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Temping</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Training Source</a></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Find Candidates</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Recruitment Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Employer Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-amber-500 flex-shrink-0" />
                <span className="text-slate-300">support@talentsource.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-amber-500 flex-shrink-0" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
            </div>
            
            {/* <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2 text-slate-200">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
                <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm">
              © 2024 Talent Source. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;