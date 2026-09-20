import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { socialLinks } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg2/50 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">RAJAN</h3>
            <p className="text-dark-text2 text-sm">
              Building clean, useful and modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark-text mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-dark-text2 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link}
                    </span>
                    <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-dark-text mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Experience', 'Education', 'Certifications', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-dark-text2 hover:text-blue-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link}
                    </span>
                    <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-dark-text mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/smrrajan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 hover:bg-blue-500/20 text-dark-text hover:text-blue-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sm-r-rajan-4027862a2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 hover:bg-blue-500/20 text-dark-text hover:text-blue-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/10 hover:bg-blue-500/20 text-dark-text hover:text-blue-400 transition-all duration-300"
                aria-label="LeetCode"
              >
                <span className="sr-only">LeetCode</span>
                <SiLeetcode className="w-5 h-5" />
              </a>
              <a
                href="mailto:smrrajan007@gmail.com"
                className="p-3 rounded-lg bg-white/10 hover:bg-blue-500/20 text-dark-text hover:text-blue-400 transition-all duration-300"
                aria-label="Email"
              >
                <span className="sr-only">Email</span>
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-text2 text-sm text-center md:text-left">
            © {currentYear} RAJAN SM R. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Floating particles background */}
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
    </footer>
  );
}
