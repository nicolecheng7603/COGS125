import React from 'react';
import './Contact.css'; // Ensure you create and update this CSS file accordingly
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="contact-container">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Page
      </motion.h2>
      <div className="contact-info">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Email</h3>
          <p>h7cheng@ucsd.edu</p>
        </motion.div>
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Phone</h3>
          <p>+1 (650) 766- 6188</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
