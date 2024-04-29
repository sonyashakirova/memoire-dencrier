import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookLink } from '../../atoms';
import './NewArrivalsSection.style.css';

export const NewArrivalsSection = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const { scrollYProgress: scroll2 } = useScroll({ target: ref2 });
  const opacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.6], [100, 0]);
  const booksY = useTransform(scroll2, [0, 1], [-200, 0]);

  return (
    <section className='new-arrivals'>
      <div className='new-arrivals__wrapper'>
        <div className='new-arrivals__content'>
          <div className='new-arrivals__title-container' ref={ref}>
            <h2 className='new-arrivals__title'>
              <motion.span style={{ opacity, y }}>Nouveautés</motion.span>
            </h2>
          </div>
          <motion.ul
            className='new-arrivals__books'
            ref={ref2}
            style={{ y: booksY }}
          >
            <li>
              <BookLink />
            </li>
            <li>
              <BookLink />
            </li>
            <li>
              <BookLink />
            </li>
          </motion.ul>
        </div>
        <div className='new-arrivals__link-container'>
          <a className='new-arrivals__link'>Découvrir tous nos livres</a>
        </div>
      </div>
    </section>
  );
};
