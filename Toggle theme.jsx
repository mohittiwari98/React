import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  const style = {
    background: dark? "#1a202c" : "#fff",
    color: dark? "#fff" : "#1a202c",
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    transition: "0.3s"
  };

  return (
    <div style={style}>
      <button 
        onClick={() => setDark(!dark)}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
          border: "none",
          borderRadius: "8px",
          background: dark? "#9f7aea" : "#667eea",
          color: "#fff"
        }}
      >
        {dark? " Light" : " Dark"}
      </button>
    </div>
  );
}
