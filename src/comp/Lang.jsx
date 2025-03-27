import React from "react";
import "./Lang.css";
import { Link, useNavigate } from 'react-router-dom';

const Lang = () => {
  return (
    <div>
      
      {/* Logo Section */}
      <div className="logo-container">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3898/3898150.png"
          alt="MultiLingo Logo"
          className="logo"
        />
      </div>

      {/* Italic Text */}
      <h2 className="main-text">Language Learning Platform</h2>

      {/* Why Choose MultiLingo Section */}
      <h3></h3>

      {/* Start Button */}
      <div className="start-button">
        <Link to="/lesson"> {/* Use Link for routing */}
          <button>Start Learning With Us</button>
        </Link>
      </div>

      {/* Available Languages Section */}
      <div className="languages-section">
        <h2>📚 Available Languages</h2>

        <div className="language-box">
          <h3>English</h3>
          <p>
            Enhance your fluency in English with interactive lessons covering
            grammar, vocabulary, and pronunciation.
          </p>
        </div>

        <div className="language-box">
          <h3>Japanese</h3>
          <p>
            Learn Japanese with easy-to-follow lessons, hiragana, katakana, and
            kanji practice.
          </p>
        </div>

        <div className="language-box">
          <h3>French</h3>
          <p>
            Master French pronunciation, grammar, and essential conversational
            phrases.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer-container">
          <h3>🌍 Connect With Us</h3>
          <p>Email: support@multilingo.com | Phone: +123 456 7890</p>
          <div className="social-icons">
            {/* Social media icons can go here */}
            
          </div>
          <p>&copy; 2025 MultiLingo. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Lang;
