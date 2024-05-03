// FadeIn.js
import { animated, useSpring } from '@react-spring/web';

const FadeIn = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    config: { tension: 300, friction: 25 }, // Customize animation
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default FadeIn;
