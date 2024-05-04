// Nav.js
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function Nav() {
  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navigation"
    >
      <motion.ul initial="hidden" animate="visible" className="nav-links">
        <motion.li variants={navItemVariants} transition={{ delay: 0.1 }}>
          <a href="/">Home</a>
        </motion.li>
        <motion.li variants={navItemVariants} transition={{ delay: 0.3 }}>
          <a href="/projects">Projects</a>
        </motion.li>
        <motion.li variants={navItemVariants} transition={{ delay: 0.5 }}>
          <a href="/contact">Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default Nav;
