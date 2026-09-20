import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/portfolioData';

export default function Navbar({ scrolled, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsScrolling(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl md:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity"
            onClick={() => {
              handleLinkClick();
              setIsScrolling(true);
            }}
          >
            RAJAN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsScrolling(true)}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-dark-text2 hover:text-dark-text'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block btn-primary text-sm"
            onClick={() => setIsScrolling(true)}
          >
            Get In Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-dark-text" />
            ) : (
              <FaBars className="w-6 h-6 text-dark-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden animate-slideDown bg-dark-bg/90 backdrop-blur-xl border-t border-white/10 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'bg-blue-500/20 text-blue-400 border-l-2 border-blue-400'
                      : 'text-dark-text2 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mx-4 mt-2 btn-primary text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
