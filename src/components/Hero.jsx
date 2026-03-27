import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div 
          className="badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShieldCheck size={16} /> <span>100% Certified Kitchens</span>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Trust Your Food,<br />
          <span className="text-highlight">From Kitchen to Bite.</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Today users trust ratings, but not hygiene. SafeBite builds trust where it matters most — inside the kitchen with AI-verified cleanliness.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="btn-primary">
            Explore Safe Restaurants <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">
            View Analytics
          </button>
        </motion.div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="stat">
            <span className="stat-num">500+</span>
            <span className="stat-label">AI Verified Kitchens</span>
          </div>
          <div className="stat">
            <span className="stat-num">4.8</span>
            <span className="stat-label">Average Safety Score</span>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-visuals">
        <div className="hero-circle-large"></div>
        <div className="hero-circle-small"></div>
        
        <motion.img 
          src="/mix_fry.png" 
          alt="Mix Fry" 
          className="floating-food main-plate"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.img 
          src="/salad.png" 
          alt="Salad Plate" 
          className="floating-food small-plate pos-top-right"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="floating-card pos-bottom-left"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="fc-img-wrap"><img src="/mix_fry.png" alt="thumbnail"/></div>
          <div className="fc-details">
            <h4>Mix Fry</h4>
            <div className="fc-rating">★★★★★ <span>(Safe)</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
