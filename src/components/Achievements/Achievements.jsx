// src/components/Achievements/Achievements.jsx
import React, { useState } from 'react';
import { Trophy, Award, FileText, Palette, Code, Database, Target, Star } from 'lucide-react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Items' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' }
  ];
  
  const items = [
    {
      id: 1,
      title: 'ZERODAY 24-Hour Startup Hackathon Winner',
      description: 'Secured 1st Place among top finalist teams for developing CampusLink - Centralized Student Utility Hub, a full-stack web application streamlining campus services such as announcements, lost & found, timetables, and hostel complaints. Cash Prize: ₹3,000',
      institution: 'Sri Eshwar College of Engineering',
      year: '2025',
      category: 'achievements',
      type: 'Hackathon',
      prize: '₹3,000 Cash Prize',
      icon: 'trophy'
    },
    {
      id: 2,
      title: 'Mini Project Expo 2K25 Winner',
      description: 'Won the Mini Project Expo at Sri Eshwar College of Engineering, showcasing innovative project development and presentation skills.',
      institution: 'Sri Eshwar College of Engineering',
      year: '2025',
      category: 'achievements',
      type: 'Competition',
      prize: 'Winner',
      icon: 'trophy'
    },
    {
      id: 3,
      title: 'Project Expo 1st Place',
      description: 'Secured 1st place with cash prize of ₹2000 at the Project Expo held at Sri Ramakrishna Institute of Technology.',
      institution: 'Sri Ramakrishna Institute of Technology',
      year: '2025',
      category: 'achievements',
      type: 'Competition',
      prize: '₹2000 Cash Prize',
      icon: 'award'
    },
    {
      id: 4,
      title: 'Learn Java Programming: Beginner to Master',
      description: 'Comprehensive Java programming course covering fundamentals to advanced concepts including OOP, data structures, and application development.',
      institution: 'Udemy',
      year: '2024',
      category: 'certifications',
      type: 'Course Completion',
      credentialId: 'UDEMY-JAVA-2024',
      icon: 'certificate'
    },
    {
      id: 5,
      title: 'Complete Web and Mobile Designer: Figma',
      description: 'Mastered UI/UX design principles and Figma tools for creating responsive web and mobile interfaces with modern design practices.',
      institution: 'Udemy',
      year: '2024',
      category: 'certifications',
      type: 'Design Certification',
      credentialId: 'UDEMY-FIGMA-2024',
      icon: 'design'
    },
    {
      id: 6,
      title: 'Python Programming',
      description: 'Completed comprehensive Python programming course covering syntax, data structures, algorithms, and practical applications.',
      institution: 'GUVI',
      year: '2023',
      category: 'certifications',
      type: 'Programming',
      credentialId: 'GUVI-PYTHON-2023',
      icon: 'code'
    },
    {
      id: 7,
      title: 'SQL (Basic & Intermediate)',
      description: 'Achieved proficiency in SQL database management, query optimization, and advanced database operations.',
      institution: 'HackerRank',
      year: '2024',
      category: 'certifications',
      type: 'Database Certification',
      credentialId: 'HR-SQL-2024',
      icon: 'database'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  const getIcon = (iconType) => {
    const icons = {
      trophy: <Trophy size={24} />,
      award: <Award size={24} />,
      certificate: <FileText size={24} />,
      design: <Palette size={24} />,
      code: <Code size={24} />,
      database: <Database size={24} />,
      'code-challenge': <Target size={24} />,
      star: <Star size={24} />
    };
    return icons[iconType] || icons.certificate;
  };

  return (
    <section id="achievements" className={styles.achievements}>
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>
        
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
        
        <div className={styles.itemsGrid}>
          {filteredItems.map(item => (
            <div key={item.id} className={styles.itemCard}>
              <div className={styles.itemHeader}>
                <div className={styles.itemIcon}>
                  {getIcon(item.icon)}
                </div>
                <div className={styles.itemMeta}>
                  <span className={styles.itemType}>{item.type}</span>
                  <span className={styles.itemYear}>{item.year}</span>
                </div>
              </div>
              
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
                <p className={styles.itemInstitution}>{item.institution}</p>
                
                {(item.prize || item.rating || item.credentialId) && (
                  <div className={styles.itemDetails}>
                    {item.prize && (
                      <span className={styles.itemPrize}>🏆 {item.prize}</span>
                    )}
                    {item.rating && (
                      <span className={styles.itemRating}>⭐ {item.rating}</span>
                    )}
                    {item.credentialId && (
                      <span className={styles.itemCredential}>📋 {item.credentialId}</span>
                    )}
                  </div>
                )}
              </div>
              
              <div className={styles.itemOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.overlayIcon}>
                    {getIcon(item.icon)}
                  </div>
                  <h4 className={styles.overlayTitle}>{item.title}</h4>
                  <p className={styles.overlayInstitution}>{item.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;