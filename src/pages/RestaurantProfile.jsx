import React from 'react';
import { useSearchParams } from 'react-router-dom';
import HygieneScore from '../components/HygieneScore';
import { MapPin } from 'lucide-react';

const RestaurantProfile = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || "Unknown Restaurant";
  
  return (
    <div style={{ padding: '100px 5% 5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '10px' }}>
          {name}
        </h1>
        <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dark)', opacity: 0.7 }}>
          <MapPin size={18} /> Found via Real-World Location API
        </p>
      </div>
      
      <div style={{ background: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
         <HygieneScore />
      </div>
    </div>
  );
};
export default RestaurantProfile;
