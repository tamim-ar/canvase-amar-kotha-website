import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-soft sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => navigate('/')} 
            className="text-2xl font-playfair font-bold hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 hover:scale-105"
          >
            Canvase Amar Kotha
          </button>
          <div className="flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`${
                  isActive(path) 
                    ? 'text-accent-light dark:text-accent-dark font-medium scale-105' 
                    : 'text-gray-600 dark:text-gray-400'
                } hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 hover:scale-105`}
              >
                {label}
              </button>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
