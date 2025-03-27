import React from "react";

const chineseAlphabets = [
  { character: "你", pinyin: "nǐ" }, { character: "好", pinyin: "hǎo" },
  { character: "学", pinyin: "xué" }, { character: "生", pinyin: "shēng" },
  { character: "中", pinyin: "zhōng" }, { character: "文", pinyin: "wén" },
  { character: "爱", pinyin: "ài" }, { character: "和", pinyin: "hé" },
  { character: "天", pinyin: "tiān" }, { character: "地", pinyin: "dì" },
  { character: "人", pinyin: "rén" }, { character: "本", pinyin: "běn" },
  { character: "国", pinyin: "guó" }, { character: "家", pinyin: "jiā" },
  { character: "朋", pinyin: "péng" }, { character: "友", pinyin: "yǒu" }
];

const ChineseAlphabets = () => {
  return (
    <div style={{
      background: "linear-gradient(to right, #8E2DE2, #FF6A88)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }}>
      <nav style={{
        background: "#fff",
        color: "#D63384",
        padding: "15px",
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.5rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
      }}>Languages bring people together</nav>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginTop: "20px", textShadow: "2px 2px 4px rgba(0,0,0,0.2)" }}>CHINESE ALPHABETS</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "20px",
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        color: "#333",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        maxWidth: "700px",
        marginTop: "20px"
      }}>
        {chineseAlphabets.map(({ character, pinyin }) => (
          <div key={character} style={{
            textAlign: "center",
            padding: "15px",
            border: "2px solid #D63384",
            borderRadius: "10px",
            background: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
          }}>
            <span style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#D63384" }}>{character}</span>
            <div style={{ fontSize: "1.2rem", color: "#555" }}>{pinyin}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChineseAlphabets;