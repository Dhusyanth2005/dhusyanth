import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';
import styles from './EducationExperience.module.css';

const EducationExperience = () => {
  const experienceData = [
    {
      id: 1,
      title: 'MERN Stack Internship',
      company: 'Better Tomorrow',
      location: 'Remote',
      period: 'Jan 2024',
      type: 'Internship',
      description: 'Completed a hands-on internship in full-stack development using MongoDB, Express.js, React, and Node.js. Built a dynamic social media application that enables users to create, like, comment on, and delete posts. Integrated Cloudinary for image storage and implemented user authentication, enhancing user engagement with an interactive content-sharing experience.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      certificate: true
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: 'B.Tech (Information Technology)',
      institution: 'Sri Eshwar College of Engineering',
      period: '2023-2027',
      grade: '7.88 CGPA',
      status: 'Current',
      description: 'Pursuing a Bachelor of Technology in Information Technology, specializing in full-stack development, advanced data structures, algorithms, and cutting-edge web technologies.'
    },
    {
      id: 2,
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Government Higher Secondary School',
      period: '2022-2023',
      grade: '88.3%',
      status: 'Completed',
      description: 'Achieved distinction in Higher Secondary Education, excelling in Mathematics, Physics, Chemistry, and Biology, demonstrating strong analytical and scientific proficiency.'
    },
    {
      id: 3,
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: 'Government Higher Secondary School',
      period: '2020-2021',
      grade: 'Pass',
      status: 'Completed',
      description: 'Completed secondary education with strong foundation in core subjects.'
    }
];

  return (
    <section id="education" className={styles.educationExperience}>
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className={styles.timelineContainer}>
          {/* Professional Experience Section */}
          <div className={styles.timelineSection}>
            <div className={styles.sectionHeader}>
              <Briefcase size={24} />
              <h3>Professional Experience</h3>
            </div>
            
            <div className={styles.timeline}>
              {experienceData.map((item, index) => (
                <div key={item.id} className={`${styles.timelineItem} ${styles.experienceItem}`}>
                  <div className={styles.timelineMarker}>
                    <div className={styles.markerDot}></div>
                    {index < experienceData.length - 1 && <div className={styles.markerLine}></div>}
                  </div>
                  
                  <div className={styles.timelineContent}>
                    <div className={styles.contentHeader}>
                      <div className={styles.titleSection}>
                        <h4 className={styles.itemTitle}>{item.title}</h4>
                        <p className={styles.itemCompany}>{item.company}</p>
                      </div>
                      
                      {item.certificate && (
                        <button className={styles.certificateBtn}>
                          <Award size={16} />
                          View Certificate
                        </button>
                      )}
                    </div>
                    
                    <div className={styles.itemMeta}>
                      <span className={styles.itemPeriod}>
                        <Calendar size={14} />
                        {item.period}
                      </span>
                      <span className={styles.itemLocation}>
                        <MapPin size={14} />
                        {item.location}
                      </span>
                    </div>
                    
                    <p className={styles.itemDescription}>{item.description}</p>
                    
                    {item.technologies && (
                      <div className={styles.technologies}>
                        {item.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className={styles.timelineSection}>
            <div className={styles.sectionHeader}>
              <GraduationCap size={24} />
              <h3>Education</h3>
            </div>
            
            <div className={styles.timeline}>
              {educationData.map((item, index) => (
                <div key={item.id} className={`${styles.timelineItem} ${styles.educationItem}`}>
                  <div className={styles.timelineMarker}>
                    <div className={styles.markerDot}></div>
                    {index < educationData.length - 1 && <div className={styles.markerLine}></div>}
                  </div>
                  
                  <div className={styles.timelineContent}>
                    <div className={styles.contentHeader}>
                      <div className={styles.titleSection}>
                        <h4 className={styles.itemTitle}>{item.degree}</h4>
                        <p className={styles.itemInstitution}>{item.institution}</p>
                      </div>
                      
                      <div className={styles.gradeBadge}>
                        {item.grade}
                      </div>
                    </div>
                    
                    <div className={styles.itemMeta}>
                      <span className={styles.itemPeriod}>
                        <Calendar size={14} />
                        {item.period}
                      </span>
                      <span className={`${styles.statusBadge} ${styles[item.status.toLowerCase()]}`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;