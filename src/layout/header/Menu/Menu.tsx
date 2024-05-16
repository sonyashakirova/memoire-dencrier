import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EmailForm } from '../../../components/atoms';
import { useWindowSize } from '../../../hooks';
import { lenis } from '../../../lenis';
import { NavItem } from './NavItem';
import './Menu.style.css';

const navItems = [
  {
    name: 'Livres',
    link: '/livres',
    sublist: [
      { name: 'Voir la page "Livres"', link: '/livres', touchOnly: true },
      { name: 'Nouveautés', link: '/new' },
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
  { name: 'Contactez-nous', link: '' },
  { name: 'Actualités', link: '' },
  { name: 'Manuscrits', link: '' },
];

interface Props {
  open: boolean;
}

export const Menu = ({ open }: Props) => {
  const { width } = useWindowSize();

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
      <div className='menu__inner' data-lenis-prevent>
        <nav className='menu__navigation' data-lenis-prevent-disabled>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <NavItem visible={open} item={item} index={index} />
              </li>
            ))}
          </ul>
        </nav>
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
        <div className='menu__sidebar'>
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
                      <Link to={c.link}>{c.name}</Link>
                    </motion.li>
                  )}
                </AnimatePresence>
              ))}
            </ul>
          </div>
          <div className='menu__email'>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  exit={{ y: 500 }}
                  transition={{ duration: 0.6 }}
                >
                  <EmailForm
                    size='sm'
                    label='Inscrivez-vous à notre infolettre'
                    onSubmit={(email) => console.log('Email:', email)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
