import React, { useState } from 'react';
import { Search, ShieldCheck } from 'lucide-react';
import './Menus.css';

const MOCK_MENU = [
  { id: 1, name: "Premium Grilled Chicken", img: "/safebite_logo.png", hygieneScore: 5.0, price: "$14.99", safe: true },
  { id: 2, name: "Fresh Organic Salad Bowl", img: "/salad.png", hygieneScore: 4.9, price: "$9.50", safe: true },
  { id: 3, name: "Mix Fry Combo Platter", img: "/mix_fry.png", hygieneScore: 4.5, price: "$12.00", safe: true },
  { id: 4, name: "Street Style Noodles", img: "/safebite_logo.png", hygieneScore: 2.1, price: "$5.00", safe: false },
  { id: 5, name: "Spicy Chicken Wings", img: "/mix_fry.png", hygieneScore: 3.8, price: "$10.50", safe: true }
];

const Menus = () => {
  const [search, setSearch] = useState('');
  
  const filteredMenu = MOCK_MENU
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.hygieneScore - a.hygieneScore); // Sorted by most hygienic

  return (
    <div className="menus-page">
      <div className="menus-header">
        <h1>Safebite Certified Menus</h1>
        <p>Sorted by the highest hygiene and safety ratings.</p>
        
        <div className="menu-search">
          <input 
            type="text" 
            placeholder="Search for a food item..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button><Search size={20}/></button>
        </div>
      </div>

      <div className="menu-grid">
        {filteredMenu.map(item => (
          <div key={item.id} className="menu-card">
            <div className="menu-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="menu-info">
              <h3>{item.name}</h3>
              <div className="menu-meta">
                <span className="price">{item.price}</span>
                <span className={`h-badge ${item.safe ? 'safe' : 'danger'}`}>
                  <ShieldCheck size={14} /> Hygiene: {item.hygieneScore.toFixed(1)} / 5
                </span>
              </div>
              <button className={`order-btn ${!item.safe ? 'disabled' : ''}`}>
                {item.safe ? 'Order Safely' : 'High Risk - Avoid'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menus;
