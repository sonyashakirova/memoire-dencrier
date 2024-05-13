import { motion, useAnimationControls } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { BurgerButton, CartLink, SearchLink } from '../../components/atoms';
import { ColorContext } from '../../providers';
import { useScrollDirection, useScrollOffset } from '../../hooks';
import { Logo } from './Logo';
import { Menu } from './Menu';
import './Header.style.css';

export const Header = () => {
  const { headerColor } = useContext(ColorContext);
  const [isStartAnimationRunning, setStartAnimationRunning] = useState(true);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const headerTopAnimation = useAnimationControls();
  const headerBottomAnimation = useAnimationControls();
  const direction = useScrollDirection();
  const bottomY = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      headerTopAnimation.start({ y: 0 });
      headerBottomAnimation.start({ y: 0 });
      setStartAnimationRunning(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (direction === 'down' && !isMenuOpened) {
      headerTopAnimation.start({ y: -100 });
    } else if (direction === 'up') {
      headerTopAnimation.start({ y: 0 });
    }
  }, [direction]);

  useEffect(() => {
    if (isMenuOpened) {
      headerBottomAnimation.start({ y: 100 });
    } else if (!isStartAnimationRunning) {
      headerBottomAnimation.start({ y: bottomY.current });
    }
  }, [isMenuOpened, isStartAnimationRunning]);

  useScrollOffset((y) => {
    bottomY.current = y;
    headerBottomAnimation.set({ y });
  }, 100);

  return (
    <header className='header'>
      <div className='header__content'>
        <motion.div
          className='header__top'
          initial={{ y: -100 }}
          animate={headerTopAnimation}
          style={{ color: isMenuOpened ? '#1d1d1b' : headerColor.top }}
        >
          <BurgerButton
            open={isMenuOpened}
            onClick={() => setMenuOpened((prev) => !prev)}
          />
          <div>
            <SearchLink to='/recherche' />
            <CartLink to='/panier' />
          </div>
        </motion.div>
        <motion.div
          className='header__bottom'
          initial={{ y: 100 }}
          animate={headerBottomAnimation}
          style={{ color: headerColor.bottom }}
        >
          <Logo />
        </motion.div>
      </div>
      <Menu open={isMenuOpened} />
    </header>
  );
};
