import React from "react";

const JapaneseAlphabets = () => {
  const hiragana = [
    { letter: "あ", phonetic: "a" }, { letter: "い", phonetic: "i" },
    { letter: "う", phonetic: "u" }, { letter: "え", phonetic: "e" },
    { letter: "お", phonetic: "o" }, { letter: "か", phonetic: "ka" },
    { letter: "き", phonetic: "ki" }, { letter: "く", phonetic: "ku" },
    { letter: "け", phonetic: "ke" }, { letter: "こ", phonetic: "ko" },
    { letter: "さ", phonetic: "sa" }, { letter: "し", phonetic: "shi" },
    { letter: "す", phonetic: "su" }, { letter: "せ", phonetic: "se" },
    { letter: "そ", phonetic: "so" }, { letter: "た", phonetic: "ta" },
    { letter: "ち", phonetic: "chi" }, { letter: "つ", phonetic: "tsu" },
    { letter: "て", phonetic: "te" }, { letter: "と", phonetic: "to" },
  ];

  const styles = {
    container: {
      background: "linear-gradient(to right, #a855f7, #ec4899)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      color: "white",
    },
    nav: {
      background: "white",
      color: "#ec4899",
      padding: "10px",
      width: "100%",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.5rem",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginTop: "20px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
      gap: "20px",
      background: "white",
      color: "black",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      maxWidth: "800px",
      marginTop: "20px",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
      transition: "background 0.3s",
    },
    letter: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#ec4899",
    },
    phonetic: {
      fontSize: "1.2rem",
      color: "#555",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>Languages bring people together</nav>
      <h1 style={styles.title}>JAPANESE ALPHABETS</h1>
      <div style={styles.grid}>
        {hiragana.map(({ letter, phonetic }) => (
          <div key={letter} style={styles.card}>
            <span style={styles.letter}>{letter}</span>
            <span style={styles.phonetic}>{phonetic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JapaneseAlphabets;