import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => navigate('/')} 
            className="text-xl font-bold"
          >
            Canvase Amar Kotha
          </button>
          <div className="flex space-x-4">
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
                  isActive(path) ? 'text-gray-900' : 'text-gray-600'
                } hover:text-gray-900`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
