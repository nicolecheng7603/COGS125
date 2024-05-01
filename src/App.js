import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a simple React portfolio page.</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>I'm an undergraduate student at UCSD majoring in Cognitive Science with a Specialization in Design and Interaction 
            and minoring in Speculative Design. I am really interested in Design and Media!</p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>Coursework</li>
            <li>Task Manager App</li>
            <li>AI chatbot using OpenAI API</li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Reach out via email: h7cheng@ucsd.edu</p>
        </section>
      </main>
      <footer>
        <p>Thank you for visiting my portfolio!</p>
      </footer>
    </div>
  );
}

export default App; // Add this line to export the App component as the default export
