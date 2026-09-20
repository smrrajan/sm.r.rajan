import { codingProfiles } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const ProfileCard = ({ profile, index }) => {
  const getIcon = () => {
    switch (profile.platform) {
      case 'GitHub':
        return <FaGithub className="w-8 h-8" />;
      case 'LeetCode':
        return <SiLeetcode className="w-8 h-8" />;
      case 'LinkedIn':
        return <FaLinkedin className="w-8 h-8" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="glass-card p-8 md:p-10 hover:shadow-glow-lg transition-all duration-300 animate-slideUp"
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-dark-text mb-2">{profile.platform}</h3>
          <p className="text-blue-400 font-mono text-sm">{profile.username}</p>
        </div>
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
          {getIcon()}
        </div>
      </div>

      {/* Description */}
      <p className="text-dark-text2 mb-8 leading-relaxed">{profile.description}</p>

      {/* Stats or Details */}
      <div className="py-6 border-y border-white/10 mb-6">
        <p className="text-sm text-dark-text2 mb-3 font-semibold">Platform Highlights:</p>
        <div className="space-y-2 text-sm text-dark-text2">
          {profile.platform === 'GitHub' && (
            <>
              <p>• Active open-source contributor</p>
              <p>• Clean, well-documented code</p>
              <p>• Multiple projects showcased</p>
            </>
          )}
          {profile.platform === 'LeetCode' && (
            <>
              <p>• 500+ problems solved</p>
              <p>• Strong algorithmic foundation</p>
              <p>• Consistent problem-solving</p>
            </>
          )}
          {profile.platform === 'LinkedIn' && (
            <>
              <p>• Professional network connection</p>
              <p>• Industry insights and updates</p>
              <p>• Career development focus</p>
            </>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <a
        href={profile.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-all group"
        aria-label={`Visit my ${profile.platform} profile`}
      >
        <span>Visit Profile</span>
        <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
    </div>
  );
};

export default function CodingProfiles() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-bg2/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Coding Profiles</span>
          </h2>
          <p className="text-dark-text2 text-lg max-w-2xl mx-auto">
            Connect with me on various platforms and explore my work
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {codingProfiles.map((profile, index) => (
            <ProfileCard key={profile.id} profile={profile} index={index} />
          ))}
        </div>

        {/* Connect Section */}
        <div className="glass-card p-8 md:p-12 animate-slideUp text-center">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Let's Connect</h3>
          <p className="text-dark-text2 mb-8 max-w-2xl mx-auto">
            I'm always happy to connect with fellow developers, discuss projects, or collaborate on interesting ideas. Feel free to reach out on any of these platforms or use the contact form below.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Get In Touch
          </a>
        </div>

        {/* Platform Benefits */}
        <div className="mt-16 animate-slideUp">
          <h3 className="text-2xl font-bold text-center mb-12">Why Follow Me On These Platforms?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <FaGithub className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-semibold text-dark-text mb-3">GitHub</h4>
              <p className="text-sm text-dark-text2">
                See my code quality, project organization, and contribution history across multiple projects
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <SiLeetcode className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="font-semibold text-dark-text mb-3">LeetCode</h4>
              <p className="text-sm text-dark-text2">
                Understand my problem-solving abilities and algorithmic knowledge through consistent practice
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <FaLinkedin className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="font-semibold text-dark-text mb-3">LinkedIn</h4>
              <p className="text-sm text-dark-text2">
                Stay updated with my professional journey, endorsements, and recommendations from colleagues
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
