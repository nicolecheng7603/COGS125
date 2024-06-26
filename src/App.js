import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import { motion } from 'framer-motion';
import FlashCardStack from './FlashCardStack';
import Root from './routes/root';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image5 from './assets/image5.jpg';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Nav />
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: showMessage ? 1 : 0, y: showMessage ? 0 : -20 }} transition={{ duration: 0.5 }}>
            Nicole Cheng's Portfolio
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: showMessage ? 1 : 0, y: showMessage ? 0 : -20 }} transition={{ duration: 0.5 }}>
            Welcome to my portfolio!
          </motion.p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
            <motion.img src={image1} alt="Image 1" initial={{ opacity: 0 }} animate={{ opacity: showMessage ? 1 : 0 }} transition={{ duration: 0.8 }} style={{ width: '300px', height: 'auto', border: '1px solid #f9f7f7', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
            <motion.img src={image2} alt="Image 2" initial={{ opacity: 0 }} animate={{ opacity: showMessage ? 1 : 0 }} transition={{ duration: 0.8 }} style={{ width: '300px', height: 'auto', border: '1px solid #f9f7f7', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
            <motion.img src={image5} alt="Image 5" initial={{ opacity: 0 }} animate={{ opacity: showMessage ? 1 : 0 }} transition={{ duration: 0.8 }} style={{ width: '300px', height: 'auto', border: '1px solid #f9f7f7', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} />
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<FlashCardStack />} />
              <Route path="projects" element={<div>Projects Page</div>} />
              <Route path="contact" element={<div>Contact Page</div>} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </Router>
  );
}

function NotFound() {
  return <div>Page not found. Please check the URL or go back to the homepage.</div>;
}

export default App;
