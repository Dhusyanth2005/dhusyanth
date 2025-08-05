import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '0 var(--spacing-lg)'
    }}>
      <h1 style={{ fontSize: '5rem', marginBottom: 'var(--spacing-md)' }}>404</h1>
      <h2 style={{ marginBottom: 'var(--spacing-lg)' }}>Page Not Found</h2>
      <p style={{ marginBottom: 'var(--spacing-xl)', maxWidth: '600px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          padding: 'var(--spacing-sm) var(--spacing-lg)',
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-bg)',
          borderRadius: 'var(--radius-md)',
          fontWeight: '500',
          transition: 'var(--transition-fast)'
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;