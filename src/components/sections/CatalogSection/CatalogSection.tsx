import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { BookLink } from '../../atoms';
import './CatalogSection.style.css';
import { useRef, useState } from 'react';

const categories = [
  { name: 'Roman/Récit' },
  { name: 'Essai' },
  { name: 'Poésie' },
  { name: 'Cadastres' },
  { name: 'Legba' },
];

export const CatalogSection = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const transformedValue = useTransform(scrollYProgress, [0, 1], [0, 4]);

  useMotionValueEvent(transformedValue, 'change', (latest) => {
    setActive(Math.round(latest));
  });

  return (
    <section className='catalog-section' ref={sectionRef}>
      <div className='catalog-section__inner'>
        <div className='catalog-section__content'>
          <div className='catalog-section__categories'>
            <h4 className='catalog-section__title'>Collections</h4>
            <ul className='catalog-section__list'>
              {categories.map((category, index) => {
                return (
                  <li key={index}>
                    <a
                      className={`catalog-section__link ${
                        active === index ? 'active' : ''
                      }`}
                    >
                      {category.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className='catalog-section__books'>
              <li>
                <BookLink />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
