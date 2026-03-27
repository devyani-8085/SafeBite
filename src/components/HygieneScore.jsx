import React from 'react';
import { Star, ShieldAlert, Award } from 'lucide-react';
import './HygieneScore.css';

const HygieneScore = () => {
  return (
    <div className="hygiene-dash">
      <div className="dash-header">
        <h1>Safebite Transparency Score</h1>
        <div className="verified-badge"><Award size={18}/> AI Verified Kitchen</div>
      </div>
      
      <div className="score-cards">
        <div className="score-card main-score">
          <h3>Overall Transparency</h3>
          <div className="score-value">4.8 <span className="max-score">/ 5</span></div>
          <p>Based on AI Scans, Reviews & Inspections</p>
        </div>
        <div className="score-card">
          <h3>Cleanliness Rating</h3>
          <div className="stars">
            <Star size={24} fill="var(--accent)" color="var(--accent)"/>
            <Star size={24} fill="var(--accent)" color="var(--accent)"/>
            <Star size={24} fill="var(--accent)" color="var(--accent)"/>
            <Star size={24} fill="var(--accent)" color="var(--accent)"/>
            <Star size={24} color="var(--accent)"/>
          </div>
          <p>4.0 / 5.0</p>
        </div>
        <div className="score-card date-card">
          <h3>Last Inspection</h3>
          <div className="date-value">Today, 08:30 AM</div>
          <p className="status-good">Pass</p>
        </div>
      </div>

      <div className="violations-section">
        <h3>Recent AI Detections & Violations</h3>
        <div className="violation-list">
          <div className="violation-item resolved">
            <div className="v-icon"><ShieldAlert size={20}/></div>
            <div className="v-details">
              <h4>Gloves Missing (Resolved)</h4>
              <p>Detected at Prep Station 2. Staff corrected issue immediately.</p>
            </div>
            <div className="v-time">10:15 AM</div>
          </div>
          <div className="violation-item none">
            <div className="v-icon"><Award size={20}/></div>
            <div className="v-details">
              <h4>No Active Violations</h4>
              <p>Kitchen environment is safe and clean.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HygieneScore;
