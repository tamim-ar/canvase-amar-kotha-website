import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-900/50 py-8 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 dark:text-gray-400 font-light">
          &copy; {new Date().getFullYear()} Canvase Amar Kotha. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          {/* Social media links placeholder */}
          <span className="text-accent-light dark:text-accent-dark hover:opacity-80 transition-opacity cursor-pointer">
            Instagram
          </span>
          <span className="text-accent-light dark:text-accent-dark hover:opacity-80 transition-opacity cursor-pointer">
            Twitter
          </span>
          <span className="text-accent-light dark:text-accent-dark hover:opacity-80 transition-opacity cursor-pointer">
            Facebook
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
