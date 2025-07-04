import React, { useState } from "react";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pwd) => {
    const lengthValid = pwd.length >= 8;
    const uppercaseCount = (pwd.match(/[A-Z]/g) || []).length;
    const lowercaseCount = (pwd.match(/[a-z]/g) || []).length;
    const numberCount = (pwd.match(/[0-9]/g) || []).length;
    const specialCharCount = (pwd.match(/[^A-Za-z0-9]/g) || []).length;

    if (
      lengthValid &&
      uppercaseCount >= 2 &&
      lowercaseCount >= 1 &&
      numberCount >= 1 &&
      specialCharCount >= 1
    ) {
      setStrength("Strong");
    } else {
      setStrength("Weak");
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    checkStrength(val);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        style={{ padding: "8px", width: "250px" }}
      />
      <p>
        Strength:{" "}
        <span
          style={{
            fontWeight: "bold",
            color: strength === "Strong" ? "green" : "red",
          }}
        >
          {strength}
        </span>
      </p>
      <ul style={{ textAlign: "left", maxWidth: "300px", margin: "auto" }}>
        <li>Password length ≥ 8: {password.length >= 8 ? "✔️" : "❌"}</li>
        <li>Uppercase letters ≥ 2: {(password.match(/[A-Z]/g) || []).length >= 2 ? "✔️" : "❌"}</li>
        <li>Lowercase letters ≥ 1: {(password.match(/[a-z]/g) || []).length >= 1 ? "✔️" : "❌"}</li>
        <li>Numbers ≥ 1: {(password.match(/[0-9]/g) || []).length >= 1 ? "✔️" : "❌"}</li>
        <li>Special characters ≥ 1: {(password.match(/[^A-Za-z0-9]/g) || []).length >= 1 ? "✔️" : "❌"}</li>
      </ul>
    </div>
  );
}
