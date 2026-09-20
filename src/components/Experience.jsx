import { experience } from '../data/portfolioData';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceCard = ({ exp, isLast }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
          <FaBriefcase className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="ml-32 glass-card p-8 hover:shadow-glow-lg transition-all duration-300 animate-slideUp">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.position}</h3>
            <p className="text-dark-text font-semibold text-lg">{exp.company}</p>
          </div>
          <span className="text-sm text-dark-text2 font-semibold mt-2 md:mt-0 whitespace-nowrap">
            {exp.duration}
          </span>
        </div>

        <p className="text-dark-text2 mb-6">{exp.description}</p>

        <div className="space-y-3">
          <h4 className="font-semibold text-dark-text">Key Responsibilities:</h4>
          <ul className="space-y-2">
            {exp.responsibilities.map((resp, index) => (
              <li key={index} className="flex gap-3 text-dark-text2">
                <span className="text-blue-400 font-bold mt-1">→</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-dark-text2 text-lg max-w-2xl mx-auto">
            My journey through various roles and responsibilities
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 relative animate-slideInLeft">
          {/* Vertical line on left */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} isLast={index === experience.length - 1} />
          ))}
        </div>

        {/* Info */}
        <div className="mt-16 p-8 glass-card animate-slideUp">
          <h3 className="text-xl font-bold text-blue-400 mb-4">Open to Opportunities</h3>
          <p className="text-dark-text2">
            I'm actively looking for new opportunities to grow and contribute to innovative projects. If you'd like to discuss potential collaborations or have any interesting opportunities, feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}
