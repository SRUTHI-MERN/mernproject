import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Signup failed');

      alert('Signup successful! Please login.');
      navigate('/login'); // Redirect to login page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.formContainer}>
      <form style={styles.formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
        {error && <p style={styles.errorStyle}>{error}</p>}
        <input
          style={styles.inputStyle}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          style={styles.inputStyle}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          style={styles.inputStyle}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button
          style={styles.buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
  },
  formStyle: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  inputStyle: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  buttonStyle: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  buttonHoverStyle: {
    backgroundColor: '#45a049',
  },
  errorStyle: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
};

export default Signup;
