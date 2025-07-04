import React, { useState } from "react";

export default function MultiTabForm() {
  const [activeTab, setActiveTab] = useState("profile");

  // form data states
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [profileText, setProfileText] = useState("");

  const [interest, setInterest] = useState("");
  const [hobbies, setHobbies] = useState([]);

  const [notifications, setNotifications] = useState(false);
  const [theme, setTheme] = useState("light");

  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (activeTab === "profile" && (age === "" || email === "")) {
      setErrors("Please fill in age and email!");
      return;
    }

    setErrors("");
    alert("Form submitted successfully!");
  };

  const toggleHobby = (hobby) => {
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter((h) => h !== hobby));
    } else {
      setHobbies([...hobbies, hobby]);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Multi Tab Form</h1>
      <div>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("interest")}>Interest</button>
        <button onClick={() => setActiveTab("settings")}>Settings</button>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        {activeTab === "profile" && (
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>About Me:</label>
            <input
              type="text"
              value={profileText}
              onChange={(e) => setProfileText(e.target.value)}
            />
          </div>
        )}

        {activeTab === "interest" && (
          <div>
            <label>Choose Interest:</label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option value="">Select</option>
              <option value="sports">Sports</option>
              <option value="music">Music</option>
              <option value="travel">Travel</option>
            </select>
            <br />
            <label>Hobbies:</label>
            <br />
            <input
              type="checkbox"
              checked={hobbies.includes("reading")}
              onChange={() => toggleHobby("reading")}
            />{" "}
            Reading
            <input
              type="checkbox"
              checked={hobbies.includes("gaming")}
              onChange={() => toggleHobby("gaming")}
            />{" "}
            Gaming
            <input
              type="checkbox"
              checked={hobbies.includes("cooking")}
              onChange={() => toggleHobby("cooking")}
            />{" "}
            Cooking
          </div>
        )}

        {activeTab === "settings" && (
          <div>
            <label>Theme:</label>
            <br />
            <input
              type="radio"
              name="theme"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
            />
            Light
            <input
              type="radio"
              name="theme"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
            />
            Dark
            <br />
            <label>Notifications:</label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            Enable Notifications
          </div>
        )}

        {errors && <p style={{ color: "red" }}>{errors}</p>}

        <div style={{ marginTop: "20px" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
