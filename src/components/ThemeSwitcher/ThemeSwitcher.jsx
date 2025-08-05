// src/components/ThemeSwitcher/ThemeSwitcher.jsx
import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const themes = [
    { name: 'dark', label: 'Dark', class: '' },
    { name: 'cyberpunk', label: 'Cyberpunk', class: 'theme-cyberpunk' },
    { name: 'gradient', label: 'Gradient', class: 'theme-gradient' },
    { name: 'forest', label: 'Forest', class: 'theme-forest' }
  ];

  const [activeTheme, setActiveTheme] = useState('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName) => {
    // Find the theme by name
    const theme = themes.find(t => t.name === themeName);
    if (!theme) return;

    // Remove all theme classes from document body
    themes.forEach(t => {
      if (t.class) document.body.classList.remove(t.class);
    });

    // Add the new theme class if it exists
    if (theme.class) {
      document.body.classList.add(theme.class);
    }

    // Save to state and localStorage
    setActiveTheme(themeName);
    localStorage.setItem('portfolio-theme', themeName);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleThemeChange = (themeName) => {
    applyTheme(themeName);
    closeDropdown();
  };

  // Get the current theme object
  const currentTheme = themes.find(t => t.name === activeTheme);

  return (
    <div className={styles.themeSwitcher}>
      <button 
        className={styles.themeSwitcherButton} 
        onClick={toggleDropdown}
        aria-label="Change theme"
      >
        <span className={styles.colorCircle} style={{ 
          '--primary': `var(--color-accent)`,
          '--secondary': `var(--color-accent-alt)`
        }}></span>
        <span className={styles.currentTheme}>{currentTheme?.label}</span>
        <svg className={styles.dropdownIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={closeDropdown}></div>
          <ul className={styles.themeDropdown}>
            {themes.map((theme) => (
              <li key={theme.name}>
                <button
                  className={
                    theme.name === activeTheme 
                      ? `${styles.themeOption} ${styles.active}` 
                      : styles.themeOption
                  }
                  onClick={() => handleThemeChange(theme.name)}
                >
                  <span className={styles.themeColorPreview} style={{
                    '--primary': theme.name === 'dark' ? '#ffcc00' : 
                              theme.name === 'cyberpunk' ? '#ff2a6d' :
                              theme.name === 'gradient' ? '#8e2de2' : '#7fff00',
                    '--secondary': theme.name === 'dark' ? '#73c2fb' : 
                                theme.name === 'cyberpunk' ? '#05d9e8' :
                                theme.name === 'gradient' ? '#4a00e0' : '#00a86b'
                  }}></span>
                  {theme.label}
                  {theme.name === activeTheme && (
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;