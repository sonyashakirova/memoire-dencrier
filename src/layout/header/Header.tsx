import { motion, useAnimationControls } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { BurgerButton, CartLink, SearchLink } from '../../components/atoms';
import { ColorContext } from '../../providers';
import {
  useScrollDirection,
  useScrollOffset,
  useWindowSize,
} from '../../hooks';
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
  const { width } = useWindowSize();
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
  }, getOffset(width));

  return (
    <header className='header'>
      <div className='header__content'>
        <motion.div
          className='header__top'
          initial={{ y: -100 }}
          animate={headerTopAnimation}
          style={{ color: isMenuOpened ? '#1d1d1b' : headerColor.top }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
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
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <Logo />
        </motion.div>
      </div>
      <Menu open={isMenuOpened} />
    </header>
  );
};

const getOffset = (width: number) => {
  if (width <= 749) {
    return 140;
  } else if (width <= 1199) {
    return 80;
  } else {
    return 66;
  }
};
