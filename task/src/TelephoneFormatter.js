import React, { useState } from "react";

export default function TelephoneFormatter() {
  const [phone, setPhone] = useState("");

  const formatPhoneNumber = (value) => {
    // Remove all non-digit chars
    const digits = value.replace(/\D/g, "").slice(0, 10);

    let formatted = "";

    if (digits.length > 0) {
      formatted += "(" + digits.substring(0, Math.min(3, digits.length));
    }
    if (digits.length >= 4) {
      formatted += ") ";
      formatted += digits.substring(3, Math.min(6, digits.length));
    }
    if (digits.length >= 7) {
      formatted += " ";
      formatted += digits.substring(6, 10);
    }

    return formatted;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setPhone(formatted);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Telephone Formatter</h2>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={handleChange}
        maxLength={14} 
        style={{ padding: "8px", fontSize: "16px", width: "200px" }}
      />
      <p>Formatted: {phone}</p>
    </div>
  );
}
