import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useWindowSize } from '../../../../hooks';
import './Slide.style.css';

interface Props {
  text: string[];
  img: string;
}

export const Slide = ({ text, img }: Props) => {
  const { width } = useWindowSize();
  const slideRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: slideRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['4rem', '-4rem']);
  const textY = useTransform(scrollYProgress, [0, 1], ['-4rem', '4rem']);

  return (
    <div className='slide' ref={slideRef}>
      <motion.img
        src={`src/assets/images/featured/${img}`}
        alt={img}
        style={{ y: width > 749 ? imageY : 0 }}
      />
      <motion.div
        className='slide__text'
        style={{ y: width > 749 ? textY : 0 }}
      >
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </motion.div>
    </div>
  );
};
