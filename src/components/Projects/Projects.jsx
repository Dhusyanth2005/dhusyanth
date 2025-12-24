// src/components/Projects/Projects.jsx
import React, { useState } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('web');
  
  const filters = [
    // { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' }
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
      title: 'EduViz - Interactive 3D Learning Platform',
      description: 'Built an interactive 3D learning platform enabling real-time visualization of complex concepts in fields like engineering and medicine, with dynamic model rendering, smooth navigation, and subject-wise content management.',
      image: '/images/eduviz.png',
      category: 'web',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'GridFS','Google Model Viewer'],
      demoLink: 'https://eduviz.vercel.app/',
      repoLink: 'https://github.com/Dhusyanth2005/eduviz'
    },
    {
      id: 3,
      title: 'Social Media Application',
      description: 'A dynamic social media application that enables users to create, like, comment on, and delete posts. Seamlessly integrates Cloudinary for image storage and enhances user engagement with an interactive content-sharing experience.',
      image: '/images/socilamediaapp.png',
      category: 'web',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
      demoLink: 'https://social-media-app-we9p.onrender.com/',
      repoLink: 'https://github.com/Dhusyanth2005/social-media-app'
    },
    {
      id: 4,
      title: 'CampusLink – Centralized Student Utility Hub',
      description: 'A comprehensive full-stack web application streamlining campus services including announcements, lost & found management, timetable viewing, and hostel complaints system. Designed to centralize all student utility needs in one platform.',
      image: '/images/campuslink.png',
      category: 'web',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT Auth', 'Tailwind CSS'],
      demoLink: 'https://campuslink-sece.vercel.app/',
      repoLink: 'https://github.com/Dhusyanth2005/campuslink'
    },
    {
      id: 5,
      title: 'Abinexis E-commerce Website',
      description: 'Professional e-commerce website developed for a startup company, featuring modern design, product showcases, and responsive user interface. Built to establish strong online presence and enhance business credibility.',
      image: '/images/abinexis.png',
      category: 'web',
      techStack: ['React.js', 'Tailwind CSS', 'Node.js','Express.js','MongoDB','JWT Auth','REST API'],
      demoLink: 'https://abinexis.vercel.app/',
      repoLink: 'https://github.com/Dhusyanth2005/abinexis'
    },
   {
  id: 6,
  title: 'Wallet – Expense Tracker Mobile Application',
  description:
    'A full-stack expense tracker mobile application that enables users to securely manage income and expenses with real-time data synchronization. The app uses authenticated user accounts, server-side data storage, and API-driven workflows to provide category-wise analytics, monthly summaries, and reliable financial tracking. Built with a scalable backend architecture using PostgreSQL and Redis-based rate limiting to ensure performance, security, and consistency across devices.',
  image: '/images/wallet.png',
  category: 'mobile',
  techStack: [
    'React Native',
    'Expo',
    'JavaScript',
    'PostgreSQL (Neon)',
    'Upstash Redis',
    'Clerk Authentication',
    'REST APIs'
  ],
  demoLink: 'https://expo.dev/accounts/dhusyanth/projects/wallet/builds/015435c3-4e76-4818-83bf-5f0c5b972a65',
  repoLink: 'https://github.com/Dhusyanth2005/wallet-app'
},

{
  id: 7,
  title: 'CaloTrack – Smart Fitness Application',
  description:
    'An offline-first smart fitness and calorie tracking mobile application designed to help users build consistent workout habits without relying on constant internet connectivity. The app tracks daily workout time, maintains workout streaks, logs daily activity, and schedules smart workout reminders using local notifications. Users can record weekly body weight, and the system dynamically adjusts daily calorie targets based on weight changes and fitness progress. All core data is stored locally for instant access, with visual analytics to monitor long-term health trends, ensuring high performance and reliability even when offline.',
  image: '/images/calotrackdark.png',
  category: 'mobile',
  techStack: [
    'React Native',
    'Expo',
    'TypeScript',
    'sqlite',
    'Charts & Analytics'
  ],
  demoLink: 'https://expo.dev/accounts/dhusyanth/projects/CaloTrack/builds/85d196b7-2405-4732-ba61-acabb883da68',
  repoLink: 'https://github.com/Dhusyanth2005/CaloTrack'
},


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