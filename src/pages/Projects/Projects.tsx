import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import DotGrid from '../../components/React Bits/DotGrid/DotGrid';
import ScrollReveal from '../../components/React Bits/ScrollReveal/ScrollReveal';
import SplitText from '../../components/React Bits/SplitText/SplitText';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink: string;
  
}

const projectsData: Project[] = [
    {
    id: 3,
    title: 'Royal Mindfulness',
    subtitle: 'Mindfulness Platform',
    description: 'A platform built for yoga, mental fitness, and mental wellness. It connects users with certified mindfulness coaches.',
    technologies: ['React', 'TypeScript', 'MUI', 'Nodejs', 'MongoDB', 'Vercel', 'AWS', 'EC2', 'Git'],
    image: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoLink: 'https://royalmindfulness.com/',
  },
  {
    id: 1,
    title: 'My Bridge',
    subtitle: 'Social Media Platform',
    description: 'A Twitter-like platform with skill endorsements, work history, feeds and profiles, built using modern JavaScript frameworks.',
    technologies: ['Nextjs', 'ChakraUI','Vercel','Git'],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop',
    demoLink: 'https://mybridge.me',
  },
  {
    id: 2,
    title: 'VMIA',
    subtitle: 'Insurance Platform',
    description: 'VMIA is the Victorian Government\'s insurer and risk adviser. Covering the people, places and projects that help Victorians thrive.',
    technologies: ['TypeScript', 'Vuejs', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    demoLink: 'https://www.vmia.vic.gov.au/',
  },

  {
    id: 4,
    title: 'IdeaM Solutions',
    subtitle: 'IT Solutions',
    description: 'A modern, responsive portfolio website built with React and TypeScript to showcase a range of IT solutions and services offered by IdeaM.',
    technologies: ['React', 'TypeScript', 'Vite', 'SCSS','Vercel',],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    demoLink: 'https://ideamai.netlify.app/',
  },
];

// Additional projects for modal
const allProjects: Project[] = [
  ...projectsData,
   {
    id: 5,
    title: 'Raseed Investment',
    subtitle: 'Investment Platform',
    description: 'A comprehensive investment platform for managing finances, investments, and tracking progress towards financial goals.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Nextjs', 'Git', "AWS", "PM2", "EC2" ],
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop',
    demoLink: 'https://raseedinvest.com/en',
  },
  {

    id: 6,
    title: 'Jayojay Associates',
    subtitle: 'Construction Company',
    description: 'A comprehensive website for a construction company with services, portfolio, and contact information. Built using React and MUI.',
    technologies: ['React', 'Redux', 'MUI', 'Git', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
    demoLink: 'https://jayojayassociates.com',
  },
  // {
  //   id: 7,
  //   title: 'La French Perfume',
  //   subtitle: 'E-commerce',
  //   description: 'A comprehensive e-commerce platform for selling high-end French perfumes with a user-friendly interface and seamless checkout process.',
  //   technologies: [ 'Shopify', ],
  //   image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop',
  //   demoLink: 'https://lafrenchperfumes.com/',
  // },
  {
    id: 7,
    title: 'Shreeji RealEstate',
    subtitle: 'Real Estate',
    description: 'A comprehensive RealEstate platform for showcasing high-end real estate properties with a user-friendly interface and seamless information.',
    technologies: [ 'Reactjs', 'TypeScript', 'React-Bits', 'Vite', 'SCSS', 'Vercel' ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    demoLink: 'https://shreeji-smoky.vercel.app',
  },
 

];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      
      {/* DotGrid Background */}
      <div className="projects-bg">
        <DotGrid
          dotSize={3}
          gap={70}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={70}
          shockRadius={300}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      
      <div className="container">
        <ScrollReveal>
          <SplitText
            text="Featured Projects"
            className="section-title"
            tag="h2"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-50px"
            textAlign="center"
          />
          <p className="section-subtitle">
            Some of my recent work that I'm proud of
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="projects-box">
            <div className="projects-list">
            {projectsData.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-image-wrapper">
                  <div className="project-image-box">
                    <img 
                      src={`${project.image}&q=75&auto=format&compress`}
                      alt={project.title} 
                      className="project-image" 
                      loading="lazy"
                      width="600"
                      height="400"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-item-title">{project.title}</h3>
                  <p className="project-item-subtitle">{project.subtitle}</p>
                  <p className="project-item-description">{project.description}</p>
                  <div className="project-item-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-item-links">
                    <a
                      href={project.demoLink}
                      className="project-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </ScrollReveal>

        {/* View All Projects Button */}
        <ScrollReveal>
        <div className="view-all-container">
          <button 
            className="view-all-btn"
            onClick={() => setIsModalOpen(true)}
          >
            View All Projects
          </button>
        </div>
        </ScrollReveal>
      </div>

      {/* Projects Modal - Rendered via Portal */}
      {isModalOpen && createPortal(
        <div className="projects-modal-overlay">
          <div className="projects-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>All Projects</h2>
              <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-projects-grid">
                {allProjects.map((project) => (
                  <div key={project.id} className="modal-project-card">
                    <div className="modal-project-image">
                      <img 
                        src={`${project.image}&q=75&auto=format&compress`}
                        alt={project.title} 
                        loading="lazy"
                        width="600"
                        height="400"
                        decoding="async"
                      />
                    </div>
                    <div className="modal-project-info">
                      <h3>{project.title}</h3>
                      <p className="modal-project-subtitle">{project.subtitle}</p>
                      <p className="modal-project-description">{project.description}</p>
                      <div className="modal-project-tech">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="modal-tech-tag">{tech}</span>
                        ))}
                      </div>
                      <a 
                        href={project.demoLink} 
                        className="modal-preview-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Preview
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
