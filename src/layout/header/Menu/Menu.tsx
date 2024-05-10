import { motion, useAnimationControls } from 'framer-motion';
import './Menu.style.css';
import { useEffect } from 'react';

const navItems = [
  {
    name: 'Livres',
    link: '',
    subList: [
      { name: 'All', link: '' }, // Touch only
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

interface Props {
  open: boolean;
}

export const Menu = ({ open }: Props) => {
  const bgControls = useAnimationControls();

  useEffect(() => {
    if (open) {
      bgControls.start({ opacity: 1 });
    } else {
      bgControls.start({ opacity: 0 });
    }
  }, [open]);

  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <motion.div
        className='menu__bg'
        animate={bgControls}
        transition={{ duration: 0.6 }}
      />
      <div className='menu__inner' data-lenis-prevent>
        <div className='menu__navigation' data-lenis-prevent-disabled>
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                  {!!item.subList?.length && (
                    <ul>
                      {item.subList.map((subitem, subindex) => (
                        <li key={subindex}>
                          <a href={subitem.link}>{subitem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='menu__side'></div>
      </div>
    </div>
  );
};
