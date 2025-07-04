import React, { useState } from "react";

export default function TextTransform() {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toReverse = () => {
    setText(text.split("").reverse().join(""));
  };

  const toCapitalize = () => {
    if (text.length === 0) return;
    setText(text[0].toUpperCase() + text.slice(1).toLowerCase());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Text Transformer</h1>
      <input
        type="text"
        value={text}
        placeholder="Enter your text"
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={toUpperCase}>Uppercase</button>
      <button onClick={toLowerCase}>Lowercase</button>
      <button onClick={toReverse}>Reverse</button>
      <button onClick={toCapitalize}>Capitalize</button>
      <p style={{ marginTop: "20px" }}>Result: {text}</p>
    </div>
  );
}
