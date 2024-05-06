// Projects.js
import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import './Projects.css'; 
import image1 from './assets/image1.jpg';

function Projects() {
  return (
    <div className="projects-container">
      <LayoutGroup>
        <motion.div
          layout
          className="project-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Project One</h3>
          <img
            src={image1}
            alt="Project One"
            className="project-image"
            style={{ width: '500px', height: 'auto' }} 
          />
          <p>
          In this assignment, I had to use powerful AI tools to create high-quality multimedia content. 
          I decided to create an AI-generated interactive log app,  for my friends and me to document our 
          experiences when we go on our “raccoon walks” on campus.
          </p>
          <a href="https://app.uizard.io/p/ffc18f6e/preview" target="_blank" rel="noopener noreferrer">
            <button className="prototype-button">Clickable Prototype</button>
          </a>
        </motion.div>
        {/* Add other project cards similarly */}
      </LayoutGroup>
    </div>
  );
}

export default Projects;
