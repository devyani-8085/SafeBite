import React, { useState } from 'react';
import './ClaimSystem.css';

const ClaimSystem = () => {
  const [claimType, setClaimType] = useState('onspot');

  return (
    <div className="claim-system">
      <h2>SafeBite Claims Management</h2>
      <p className="subtitle">Report hygiene issues. Choose your claim type below.</p>

      <div className="claim-tabs">
        <button 
          className={claimType === 'onspot' ? 'active' : ''} 
          onClick={() => setClaimType('onspot')}
        >🔥 On-Spot Claim</button>
        <button 
          className={claimType === 'regular' ? 'active' : ''} 
          onClick={() => setClaimType('regular')}
        >📄 Regular Claim</button>
      </div>

      <div className="claim-form">
        {claimType === 'onspot' ? (
          <div>
            <h3>Instant On-Spot Claim</h3>
            <p>Upload proof of spoiled food or immediate hazard for instant refund.</p>
            <input type="text" placeholder="Order ID" className="c-input" />
            <div className="upload-btn">Upload Photo Evidence</div>
            <button className="submit-btn primary-bg">Submit & Request Instant Refund</button>
          </div>
        ) : (
          <div>
            <h3>Formal Regular Claim</h3>
            <p>File a formal complaint for admin review and restaurant penalty tracking.</p>
            <input type="text" placeholder="Restaurant Name" className="c-input" />
            <textarea placeholder="Describe the hygiene violation..." className="c-input textarea"></textarea>
            <div className="upload-btn">Upload Additional Proof</div>
            <button className="submit-btn outline-bg">Submit for Admin Review</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimSystem;
