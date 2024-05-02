import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <h1>Nicole Cheng's Portfolio</h1>
          <p>Welcome!</p>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Projects />} /> {/* This line */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>Thank you for visiting my portfolio!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
