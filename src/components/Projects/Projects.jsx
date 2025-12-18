// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('web');
  
  const filters = [
    // { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' }
    // { id: 'mobile', label: 'Mobile Apps' }
    // { id: 'api', label: 'API & Backend' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'FolioStack - Online Portfolio Builder',
      description: 'A dynamic portfolio-building platform where users can create and customize personal portfolios using pre-designed templates and themes. Enables users to select from multiple responsive themes and personalize content without needing to write code.',
      image: '/images/foliostack.png',
      category: 'web',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      demoLink: 'https://foliostack.vercel.app/',
      repoLink: 'https://github.com/Dhusyanth2005/foliostack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Comprehensive mobile application for managing daily tasks and projects with features like task categorization, priority levels, due date reminders, progress tracking, and offline functionality with cloud synchronization.',
      image: '/images/task-management.jpg',
      category: 'mobile',
      techStack: ['React Native', 'AsyncStorage', 'React Navigation', 'Expo'],
      demoLink: 'https://expo.dev/@dhusyanth/task-manager',
      repoLink: 'https://github.com/Dhusyanth2005/task-management-app'
    },
    {
      id: 3,
      title: 'EduViz - Interactive 3D Learning Platform',
      description: 'Built an interactive 3D learning platform enabling real-time visualization of complex concepts in fields like engineering and medicine, with dynamic model rendering, smooth navigation, and subject-wise content management.',
      image: '/images/eduviz.png',
      category: 'web',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'GridFS','Google Model Viewer'],
      demoLink: 'https://eduviz.vercel.app/',
      repoLink: 'https://github.com/Dhusyanth2005/eduviz'
    },
    {
      id: 4,
      title: 'Social Media Application',
      description: 'A dynamic social media application that enables users to create, like, comment on, and delete posts. Seamlessly integrates Cloudinary for image storage and enhances user engagement with an interactive content-sharing experience.',
      image: '/images/socilamediaapp.png',
      category: 'web',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
      demoLink: 'https://social-media-app-we9p.onrender.com/',
      repoLink: 'https://github.com/Dhusyanth2005/social-media-app'
    },
    {
      id: 5,
      title: 'CampusLink – Centralized Student Utility Hub',
      description: 'A comprehensive full-stack web application streamlining campus services including announcements, lost & found management, timetable viewing, and hostel complaints system. Designed to centralize all student utility needs in one platform.',
      image: '/images/campuslink.png',
      category: 'web',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT Auth', 'Tailwind CSS'],
      demoLink: 'https://campuslink-sece.vercel.app/',
      repoLink: 'https://github.com/Dhusyanth2005/campuslink'
    },
    {
      id: 6,
      title: 'Abinexis E-commerce Website',
      description: 'Professional e-commerce website developed for a startup company, featuring modern design, product showcases, and responsive user interface. Built to establish strong online presence and enhance business credibility.',
      image: '/images/abinexis.png',
      category: 'web',
      techStack: ['React.js', 'Tailwind CSS', 'Node.js','Express.js','MongoDB','JWT Auth','REST API'],
      demoLink: 'https://abinexis.vercel.app/',
      repoLink: 'https://github.com/Dhusyanth2005/abinexis'
    },
    {
      id: 7,
      title: 'Expense Tracker Mobile App',
      description: 'Personal finance management mobile application to track income, expenses, and budgets with category-wise analysis, monthly reports, and data visualization. Features local storage and export functionality.',
      image: '/images/expense-tracker.jpg',
      category: 'mobile',
      techStack: ['React Native', 'AsyncStorage', 'React Native Charts', 'Expo'],
      demoLink: 'https://expo.dev/@dhusyanth/expense-tracker',
      repoLink: 'https://github.com/Dhusyanth2005/expense-tracker-app'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className={styles.filterContainer}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    <a href={project.demoLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>{project.category === 'mobile' ? 'Try on Expo' : 'Live Demo'}</span>
                    </a>
                    <a href={project.repoLink} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.techStackList}>
                  {project.techStack.map((tech, index) => (
                    <span key={index} className={styles.techStackItem}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;