import React, { useState } from 'react';

const EnglishLesson = () => {
  const [meaning, setMeaning] = useState('');

  // Meanings for the words
  const meanings = {
    Hello: 'A greeting used to say Hi!',
    'Thank You': 'Expression of gratitude.',
    Yes: 'Used to express agreement.',
    No: 'Used to express disagreement.',
    'Good Morning': 'Greeting for the morning.',
    'Good Night': 'Used before sleeping.',
    Please: 'Used to make polite requests.',
    Sorry: 'Expression of apology.',
  };

  // Speak word function
  const speakWord = (word) => {
    setMeaning(meanings[word] || '');

    let utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';  // Set English pronunciation
    speechSynthesis.speak(utterance);
  };

  // Handle next lesson click
  const nextLesson = () => {
    window.location.href = 'english_lesson2.html'; // Redirect to next lesson page
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Welcome to English Language Learning</h2>
      <p style={styles.text}>🌍 English is a global language spoken by millions worldwide. Start your journey here! 🚀</p>

      {/* Lesson 1: Alphabets */}
      <div style={styles.lessonBox}>
        <h3 style={styles.lessonHeader}>🔠 Learn the English Alphabets</h3>
        <p>Click on a letter to hear its pronunciation.</p>

        <div style={styles.flashcardContainer}>
          {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
            <div
              key={letter}
              style={styles.flashcard}
              onClick={() => speakWord(letter)}
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      {/* Lesson 2: Basic Words */}
      <div style={styles.lessonBox}>
        <h3 style={styles.lessonHeader}>📖 Lesson 1: Basic Words</h3>
        <p>Click a word to hear its pronunciation and see its meaning.</p>

        <div style={styles.flashcardContainer}>
          {['Hello', 'Thank You', 'Yes', 'No', 'Good Morning', 'Good Night', 'Please', 'Sorry'].map((word) => (
            <div
              key={word}
              style={styles.flashcard}
              onClick={() => speakWord(word)}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Meaning display */}
        <p id="meaning" style={styles.meaningText}>{meaning}</p>
      </div>

      {/* Next Lesson Button */}
      <button onClick={nextLesson} style={styles.button}>Next Lesson →</button>
    </div>
  );
};

const styles = {
  container: {
    margin: '30px auto',
    padding: '20px',
    width: '80%',
    background: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  header: {
    color: '#7e3b88',
  },
  text: {
    color: '#333',
  },
  lessonBox: {
    padding: '20px',
    background: '#debbea',
    borderRadius: '8px',
    marginTop: '20px',
  },
  lessonHeader: {
    fontSize: '1.5rem',
    color: '#7e3b88',
  },
  flashcardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '15px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  flashcard: {
    width: '120px',
    height: '120px',
    background: '#7e3b88',
    color: 'white',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    textAlign: 'center',
    padding: '10px',
  },
  flashcardHover: {
    transform: 'scale(1.1)',
  },
  meaningText: {
    fontSize: '18px',
    marginTop: '10px',
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    background: '#7e3b88',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
  },
};

export default EnglishLesson;