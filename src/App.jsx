import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <main className="container mx-auto px-4 py-8">
      {children}
    </main>
    <Footer />
  </div>
);

const routes = [
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
  },
];

const routerOptions = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

const router = createBrowserRouter(routes, routerOptions);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
