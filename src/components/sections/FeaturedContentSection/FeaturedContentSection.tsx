import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './FeaturedContentSection.style.css';

const slides = [{ content: '1' }, { content: '2' }, { content: '3' }];

export const FeaturedContentSection = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);
  const [direction, setDirection] = useState('left');
  // const autoplayRef = useRef<any>(null);

  const handleNext = () => {
    setDirection('left');
    setNext((prev) => {
      if (prev === slides.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setDirection('right');
    setNext((prev) => {
      if (prev === 0) {
        return slides.length - 1;
      }
      return prev - 1;
    });
  };

  const setIndex = (index: number) => {
    if (current < index) {
      setDirection('left');
    } else {
      setDirection('right');
    }
    setNext(index);
  };

  // useEffect(() => {
  //   autoplayRef.current = setInterval(() => {
  //     handleNext();
  //   }, 5000);

  //   return () => {
  //     clearInterval(autoplayRef.current);
  //   };
  // }, []);

  useEffect(() => {
    setCurrent(next);
  }, [next]);

  return (
    <section className='featured-content'>
      <div className='featured-content__slider'>
        <div className='slider'>
          <AnimatePresence mode='popLayout'>
            <motion.div
              key={slides[current]?.content}
              className='hehe__not-hehe'
              initial={{ x: direction === 'left' ? 1000 : -1000 }}
              animate={{ x: 0 }}
              exit={{ x: direction === 'left' ? -1000 : 1000 }}
              transition={{ duration: 1 }}
            >
              {slides[current]?.content}
            </motion.div>
          </AnimatePresence>
        </div>
        <button className='featured-content__nav prev' onClick={handlePrev}>
          prev
        </button>
        <button className='featured-content__nav next' onClick={handleNext}>
          next
        </button>
      </div>
      <div className='featured-content__thumbnails'>
        {slides.map((_, index) => (
          <button
            className={`featured-content__thumbnail ${next === index ? 'active' : ''}`}
            key={index}
            onClick={() => setIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};
