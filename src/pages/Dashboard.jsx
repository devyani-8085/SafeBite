import React, { useState } from 'react';
import HygieneScore from '../components/HygieneScore';
import KitchenProof from '../components/KitchenProof';
import ClaimSystem from '../components/ClaimSystem';
import MapView from '../components/MapView';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('hygiene');

  return (
    <div className="dashboard-page">
      <div className="dash-sidebar">
        <h2>Restaurant Portal</h2>
        <ul>
          <li className={activeTab === 'hygiene' ? 'active' : ''} onClick={() => setActiveTab('hygiene')}>Hygiene Score Dashboard</li>
          <li className={activeTab === 'kitchen' ? 'active' : ''} onClick={() => setActiveTab('kitchen')}>Real-Time Kitchen Proof</li>
          <li className={activeTab === 'claims' ? 'active' : ''} onClick={() => setActiveTab('claims')}>Claims Management</li>
          <li className={activeTab === 'map' ? 'active' : ''} onClick={() => setActiveTab('map')}>Map View</li>
        </ul>
      </div>
      <div className="dash-content">
        {activeTab === 'hygiene' && <HygieneScore />}
        {activeTab === 'kitchen' && <KitchenProof />}
        {activeTab === 'claims' && <ClaimSystem />}
        {activeTab === 'map' && <MapView />}
      </div>
    </div>
  );
};
export default Dashboard;
