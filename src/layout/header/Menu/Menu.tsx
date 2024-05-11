import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDeviceType, useWindowSize } from '../../../hooks';
import { lenis } from '../../../lenis';
import './Menu.style.css';

const navItems = [
  {
    name: 'Livres',
    link: '',
    sublist: [
      { name: 'Voir la page "Livres"', link: '', touchOnly: true },
      { name: 'Nouveautés', link: '' },
      { name: 'Roman/Récit', link: '' },
      { name: 'Essai', link: '' },
      { name: 'Poésie', link: '' },
      { name: 'Cadastres', link: '' },
      { name: 'Legba', link: '' },
    ],
  },
  { name: 'À propos', link: '' },
  { name: 'Auteur·trice·s', link: '' },
  { name: 'Médiathèque', link: '' },
];
const socials = [
  { name: 'Instagram', link: '' },
  { name: 'Facebook', link: '' },
];
const contacts = [
  { name: '1', link: '' },
  { name: '2', link: '' },
  { name: '3', link: '' },
];

interface Props {
  open: boolean;
}

export const Menu = ({ open }: Props) => {
  const { width } = useWindowSize();
  const [sublist, setSublist] = useState(false);
  const { isTouchDevice } = useDeviceType();

  useEffect(() => {
    if (open) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [open]);

  return (
    <div className={`menu ${open && 'open'}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            className='menu__bg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>
      <div id='menu' className='menu__inner' data-lenis-prevent>
        <div className='menu__navigation' data-lenis-prevent-disabled>
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className='menu__nav-link'
                  onMouseEnter={() => !isTouchDevice && setSublist(true)}
                  onMouseLeave={() => !isTouchDevice && setSublist(false)}
                >
                  <AnimatePresence>
                    {open && (
                      <motion.a
                        href={item.link}
                        onClick={(e) => {
                          if (isTouchDevice && item.sublist?.length) {
                            e.preventDefault();
                            setSublist((prev) => !prev);
                          }
                        }}
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        exit={{ y: 50 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                      >
                        {item.name}
                      </motion.a>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {open && sublist && !!item.sublist?.length && (
                      <motion.ul
                        className='menu__sublist'
                        initial={{ height: 0 }}
                        animate={{ height: item.sublist.length * 24 }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.sublist
                          .filter((item) => isTouchDevice || !item.touchOnly)
                          .map((subitem, subindex) => (
                            <li key={subindex}>
                              <a href={subitem.link}>{subitem.name}</a>
                            </li>
                          ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {open && sublist && !!item.sublist?.length && (
                      <motion.div
                        className='menu__subline'
                        initial={{ width: 0 }}
                        animate={{ width: '100%', transition: { delay: 0.3 } }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='menu__line-container'>
          <AnimatePresence>
            {open && (
              <motion.div
                className='menu__line'
                initial={width > 479 ? { y: '-100%' } : { x: '-100%' }}
                animate={width > 479 ? { y: 0 } : { x: 0 }}
                exit={width > 479 ? { y: '100%' } : { x: '-100%' }}
                transition={{ duration: 0.6 }}
              />
            )}
          </AnimatePresence>
        </div>
        <div className='menu__side'>
          <div>
            <ul className='menu__socials'>
              {socials.map((s, index) => (
                <AnimatePresence key={`socials.${index}`}>
                  {open && (
                    <motion.li
                      initial={{ x: -500 }}
                      animate={{ x: 0 }}
                      exit={{ x: -500 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <a href={s.link}>{s.name}</a>
                    </motion.li>
                  )}
                </AnimatePresence>
              ))}
            </ul>
            <ul className='menu__contacts'>
              {contacts.map((c, index) => (
                <AnimatePresence key={`contacts.${index}`}>
                  {open && (
                    <motion.li
                      initial={{ x: -500 }}
                      animate={{ x: 0 }}
                      exit={{ x: -500 }}
                      transition={{
                        duration: 0.6,
                        delay: (socials.length + index) * 0.05,
                      }}
                    >
                      <a href={c.link}>{c.name}</a>
                    </motion.li>
                  )}
                </AnimatePresence>
              ))}
            </ul>
          </div>
          <div className='menu__email'>
            <AnimatePresence>
              {open && (
                <motion.form
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  exit={{ y: 500 }}
                  transition={{ duration: 0.6 }}
                >
                  <label htmlFor='email-input' className='menu__email-label'>
                    Inscrivez-vous à notre infolettre
                  </label>
                  <input
                    className='menu__email-input'
                    id='email-input'
                    type='text'
                    placeholder='email'
                  />
                  <button type='submit' className='menu__email-submit'>
                    Submit
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
