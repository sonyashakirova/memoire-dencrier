import { motion, useScroll, useTransform } from 'framer-motion';
import { SunBackground } from './SunBackground';
import './IntroSection.style.css';

export const IntroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yh1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section className='intro-section'>
      <SunBackground />
      <motion.div className='intro-section__content' style={{ y, scale }}>
        <motion.h1 className='intro-section__title' style={{ y: yh1 }}>
          <span>
            <motion.span
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.8, delay: 1.4 }}
            >
              TOUT PRÈS
            </motion.span>
          </span>
          <span>
            <motion.span
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.8, delay: 1.5 }}
            >
              L'HORIZON
            </motion.span>
          </span>
        </motion.h1>
        <motion.p
          className='intro-section__description'
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.9, duration: 1.2 }}
        >
          Maison d'édition fondée en 2003
        </motion.p>
      </motion.div>
    </section>
  );
};
