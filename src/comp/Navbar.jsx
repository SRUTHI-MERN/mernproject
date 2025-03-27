import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Navigate to login page when clicked
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>MULTILINGO</h1>
      <div>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/Profile" style={styles.navLink}>Profile</Link>
        <Link to="/Language" style={styles.navLink}>Language</Link>
        <Link to="/login" style={styles.navLink}>Login</Link>
      </div>
    </nav>
  );
};

// CSS-in-JS styles for Navbar
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#d435cc', // Purple color
    padding: '15px 30px',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
  },
};

export default Navbar;
