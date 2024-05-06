// Projects.js
import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import './Projects.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image6 from './assets/image6.jpg';

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
          <h3>Exploration with Generative AI Tools</h3>
          <img
            src={image1}
            alt="Exploration with Generative AI Tools"
            className="project-image"
          />
          <p>
            In this assignment, I had to use powerful AI tools to create high-quality multimedia content.
            I decided to create an AI-generated interactive log app, for my friends and me to document our
            experiences when we go on our “raccoon walks” on campus.
          </p>
          <a href="https://app.uizard.io/p/ffc18f6e/preview" target="_blank" rel="noopener noreferrer">
            <button className="prototype-button">Clickable Prototype</button>
          </a>
        </motion.div>

        <motion.div
          layout
          className="project-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3> Natural Language Input Focused Interface</h3>
          <img
            src={image6}
            alt="Natural Language Input Focused Interface"
            className="project-image"
          />
          <p>
          Since there is a lack of impactful ADHD tools for education for younger children which leaves 
          them at a greater disadvantage later in their lives my group and I decided to create a story-
          based interface that creates an interactive personalized learning experience free of other 
          distractions.

          </p>
          <a href= "https://www.figma.com/proto/AavEwWmcu5yrCr5sVCyiq2/dsgn118?node-id=172-27&starting-
          point-node-id=172%3A27&mode=design&t=VcYDkzcMCXXRDxpW-1" target="_blank" rel="noopener noreferrer"
          >
            <button className="prototype-button">Clickable Prototype</button>
          </a>
        </motion.div>

        <motion.div
          layout
          className="project-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Socale App UI/UX Designs</h3>
          <div className="project-gallery">
            <div className="gallery-item">
              <img src={image2} alt="Slide 1" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={image3} alt="Slide 2" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src={image4} alt="Slide 3" className="image-smaller" />
            </div>
          </div>
          <p>
            Avatar Designs and App layout design for Socale, a start up aiming to create
            an app for UCSD students to connect and network. 
          </p>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}

export default Projects;
