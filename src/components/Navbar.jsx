import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, User as UserIcon } from 'lucide-react';
import LoginModal from './LoginModal';
import { supabase } from '../lib/supabase';
import './Navbar.css';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // Handle Nominatim Map Search
  useEffect(() => {
    if (query.trim().length < 3) {
      setResults([]);
      return;
    }
    const delayDebounceFn = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&addressdetails=1`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Search error:", error);
      }
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLocation = (place) => {
    setResults([]);
    setQuery('');
    // Navigate to the dynamic restaurant profile page
    navigate(`/restaurant?name=${encodeURIComponent(place.display_name)}&lat=${place.lat}&lon=${place.lon}`);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-brand">
          <img src="/safebite_logo.png" alt="SafeBite Logo" className="nav-logo" />
          <span className="nav-title">SafeBite</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          {session ? (
            <button className="nav-link-btn" onClick={handleLogout} style={{color: 'var(--danger)'}}>Log Out</button>
          ) : (
            <button className="nav-link-btn" onClick={() => setIsLoginOpen(true)}>Login / Sign Up</button>
          )}
          <Link to="/menus">Menus</Link>
          <Link to="/dashboard" className="nav-highlight">Hygiene Dashboard</Link>
        </div>
        <div className="nav-actions">
          <div className="search-container" ref={dropdownRef}>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search Real Restaurant..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="search-btn"><Search size={18} /></button>
            </div>
            
            {/* Autocomplete Dropdown */}
            {results.length > 0 && (
              <div className="search-dropdown">
                {results.map((place, idx) => (
                  <div key={idx} className="dropdown-item" onClick={() => handleSelectLocation(place)}>
                    <MapPin size={16} className="dd-icon" />
                    <div className="dd-text">
                      <span className="dd-name">{place.name || place.display_name.split(',')[0]}</span>
                      <span className="dd-address">{place.display_name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {isSearching && <div className="search-dropdown"><div className="dropdown-item"><span className="dd-text">Searching planet Earth...</span></div></div>}
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;
