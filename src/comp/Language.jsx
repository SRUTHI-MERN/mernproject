import React from 'react';
import { Link } from 'react-router-dom';

const LanguageSelection = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #A18CD1, #FBC2EB)', // Purple Gradient
  };

  const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  };

  const languageButtons = [
    { name: 'English', color: '#4A90E2' },  // Blue
    { name: 'Japanese', color: '#E74C3C' }, // Red
    { name: 'Chinese', color: '#F39C12' },  // Gold
    { name: 'French', color: 'linear-gradient(to right, #0055A4, #ffffff, #EF4135)' }, // French Tricolor
  ];

  const buttonBaseStyle = {
    padding: '15px 30px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#fff', marginBottom: '20px', fontSize: '2rem' }}>Choose Your Language</h2>
      <div style={buttonStyle}>
        {languageButtons.map(({ name, color }) => (
          <Link
            key={name}
            to={`/${name}`}
            style={{
              ...buttonBaseStyle,
              background: color,
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
