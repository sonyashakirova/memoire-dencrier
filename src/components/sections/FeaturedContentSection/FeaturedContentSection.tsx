import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Slide } from './Slide';
import './FeaturedContentSection.style.css';

const slides = [
  {
    text: [
      'Vendredi 24 mai → Librairie Le Port de tête (Montréal)',
      'Samedi 25 mai → Librairie La Liberté (Québec)',
    ],
    img: 'lawrence-hill.jpg',
  },
  {
    text: [
      'Annonce des gagnant·es et remise du Prix',
      'le 18 mai 2024 à Montpellier.',
    ],
    img: 'grand-prix.jpg',
  },
  {
    text: [
      "Chaque année, la librairie Coiffard à Nantes présente une sélection des 10 titres vedettes de l'année.",
      "Le roman Hors-Sol s'est taillé une place dans la liste prisée.",
    ],
    img: 'philippe-yong.jpg',
  },
];

export const FeaturedContentSection = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);
  const [direction, setDirection] = useState('left');

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

  useEffect(() => {
    setCurrent(next);
  }, [next]);

  return (
    <section className='featured-content'>
      <div className='page-grid-sm'>
        <div className='featured-content__slider'>
          <div className='featured-content__slides'>
            <AnimatePresence mode='popLayout'>
              <motion.div
                className='featured-content__slide'
                key={slides[current]?.img}
                initial={{
                  x: direction === 'left' ? '100%' : '-100%',
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 'left' ? '-100%' : '100%' }}
                transition={{ duration: 1 }}
              >
                <Slide {...slides[current]} />
              </motion.div>
            </AnimatePresence>
            <button className='featured-content__nav prev' onClick={handlePrev}>
              <span className='brrbrbrbrb prev'></span>
            </button>
            <button className='featured-content__nav next' onClick={handleNext}>
              <span className='brrbrbrbrb'></span>
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
        </div>
      </div>
    </section>
  );
};
