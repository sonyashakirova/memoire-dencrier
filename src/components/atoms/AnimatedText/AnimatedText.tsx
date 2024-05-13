import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './AnimatedText.style.css';

interface Props {
  text: string;
}

export const AnimatedText = ({ text }: Props) => {
  const [animationTrigger, setAnimationTrigger] = useState(0);

  const onTextHover = () => {
    setAnimationTrigger((prev) => (prev ? 0 : 1));
  };

  return (
    <p className='animated-text' onMouseEnter={onTextHover}>
      <AnimatePresence mode='popLayout'>
        {Array.from(text).map((char, index) => (
          <motion.span
            key={`char.${animationTrigger}.${index}`}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            exit={{ y: '-110%' }}
            transition={{
              duration: 0.2,
              delay: index * 0.06,
            }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </p>
  );
};
