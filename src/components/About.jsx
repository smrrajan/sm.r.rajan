import { useState, useEffect, useRef } from 'react';
import { stats } from '../data/portfolioData';

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(end * progress));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-bg2/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-dark-text2 text-lg max-w-2xl mx-auto">
            Learn more about my journey as a software developer
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Left - Text Content */}
          <div className="lg:col-span-2 animate-slideInLeft">
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
                Passionate Developer
              </h3>

              <div className="space-y-4 text-dark-text2 leading-relaxed">
                <p>
                  I'm a software developer with a strong passion for building clean, scalable, and user-friendly digital experiences. With expertise in both frontend and backend technologies, I create solutions that not only work well but also provide excellent user experiences.
                </p>

                <p>
                  My journey in tech has been driven by curiosity and a love for solving complex problems. I believe in writing clean, maintainable code and following industry best practices. Whether it's building responsive web applications, optimizing algorithms, or designing system architecture, I approach every project with dedication and precision.
                </p>

                <p>
                  Currently, I'm focused on deepening my expertise in modern web technologies like React and improving my problem-solving skills through competitive programming. I'm always eager to learn new technologies and take on challenging projects.
                </p>
              </div>

              {/* Key Areas */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold text-blue-400 mb-2">Career Goal</h4>
                  <p className="text-sm text-dark-text2">
                    Become a full-stack developer contributing to innovative projects
                  </p>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold text-purple-400 mb-2">Main Focus</h4>
                  <p className="text-sm text-dark-text2">
                    Web development, algorithms, and system design
                  </p>
                </div>
                <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <h4 className="font-semibold text-cyan-400 mb-2">Approach</h4>
                  <p className="text-sm text-dark-text2">
                    Clean code, continuous learning, and attention to detail
                  </p>
                </div>
                <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/30">
                  <h4 className="font-semibold text-pink-400 mb-2">Interest</h4>
                  <p className="text-sm text-dark-text2">
                    Building scalable applications and solving algorithmic challenges
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Statistics */}
          <div className="animate-slideInRight">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-dark-text2 text-sm font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Highlight */}
        <div className="animate-slideUp mt-16 glass-card p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">My Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Problem Solving', desc: 'Strong analytical and logical thinking abilities' },
              { title: 'Clean Code', desc: 'Writing readable, maintainable, and efficient code' },
              { title: 'Quick Learner', desc: 'Ability to quickly grasp new concepts and technologies' },
              { title: 'Collaboration', desc: 'Working effectively with teams and stakeholders' },
              { title: 'Attention to Detail', desc: 'Careful review and testing of all deliverables' },
              { title: 'Adaptability', desc: 'Flexible approach to different projects and challenges' },
            ].map((strength, index) => (
              <div key={index} className="p-4 bg-dark-bg3/50 rounded-lg hover:bg-blue-500/10 transition-colors">
                <h4 className="font-semibold text-dark-text mb-2">{strength.title}</h4>
                <p className="text-sm text-dark-text2">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
