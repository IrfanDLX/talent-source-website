import React from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* <Search className="h-8 w-8 text-amber-500" /> */}
              <span className="ml-2 text-2xl font-bold text-slate-900">
                Talent <span className="text-amber-500">Source</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#jobs" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
              Find Jobs
            </a>
            <a href="#categories" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
              Categories
            </a>
            <a href="#resources" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
              Resources
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors">
              Post A Job
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-800 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#jobs" className="block px-3 py-2 text-slate-700 hover:text-blue-800 text-sm font-medium">
                Find Jobs
              </a>
              <a href="#categories" className="block px-3 py-2 text-slate-700 hover:text-blue-800 text-sm font-medium">
                Categories
              </a>
              <a href="#resources" className="block px-3 py-2 text-slate-700 hover:text-blue-800 text-sm font-medium">
                Resources
              </a>
              <a href="#about" className="block px-3 py-2 text-slate-700 hover:text-blue-800 text-sm font-medium">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-blue-800 text-sm font-medium">
                Contact
              </a>
              <div className="border-t border-slate-200 pt-4">
                <button className="block w-full text-left px-3 py-2 text-slate-700 hover:text-blue-800 text-sm font-medium">
                  Sign In
                </button>
                <button className="block w-full mt-2 mx-3 bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors">
                  Post A Job
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;