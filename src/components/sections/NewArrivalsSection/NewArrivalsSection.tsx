import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollDirection, useWindowSize } from '../../../hooks';
import { ArrowLink, BookLink } from '../../atoms';
import './NewArrivalsSection.style.css';

const books = [
  { img: 'book-01.jpg' },
  { img: 'book-01.jpg' },
  { img: 'book-01.jpg' },
];

export const NewArrivalsSection = () => {
  const ref = useRef(null);
  const direction = useScrollDirection();
  const { width } = useWindowSize();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0.1, 0.2], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const booksY = useTransform(scrollYProgress, [0, 1], ['70%', '-70%']);
  const linkY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section className='new-arrivals' ref={ref}>
      <div className='page-grid-sm'>
        <div className='new-arrivals__content'>
          <div className='new-arrivals__title-container'>
            <motion.h2
              className='new-arrivals__title'
              style={{ opacity: direction === 'up' ? opacity : 1 }}
            >
              <motion.span style={{ y: direction === 'down' ? y : 0 }}>
                Nouveautés
              </motion.span>
            </motion.h2>
          </div>
          <motion.div style={{ y: width > 749 ? booksY : 0 }}>
            <ul className='new-arrivals__books'>
              {books.map((book, index) => (
                <li key={index}>
                  <BookLink img={book.img} />
                </li>
              ))}
            </ul>
            <motion.div
              className='new-arrivals__link-container'
              style={{ y: width > 749 ? linkY : 0 }}
            >
              <ArrowLink>Découvrir tous nos livres</ArrowLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
