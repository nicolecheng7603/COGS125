import React from 'react';
import './App.css';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Nicole Cheng's Portfolio</h1>
        <p>Welcome!</p>
      </header>
      <main>
      </main>
      <footer>
        <p>
          I am an undergraduate student at UCSD, majoring in Cognitive Science
          with a specialization in Design and Interaction, minoring in Speculative
          Design. I am interested in the field of Design and Media.
          Thank you for visiting my portfolio!</p>
      </footer>
    </div>
  );
}

export default App;
