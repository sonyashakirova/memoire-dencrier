import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SunBackground.style.css';

export const SunBackground = () => {
  const [startAnimation, setStartAnimation] = useState(true);
  const [sunset, setSunset] = useState(false);
  const sunsetClass = sunset ? 'sunset' : '';
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnimation(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={`sun__background ${sunsetClass}`} />
      <motion.div className='sun__container' style={{ y }}>
        <motion.div
          className={`sun ${sunsetClass}`}
          onMouseEnter={() => !startAnimation && setSunset(true)}
          onMouseLeave={() => setSunset(false)}
          initial={{ transform: 'translate(-30vw, -30vh) scale(3)' }}
          animate={{ transform: 'translate(0, 0) scale(1)' }}
          transition={{ duration: 4, ease: [0.6, 0.2, 0.1, 0.99] }}
        />
      </motion.div>
    </>
  );
};
