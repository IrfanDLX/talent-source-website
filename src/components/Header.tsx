import React, { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "jobs", label: "Jobs", href: "#jobs" },
    { id: "insights", label: "Insights", href: "#insights" },
    { id: "about", label: "About Us", href: "#about" },
    { id: "faq", label: "FAQ", href: "#faq" },
    { id: "contact", label: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    setActive(currentPage);
  }, [currentPage]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              {/* <Search className="h-8 w-8 text-amber-500" /> */}
              <span className="ml-2 text-2xl font-bold text-primary">
                Talent Source
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // prevent default jump
                  setActive(item.id);
                  setCurrentPage(item.id);

                  if (item.id === 'home') {
                    const section = document.querySelector(item.href);
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }
                }}
                className={`nav-item text-black-lite ${active === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-black-lite hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Sign In
            </button>
            <button className="btn-contained px-6 py-2 text-sm font-medium">
              Hire & Partner
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black-lite hover:text-primary p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-black-lite hover:text-primary text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-slate-200 pt-4">
                <button className="block w-full text-left px-3 py-2 text-black-lite hover:text-primary text-sm font-medium">
                  Sign In
                </button>
                <button className="block w-full mt-2 mx-3 btn-contained text-sm font-medium px-3 py-2">
                  Hire & Partner
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
