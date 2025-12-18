// src/components/Achievements/Achievements.jsx
import React, { useState } from 'react';
import { 
  Trophy, Award, FileText, Palette, Code, Database, 
  Target, Star, ExternalLink, X, ChevronLeft, ChevronRight 
} from 'lucide-react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('achievements');
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For carousel

  const filters = [
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' }
  ];
  
  const items = [
    // Achievements (unchanged)...
    {
      id: 1,
      title: 'ZERODAY 24-Hour Startup Hackathon Winner',
      description: 'Secured 1st Place among top finalist teams for developing CampusLink...',
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
      description: 'Won the Mini Project Expo at Sri Eshwar College of Engineering...',
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
      description: 'Secured 1st place with cash prize of ₹2000...',
      institution: 'Sri Ramakrishna Institute of Technology',
      year: '2025',
      category: 'achievements',
      type: 'Competition',
      prize: '₹2000 Cash Prize',
      icon: 'award'
    },
    // Other certifications (single image)
    {
      id: 4,
      title: 'Learn Java Programming: Beginner to Master',
      description: 'Comprehensive Java programming course...',
      institution: 'Udemy',
      year: '2024',
      category: 'certifications',
      type: 'Course Completion',
      credentialId: 'UDEMY-JAVA-2024',
      icon: 'certificate',
      certificateUrl: 'https://res.cloudinary.com/duwvhcha4/image/upload/v1765909845/java-udemy_jnojfe.jpg' // Replace
    },
    {
      id: 5,
      title: 'Complete Web and Mobile Designer: Figma',
      description: 'Mastered UI/UX design principles...',
      institution: 'Udemy',
      year: '2024',
      category: 'certifications',
      type: 'Design Certification',
      credentialId: 'UDEMY-FIGMA-2024',
      icon: 'design',
      certificateUrl: 'https://res.cloudinary.com/duwvhcha4/image/upload/v1765909844/figma-udemy_qmbzrt.jpg' // Replace
    },
 // NEW: Full Stack Web Development Certification
    {
      id: 8,
      title: 'Complete Full Stack Web Development',
      description: 'Learned to build full-stack web applications covered all basics to advanced topics...',
      institution: 'Udemy',
      year: '2025',
      category: 'certifications',
      type: 'Full Stack Certification',
      credentialId: 'UDEMY-FULLSTACK-2024',
      icon: 'design',
      certificateUrl: 'https://res.cloudinary.com/duwvhcha4/image/upload/v1765909845/full-stack-udemy_ree7di.jpg' 
    },
    {
      id: 6,
      title: 'Python Programming',
      description: 'Completed comprehensive Python programming course...',
      institution: 'GUVI',
      year: '2023',
      category: 'certifications',
      type: 'Programming',
      credentialId: 'GUVI-PYTHON-2023',
      icon: 'code',
      certificateUrl: 'https://res.cloudinary.com/duwvhcha4/image/upload/v1765909844/python-guvi_qbgk15.jpg' // Replace
    },
    // SQL with multiple certificates (unchanged)
    {
      id: 7,
      title: 'SQL (Basic & Intermediate)',
      description: 'Achieved proficiency in SQL database management, query optimization, and advanced database operations.',
      institution: 'HackerRank',
      year: '2024',
      category: 'certifications',
      type: 'Database Certification',
      credentialId: 'HR-SQL-2024',
      icon: 'database',
      certificateUrls: [
        'https://res.cloudinary.com/duwvhcha4/image/upload/v1765910115/sql-basic_ofvknq.png', // Basic
        'https://res.cloudinary.com/duwvhcha4/image/upload/v1765910115/sql-intermediate_uaf10o.png' // Intermediate
      ],
      certificateLabels: ['Basic Certificate', 'Intermediate Certificate']
    }
  ];
  
  const filteredItems = items.filter(item => item.category === activeFilter);

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

  const openModal = (item) => {
    if (item.certificateUrl || item.certificateUrls) {
      setSelectedCert(item);
      setCurrentImageIndex(0);
    }
  };

  const closeModal = () => {
    setSelectedCert(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCert?.certificateUrls) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedCert.certificateUrls.length);
    }
  };

  const prevImage = () => {
    if (selectedCert?.certificateUrls) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedCert.certificateUrls.length) % selectedCert.certificateUrls.length);
    }
  };

  const currentUrl = selectedCert?.certificateUrls 
    ? selectedCert.certificateUrls[currentImageIndex]
    : selectedCert?.certificateUrl;

  const currentLabel = selectedCert?.certificateLabels 
    ? selectedCert.certificateLabels[currentImageIndex]
    : null;

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
            <div 
              key={item.id} 
              className={styles.itemCard}
              onClick={() => openModal(item)}
            >
              {/* ... existing card content (header, content, overlay) ... */}
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
                
                {(item.prize || item.credentialId) && (
                  <div className={styles.itemDetails}>
                    {item.prize && <span className={styles.itemPrize}>🏆 {item.prize}</span>}
                    {item.credentialId && <span className={styles.itemCredential}>📋 {item.credentialId}</span>}
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

                  {(item.certificateUrl || item.certificateUrls) && (
                    <div className={styles.viewCertificate}>
                      <ExternalLink size={20} />
                      <span>View Certificate{item.certificateUrls ? 's' : ''}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated Modal with Carousel */}
      {selectedCert && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              <X size={28} />
            </button>
            <div className={styles.modalHeader}>
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.institution} • {selectedCert.year}</p>
              {currentLabel && <p className={styles.currentCertLabel}>{currentLabel}</p>}
            </div>
            <div className={styles.modalImageContainer}>
              {selectedCert.certificateUrls && selectedCert.certificateUrls.length > 1 && (
                <>
                  <button className={styles.carouselPrev} onClick={prevImage}>
                    <ChevronLeft size={36} />
                  </button>
                  <button className={styles.carouselNext} onClick={nextImage}>
                    <ChevronRight size={36} />
                  </button>
                </>
              )}
              <img 
                src={currentUrl} 
                alt={`Certificate - ${selectedCert.title}`}
                className={styles.modalImage}
              />
              {selectedCert.certificateUrls && selectedCert.certificateUrls.length > 1 && (
                <div className={styles.carouselDots}>
                  {selectedCert.certificateUrls.map((_, index) => (
                    <span
                      key={index}
                      className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;