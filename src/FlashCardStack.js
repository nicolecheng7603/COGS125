// FlashCardStack.js
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './FlashCardStack.css';

const cards = [
  "I am an undergraduate student at UCSD, majoring in Cognitive Science with a specialization in Design and Interaction, minoring in Speculative Design. I am interested in the field of Design and Media. Thank you for visiting my portfolio!",
  "I have experience with UI/UX, Graphic Design, 3D design, Python, React, and user research.",
  "I am passionate in learning more about how AI can be incoorperate in traditional mediums to create innovative designs.",
  "I love photography, it is my way to document moments of my life, and where I take inspiration from for my work."
];

function FlashCardStack() {
  const [index, setIndex] = useState(0);
  const animation = useSpring({
    opacity: 1,
    transform: `translate3d(0px, ${index * 30}px, 0px)`,
    from: { opacity: 0, transform: 'translate3d(0px, 100px, 0px)' },
  });

  const handleClick = () => setIndex((prevIndex) => (prevIndex + 1) % cards.length);

  return (
    <div className="flash-card-stack" onClick={handleClick}>
      {cards.map((content, i) => (
        <animated.div
          key={i}
          className={`flash-card ${index === i ? 'top-card' : ''}`}
          style={index === i ? animation : { display: 'none' }}
        >
          {content}
        </animated.div>
      ))}
    </div>
  );
}

export default FlashCardStack;
