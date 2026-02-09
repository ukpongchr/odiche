import React, { useState, useEffect } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold for better detection
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Close mobile menu first
      setIsOpen(false);
      
      const headerOffset = 100; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="w-full font-sans fixed top-0 z-50">
      {/* Top Bar - Red */}
      <div className="bg-brand-red text-white py-2 text-xs md:text-sm font-medium text-center px-4">
        <span>24/7 Emergency Care Available &nbsp; | &nbsp; Call: +234 803 780 7987</span>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-2 group"
            >
              <div className="bg-brand-teal p-1.5 rounded-lg group-hover:bg-primary-700 transition-colors">
                 <Plus className="text-white w-5 h-5" strokeWidth={3} />
              </div>
              <span className="text-xl md:text-2xl font-bold text-slate-800">
                Odiche
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1) || (activeSection === '' && item.href === '#home');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive ? 'text-brand-teal font-bold' : 'text-slate-600 hover:text-brand-teal'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-teal rounded-full animate-in fade-in zoom-in duration-300"></span>
                    )}
                  </a>
                );
              })}
              <a 
                href="#appointment"
                onClick={(e) => handleNavClick(e, '#appointment')}
                className="bg-brand-teal hover:bg-primary-700 text-white px-6 py-2.5 rounded text-sm font-medium transition-colors shadow-lg shadow-brand-teal/30 cursor-pointer"
              >
                Book Appointment
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col space-y-4 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-medium py-2 border-b border-slate-50 ${
                     activeSection === item.href.substring(1) ? 'text-brand-teal' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#appointment"
                onClick={(e) => handleNavClick(e, '#appointment')}
                className="bg-brand-teal text-white py-3 text-center rounded font-medium mt-2 cursor-pointer"
              >
                Book Appointment
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;