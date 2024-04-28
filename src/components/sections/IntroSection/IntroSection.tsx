import { motion } from 'framer-motion';
import { SunBackground } from './SunBackground';
import './IntroSection.style.css';

export const IntroSection = () => {
  return (
    <section className='intro'>
      <SunBackground />
      <div className='intro__content'>
        <h1 className='intro__title'>
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
        </h1>
        <motion.p
          className='intro__description'
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.9, duration: 1.2 }}
        >
          Maison d'édition fondée en 2003
        </motion.p>
      </div>
    </section>
  );
};
