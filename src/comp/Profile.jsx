import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState('English');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/auth/profile', {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error('Failed to fetch profile');

        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={styles.body}>
      <div style={styles.profileContainer}>
        <h2 style={styles.heading}>Welcome, {user ? user.name : 'SRUTHI K'}</h2>
        <div style={styles.profileBoxes}>
          <div style={styles.box}>
            <h3>Progress</h3>
            <p>{user ? `${user.progress}%` : 'Completed'}</p>
          </div>
          <div style={styles.box}>
            <h3>Completion Status</h3>
            <p>{user ? user.completionStatus : '100%'}</p>
          </div>
          <div style={styles.box}>
            <h3>Choose Your Language</h3>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} style={styles.select}>
              <option value="English">English</option>
              <option value="Japanese">Japanese</option>
              <option value="French">French</option>
              <option value="Turkish">Turkish</option>
            </select>
          </div>
          <div style={styles.box}>
            <h3>Badges & Achievements</h3>
            <p>{user ? user.achievements : 'Completed 1st level'}</p>
          </div>
        </div>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    backgroundColor: '#ccffcc',  
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  profileContainer: {
    background: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    width: '500px',
  },
  heading: {
    color: '#008000',
  },
  profileBoxes: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '15px',
  },
  box: {
    background: '#f4f4f4',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  select: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#d9534f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Profile;
