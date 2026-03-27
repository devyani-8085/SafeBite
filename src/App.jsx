import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Menus from './pages/Menus';
import RestaurantProfile from './pages/RestaurantProfile';
import Search from './components/search';
import Upload from './components/upload';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/restaurant" element={<RestaurantProfile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
