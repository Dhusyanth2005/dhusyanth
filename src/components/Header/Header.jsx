// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Smooth scrolling for internal links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (href === '#' || href === '#0') return; // Skip empty anchors

      e.preventDefault();
      const targetId = href;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }

      // Close mobile menu after click
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, [menuOpen]); // Re-attach if menu state changes (safe)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span>&lt;/&gt;</span> Dhusyanth
        </Link>
        
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} className={styles.menuIcon} />
          ) : (
            <Menu size={24} className={styles.menuIcon} />
          )}
        </button>

        <nav 
          className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
          aria-hidden={!menuOpen}
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="#education" onClick={closeMenu}>Education</a>
            </li>
            <li className={styles.navItem}>
              <a href="#achievements" onClick={closeMenu}>Achievements</a>
            </li>
            <li className={styles.navItem}>
              <a href="#technologies" onClick={closeMenu}>Skills</a>
            </li>
            <li className={styles.navItem}>
              <a href="#coding" onClick={closeMenu}>Coding</a>
            </li>
            <li className={styles.navItem}>
              <a href="#projects" onClick={closeMenu}>Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;