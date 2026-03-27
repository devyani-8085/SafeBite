import React, { useState } from 'react';
import { UploadCloud, CheckCircle, AlertTriangle } from 'lucide-react';
import './KitchenProof.css';

const KitchenProof = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = () => {
    setAnalyzing(true);
    setResult(null);
    // Simulate AI processing delay
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        cleanliness: 4,
        issues: ["Gloves missing on prep station 2"],
        detected: ["Stainless steel clean", "No pests", "Proper lighting"]
      });
    }, 2500);
  };

  return (
    <div className="kitchen-proof">
      <h2>Real-Time Kitchen Validation</h2>
      <p className="subtitle">Upload daily kitchen photos/videos. Our AI will scan for hygiene compliance.</p>
      
      <div className="upload-box" onClick={handleUpload}>
        <UploadCloud size={48} className="upload-icon" />
        <h3>Click to Upload Kitchen Evidence</h3>
        <p>Supports JPG, PNG, MP4</p>
      </div>

      {analyzing && (
        <div className="analyzing-state">
          <div className="loader"></div>
          <p>Running Computer Vision Analysis...</p>
        </div>
      )}

      {result && (
        <div className="ai-results">
          <h3>AI Analysis Complete</h3>
          <div className="result-grid">
            <div className="r-card">
              <h4>Detection Score</h4>
              <div className="r-val safe">{result.cleanliness} / 5</div>
            </div>
            <div className="r-card">
              <h4>Positive Detections</h4>
              <ul>
                {result.detected.map((d, i) => (
                  <li key={i}><CheckCircle size={14} className="safe-icon"/> {d}</li>
                ))}
              </ul>
            </div>
            <div className="r-card warning-card">
              <h4>Issues Found</h4>
              <ul>
                {result.issues.map((iss, i) => (
                  <li key={i}><AlertTriangle size={14} className="warn-icon"/> {iss}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KitchenProof;
