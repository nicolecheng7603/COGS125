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
            <Route path="/projects" element={<Projects />} /> {/* New Projects Page */}
            <Route path="/contact" element={<Contact />} /> {/* New Contact Page */}
          </Routes>
        </main>
        <footer>
          <p>
            I am an undergraduate student at UCSD, majoring in Cognitive Science
            with a specialization in Design and Interaction, minoring in Speculative
            Design. I am interested in the field of Design and Media. 
            Thank you for visiting my portfolio!</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
