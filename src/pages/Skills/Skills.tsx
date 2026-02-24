import { useRef } from 'react';
import CosmicBackground from '../../components/CosmicBackground/CosmicBackground';
import ScrollReveal from '../../components/React Bits/ScrollReveal/ScrollReveal';
import './Skills.css';

interface Skill {
  name: string;
  icon: string;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
}

const experienceData: Experience[] = [
  {
    id: 1,
    company: 'Zenqua Technologies',
    role: 'Frontend Developer',
    duration: '1 year 11 months',
    startDate: 'Mar 2024',
    endDate: 'Jan 2026',
    description: 'Built scalable MERN Stack applications with Typescript and Nodejs, implemented responsive UI components, and collaborated with cross-functional teams.',
  },
  // {
  //   id: 3,
  //   company: 'Bynebits Technologies',
  //   role: 'Frontend Developer',
  //   duration: '8 months',
  //   startDate: 'Aug 2023',
  //   endDate: 'Mar 2024',
  //   description: 'Developed dynamic web applications, optimized performance, and maintained code quality through best practices.',

  // },
  {
    id: 2,
    company: 'Areteans Technologies',
    role: 'Frontend Developer',
    duration: '9 months',
    startDate: 'Jan 2022',
    endDate: 'Sept 2022',
   description: 'Developed dynamic web applications, optimized performance, and maintained code quality through best practices.',
  },
  {
    id: 3,
    company: 'Bynebits Technologies',
    role: 'Jr Frontend Developer',
    duration: '8 months',
    startDate: 'May 2021',
    endDate: 'Jan 2022',
    description: 'Started professional journey building user interfaces, learning React ecosystem, and contributing to team projects.',

  },
  
];

const primarySkills: Skill[] = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'JavaScript', icon: '�' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Next.js', icon: '⏭️' },
  { name: 'TypeScript', icon: '�' },
  { name: 'HTML / CSS', icon: '🎨' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Chakra UI', icon: '⚡' },
  { name: 'RTK Toolkit', icon: '🧰' },
  { name: 'MUI', icon: '�' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📦' },
  { name: 'Vercel', icon: '▲' },
  { name: 'System Design', icon: '🧱' },
  { name: 'SDLC', icon: '�' },
  { name: 'Agile Methodology', icon: '🔄' },
];


const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <CosmicBackground />
  
      <div className="container">
        {/* Work Experience Section */}
        <ScrollReveal>
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey 
          </p>
        </ScrollReveal>

        {/* Work Experience Cards */}
        <ScrollReveal>
          <div className="experience-container">
            {experienceData.map((exp) => (
              <div key={exp.id} className="experience-card">
                <div className="experience-content">
                  <span className="experience-duration">{exp.duration}</span>
                  <h3 className="experience-company">{exp.company}</h3>
                  <p className="experience-role">{exp.role}</p>
                  <p className="experience-dates">{exp.startDate} — {exp.endDate}</p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal>
          <h2 className="section-title skills-title">
            My <span className="highlight">Skills</span>
          </h2>
          <p className="section-subtitle skills-subtitle">
            The skills, tools and technologies I am really good at
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="skills-box">
            <div className="skills-grid">
              {primarySkills.map((skill) => (
                <button key={skill.name} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Skills;
