import React from 'react';
import ProfileCard from './ProfileCard';
import './App.css';

const App = () => {
  return (
    <div className="profile-card-container">
      <ProfileCard
        name="Ananya M Rao"
        bio="ISE Student | Building tech with purpose | Driven by Innovation & Curiosity"
        profilePicture="My profile/src/img.jpg"
        resumeLink="https://your-resume-link.com/Ananya_Resume.pdf" 
        projects={[
          "✅ VTU Result Automation",
          "📌 Study with me (Pomodoro) webpage",
          "🔐 Tamper-Proof Certificate Auth System (AI + Blockchain) [ongoing]",
          "📝 To-Do List Web App (MERN Stack) [ongoing]"
        ]}
      />
    </div>
  );
};

export default App;
