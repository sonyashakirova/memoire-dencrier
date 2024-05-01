import { useContext, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ColorContext } from '../../../providers';
import './AboutSection.style.css';

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const blackoutOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.4]);
  const textY = useTransform(scrollYProgress, [0, 1], ['9rem', '-9rem']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const { setHeaderColor } = useContext(ColorContext);
  const topInView = useInView(sectionRef, { margin: '-4% 0px -94% 0px' });
  const bottomInView = useInView(sectionRef, { margin: '-96% 0px -4% 0px' });

  useEffect(() => {
    setHeaderColor({ top: topInView ? '#ea5a0b' : '#1d1d1b' });
  }, [topInView]);

  useEffect(() => {
    setHeaderColor({ bottom: bottomInView ? '#ea5a0b' : '#1d1d1b' });
  }, [bottomInView]);

  return (
    <motion.section className='about-section' ref={sectionRef}>
      <motion.div
        className='about-section__image-container'
        style={{ y: imageY, scale: imageScale }}
      >
        <img src='src/assets/images/ortense_f-hr-1-1000x711.jpg' alt='hehe' />
        <motion.span
          className='about-section__blackout'
          style={{ opacity: blackoutOpacity }}
        />
      </motion.div>
      <div className='page-grid-xs'>
        <motion.div
          className='about-section__text'
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.p className='color-toner'>
            Mémoire d’encrier est une maison d'édition indépendante fondée en
            2003 par l'écrivain Rodney Saint-Éloi. Le catalogue rassemble, dans
            un souci de cohérence éditoriale, des oeuvres d'auteur·trice·s
            issu·e·s de tous les continents dans une perspective décoloniale.
            Une place spéciale est accordée aux paroles singulières qui
            racontent des histoires que l'on ne raconte pas.
          </motion.p>
          <p className='about-section__link'>
            <a href='#'>En savoir plus</a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};
