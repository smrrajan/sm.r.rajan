import { certifications } from '../data/portfolioData';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const CertificationCard = ({ cert, index }) => {
  return (
    <div
      className="glass-card p-8 hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 animate-slideUp"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
        <FaCertificate className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-dark-text mb-2">{cert.title}</h3>
      <p className="text-blue-400 font-semibold text-sm mb-4">{cert.organization}</p>
      <p className="text-dark-text2 text-sm mb-6">Issued: {cert.date}</p>

      {/* CTA Button */}
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
        aria-label={`View certificate for ${cert.title}`}
      >
        <span>View Credential</span>
        <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default function Certifications() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-dark-text2 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* More Certifications Coming */}
        <div className="mt-16 text-center animate-slideUp">
          <p className="text-dark-text2 mb-6">
            I'm constantly pursuing new certifications to stay updated with the latest technologies and best practices.
          </p>
          <div className="inline-flex items-center gap-2 text-blue-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            More certifications coming soon
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 glass-card p-8 md:p-12 animate-slideUp">
          <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">
            Why Certifications Matter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Skill Validation',
                desc: 'Certifications validate my expertise and proficiency in specific technologies.',
              },
              {
                title: 'Industry Recognition',
                desc: 'Recognized by industry leaders and employers as proof of competency.',
              },
              {
                title: 'Continuous Learning',
                desc: 'Keeps me updated with the latest standards and best practices in tech.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
                </div>
                <h4 className="font-semibold text-dark-text mb-2">{item.title}</h4>
                <p className="text-sm text-dark-text2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
