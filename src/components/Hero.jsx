import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/portfolioData';

const roles = ['Java Developer', 'Frontend Developer', 'Problem Solver', 'Tech Enthusiast'];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (textIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, textIndex + 1));
          setTextIndex(textIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (textIndex > 0) {
          setDisplayText(currentRole.substring(0, textIndex - 1));
          setTextIndex(textIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [textIndex, isDeleting, roleIndex]);

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return <FaGithub className="w-5 h-5" />;
      case 'LinkedIn':
        return <FaLinkedin className="w-5 h-5" />;
      case 'LeetCode':
        return <SiLeetcode className="w-5 h-5" />;
      case 'Email':
        return <FaEnvelope className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-32 md:pt-40 pb-20 px-4 md:px-8 lg:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="mb-6">
              <span className="text-blue-400 font-semibold text-lg md:text-xl">Welcome to my portfolio</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Hi, I'm
              <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="h-12 md:h-16 mb-6">
              <p className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-semibold">
                {displayText}
                <span className="animate-blink">|</span>
              </p>
            </div>

            <p className="text-dark-text2 text-lg md:text-xl mb-8 max-w-md leading-relaxed">
              {personalInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2">
                View My Work <FaArrowRight className="w-4 h-4" />
              </a>
              <a href={personalInfo.resumeUrl} className="btn-secondary flex items-center justify-center">
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-3 rounded-lg bg-white/10 border border-white/20 text-dark-text hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  title={social.label}
                  target={social.url.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={social.label}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Section */}
          <div className="animate-slideInRight flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

              {/* Profile Container */}
              <div className="relative bg-gradient-to-br from-dark-bg2 to-dark-bg3 rounded-[2rem] border border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.2)] p-3 md:p-4">
                <div className="relative overflow-hidden rounded-[1.5rem] w-full aspect-[4/5] bg-gradient-to-br from-blue-500/30 to-purple-500/30">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Tech Badges */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  {['React', 'Java', 'JavaScript'].map((tech, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/30 backdrop-blur-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 md:mt-20">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
