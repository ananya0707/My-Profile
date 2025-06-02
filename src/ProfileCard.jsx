import React from "react";
import './App.css' // Make sure App.css has our styles

const ProfileCard = () => {
  const bgColor = "#f0f2f5";

 return (
  <div className="profile-card-container app-container">
    <div
      className="profile-card"
      style={{
        backgroundColor: bgColor,
        maxWidth: "500px",
        width: "100%",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Profile Picture */}
      <img
        src="https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg"
        alt="Profile"
        className="profile-picture"
      />

      {/* Name and Tagline */}
      <h2>Ananya M Rao</h2>
      <p>
        ISE Student | Building tech with purpose | Driven by Innovation &
        Curiosity
      </p>

      {/* Projects Section */}
      <h3>Projects</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>✅ VTU Result Automation</li>
        <li>📌 Study with me (Pomodoro) webpage</li>
        <li>🔐 Tamper-Proof Certificate Auth System (AI + Blockchain) [ongoing]</li>
        <li>📋 To-Do List Web App (MERN Stack) [ongoing]</li>
      </ul>

      {/* Resume Button */}
      <a href="/path-to-resume.pdf" download>
        <button className="resume-button">Download Resume</button>
      </a>
    </div>
  </div>
);

};

export default ProfileCard;
