import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { BookLink } from '../../atoms';
import './CatalogSection.style.css';

const categories = [
  { name: 'Roman/Récit', book: { img: 'book-01.jpg' } },
  { name: 'Essai', book: { img: 'book-01.jpg' } },
  { name: 'Poésie', book: { img: 'book-01.jpg' } },
  { name: 'Cadastres', book: { img: 'book-01.jpg' } },
  { name: 'Legba', book: { img: 'book-01.jpg' } },
];

export const CatalogSection = () => {
  const [active, setActive] = useState(0);
  const isTouchDevice = !!(
    'ontouchstart' in window || navigator.maxTouchPoints
  );

  // Touch device animations
  const sectionRef = useRef(null);
  const { scrollYProgress: innerScroll } = useScroll({ target: sectionRef });
  const transformedValue = useTransform(innerScroll, [0, 1], [0, 4]);
  useMotionValueEvent(transformedValue, 'change', (latest) => {
    isTouchDevice && setActive(Math.round(latest));
  });

  // Wheel animations
  const innerRef = useRef(null);
  const { scrollYProgress: outerScroll } = useScroll({
    target: innerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(outerScroll, [0, 1], ['80%', '-80%']);
  const x = useTransform(outerScroll, [0, 1], [50, -50]);
  const onHover = (index: number) => {
    !isTouchDevice && setActive(index);
  };

  return (
    <section
      className='catalog-section'
      ref={sectionRef}
      style={{ height: isTouchDevice ? '250vh' : '70vh' }}
    >
      <div className='catalog-section__inner' ref={innerRef}>
        <div className='catalog-section__grid page-grid'>
          <div className='catalog-section__categories-container'>
            <h4 className='catalog-section__title'>Collections</h4>
            <motion.ul
              className='catalog-section__categories'
              style={{ x: isTouchDevice ? 0 : x }}
            >
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    onMouseEnter={() => onHover(index)}
                    className={`catalog-section__link ${
                      active === index ? 'active' : ''
                    }`}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
          <motion.div
            className='catalog-section__book-container'
            style={{ y: isTouchDevice ? 0 : y }}
          >
            <AnimatePresence mode='popLayout'>
              <motion.div
                key={`book.${active}`}
                initial={{ x: '150%' }}
                animate={{ x: 0 }}
                exit={{ x: '150%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <BookLink img={categories[active].book.img} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
