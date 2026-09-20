import { education } from '../data/portfolioData';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

const EducationCard = ({ edu, isLast, index }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-1 h-16 bg-gradient-to-b from-purple-500 to-transparent" />
      )}

      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
          <FaGraduationCap className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="ml-32 glass-card p-8 hover:shadow-glow-lg transition-all duration-300 animate-slideUp">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">{edu.degree}</h3>
            <p className="text-dark-text font-semibold text-lg">{edu.institution}</p>
            <p className="text-dark-text2 text-sm mt-1">{edu.field}</p>
          </div>
          <span className="text-sm text-dark-text2 font-semibold mt-2 md:mt-0 whitespace-nowrap">
            {edu.year}
          </span>
        </div>

        {/* Achievements */}
        {edu.achievements && edu.achievements.length > 0 && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <h4 className="font-semibold text-dark-text mb-4 flex items-center gap-2">
              <FaAward className="text-yellow-400" />
              Achievements
            </h4>
            <ul className="space-y-2">
              {edu.achievements.map((achievement, idx) => (
                <li key={idx} className="flex gap-3 text-dark-text2">
                  <span className="text-purple-400 font-bold">✓</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-bg2/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-dark-text2 text-lg max-w-2xl mx-auto">
            My academic journey and learning milestones
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 relative animate-slideInLeft">
          {/* Vertical line on left */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent hidden md:block" />

          {education.map((edu, index) => (
            <EducationCard
              key={edu.id}
              edu={edu}
              isLast={index === education.length - 1}
              index={index}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slideUp">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">8.5/10</div>
            <p className="text-dark-text2 text-sm">Current CGPA</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">2</div>
            <p className="text-dark-text2 text-sm">Dean's List</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">Active</div>
            <p className="text-dark-text2 text-sm">Technical Clubs</p>
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="mt-16 glass-card p-8 md:p-10 animate-slideUp">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Continuous Learning</h3>
          <p className="text-dark-text2 mb-6">
            Beyond formal education, I'm committed to continuous learning through:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Online courses and certifications',
              'Technical blog reading and research',
              'Competitive programming',
              'Open-source contributions',
              'Attending webinars and tech talks',
              'Building personal projects',
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span className="text-dark-text2">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
