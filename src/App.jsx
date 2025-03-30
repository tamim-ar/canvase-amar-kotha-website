import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-primary-light via-secondary-light to-primary-light dark:from-primary-dark dark:via-secondary-dark dark:to-primary-dark text-gray-900 dark:text-gray-100 transition-all duration-300 font-raleway">
    <Navbar />
    <main className="container mx-auto px-6 py-12 animate-slide-up">
      {children}
    </main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/gallery",
    element: <Layout><Gallery /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  }
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider 
        router={router} 
        future={{
          v7_startTransition: true
        }}
      />
    </ThemeProvider>
  );
}

export default App;
