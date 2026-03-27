import React from 'react';
import { MapPin } from 'lucide-react';
import './MapView.css';

const MapView = () => {
  return (
    <div className="map-view-container">
      <h2>Local Safe Restaurants</h2>
      <p className="subtitle">Find hygiene-verified restaurants near you.</p>

      <div className="map-wrapper">
        <div className="map-placeholder">
          <div className="map-overlay">
            <div className="map-marker safe" style={{ top: '20%', left: '30%' }}>
              <MapPin size={32} fill="var(--safe)" color="white" />
              <div className="marker-tooltip">Green Cafe (Safe)</div>
            </div>
            <div className="map-marker warning" style={{ top: '50%', left: '60%' }}>
              <MapPin size={32} fill="var(--warning)" color="white" />
              <div className="marker-tooltip">City Diner (Moderate)</div>
            </div>
            <div className="map-marker safe" style={{ top: '70%', left: '20%' }}>
              <MapPin size={32} fill="var(--safe)" color="white" />
              <div className="marker-tooltip">Bistro 99 (Safe)</div>
            </div>
            <div className="map-marker danger" style={{ top: '30%', left: '75%' }}>
              <MapPin size={32} fill="var(--danger)" color="white" />
              <div className="marker-tooltip">Old Tavern (Unsafe)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item"><span className="dot safe-bg"></span> Verified Safe</div>
        <div className="legend-item"><span className="dot warning-bg"></span> Moderate / Missing Data</div>
        <div className="legend-item"><span className="dot danger-bg"></span> Unsafe / Violations Found</div>
      </div>
    </div>
  );
};
export default MapView;
