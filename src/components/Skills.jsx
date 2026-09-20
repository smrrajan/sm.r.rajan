import { skills } from '../data/portfolioData';
import { FaCode, FaGlobe, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const SkillCategory = ({ title, items, icon: Icon }) => {
  return (
    <div className="glass-card p-8">
      <div className="flex items-center gap-3 mb-6">
        {Icon && <Icon className="w-6 h-6 text-blue-400" />}
        <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
      </div>

      <div className="space-y-6">
        {items.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-dark-text">{skill.name}</span>
              <span className="text-sm text-blue-400 font-semibold">{skill.level}%</span>
            </div>
            <p className="text-xs text-dark-text2 mb-3">{skill.description}</p>
            <div className="w-full bg-dark-bg2 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '0%' }}
                onLoad={(e) => e.target.style.width = `${skill.level}%`}
              />
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: '0%',
                  animation: 'countUp 1s ease-out forwards',
                  animationDelay: `${index * 0.1}s`,
                }}
                ref={(el) => {
                  if (el) el.style.width = `${skill.level}%`;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-dark-text2 text-lg max-w-2xl mx-auto">
            Technologies and tools I've mastered over my development journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Programming Languages */}
          <div className="animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
            <SkillCategory
              title="Programming"
              items={skills.programming}
              icon={FaCode}
            />
          </div>

          {/* Web Development */}
          <div className="animate-slideInRight" style={{ animationDelay: '0.2s' }}>
            <SkillCategory
              title="Web Development"
              items={skills.webDevelopment}
              icon={FaGlobe}
            />
          </div>

          {/* Database */}
          <div className="animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
            <SkillCategory
              title="Database"
              items={skills.database}
              icon={FaDatabase}
            />
          </div>

          {/* Tools */}
          <div className="animate-slideInRight" style={{ animationDelay: '0.4s' }}>
            <SkillCategory
              title="Tools & Frameworks"
              items={skills.tools}
              icon={FaTools}
            />
          </div>
        </div>

        {/* Core Concepts */}
        <div className="animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <div className="glass-card p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <FaBrain className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-purple-400">Core Concepts & Fundamentals</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.concepts.map((concept, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-dark-text text-lg group-hover:text-blue-400 transition-colors">
                      {concept.name}
                    </h4>
                    <span className="text-sm font-semibold text-purple-400">{concept.level}%</span>
                  </div>
                  <p className="text-sm text-dark-text2 mb-4">{concept.description}</p>
                  <div className="w-full bg-dark-bg2 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: '0%',
                        animation: 'countUp 1.2s ease-out forwards',
                        animationDelay: `${0.5 + index * 0.1}s`,
                      }}
                      ref={(el) => {
                        if (el) el.style.width = `${concept.level}%`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Info */}
        <div className="mt-12 text-center animate-slideUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-dark-text2 max-w-2xl mx-auto">
            I'm constantly learning and improving my skills. These percentages represent my current proficiency level based on real project experience. I'm always eager to explore new technologies and expand my expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
