import { motion, useAnimationControls } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatedText } from '../../../components/atoms';
import { useScrollDirection } from '../../../hooks';
import './Logo.style.css';

const TITLE = "Mémoire d'Encrier";

export const Logo = () => {
  const [leftPart, rightPart] = TITLE.split(' ');
  const direction = useScrollDirection();
  const controls = useAnimationControls();

  useEffect(() => {
    if (direction) {
      controls.start('shrink');
    } else {
      controls.start('initial');
    }
  }, [direction]);

  return (
    <div className='logo'>
      <motion.div
        animate={controls}
        variants={{
          initial: { scale: 1, x: 0, y: '10%' },
          shrink: { scale: 0.66, x: '-16%', y: '20%' },
        }}
        transition={{ duration: 0.8 }}
      >
        <Link className='logo__link' to='/'>
          <AnimatedText text={leftPart} />
        </Link>
      </motion.div>
      <motion.div
        animate={controls}
        variants={{
          initial: { scale: 1, x: 0, y: 0 },
          shrink: { scale: 0.7, x: '16%', y: '15%' },
        }}
        transition={{ duration: 0.8 }}
      >
        <Link className='logo__link' to='/'>
          <motion.span
            className='logo__icon-container'
            animate={controls}
            variants={{
              initial: { y: '100%' },
              shrink: { y: '10%' },
            }}
            transition={{ duration: 0.8 }}
          >
            <SunIconSVG />
          </motion.span>
          <AnimatedText text={rightPart} />
        </Link>
      </motion.div>
    </div>
  );
};

const SunIconSVG = () => {
  return (
    <svg className='sun-icon'>
      <circle cx='50%' cy='75%' r='50%' />
    </svg>
  );
};
