import { motion, useAnimationControls } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { BurgerButton, CartLink, SearchLink } from '../../components/atoms';
import { ColorContext } from '../../providers';
import { useScrollDirection } from '../../hooks';
import { Logo } from './Logo';
import { Menu } from './Menu';
import './Header.style.css';

export const Header = () => {
  const { headerColor } = useContext(ColorContext);
  const [open, setOpen] = useState(false);
  const [startAnimation, setStartAnimation] = useState(true);
  const direction = useScrollDirection();
  const topControls = useAnimationControls();
  const bottomControls = useAnimationControls();
  const [bottomY, setBottomY] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      topControls.start({ y: 0 });
      bottomControls.start({ y: 0 });
      setStartAnimation(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (direction === 'down' && !open) {
      topControls.start({ y: -100 });
    } else if (direction === 'up') {
      topControls.start({ y: 0 });
    }
  }, [direction]);

  useEffect(() => {
    if (open) {
      bottomControls.start({ y: 100 });
    } else if (!startAnimation) {
      bottomControls.start({ y: bottomY });
    }
  }, [open, startAnimation]);

  useEffect(() => {
    const stopBottomScroll = () => {
      const bottomStop = document.body.offsetHeight - 100;
      const currentScroll = window.innerHeight + window.scrollY;

      if (currentScroll >= bottomStop) {
        setBottomY(bottomStop - currentScroll);
        bottomControls.set({ y: bottomStop - currentScroll });
      } else {
        setBottomY(0);
        bottomControls.set({ y: 0 });
      }
    };

    window.addEventListener('scroll', stopBottomScroll);
    return () => window.removeEventListener('scroll', stopBottomScroll);
  }, []);

  return (
    <header className='header'>
      <div className='header__content'>
        <motion.div
          className='header__top'
          initial={{ y: -100 }}
          animate={topControls}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ color: open ? '#1d1d1b' : headerColor.top }}
        >
          <BurgerButton open={open} onClick={() => setOpen((prev) => !prev)} />
          <div>
            <SearchLink to='/recherche' />
            <CartLink to='/panier' />
          </div>
        </motion.div>
        <motion.div
          className='header__bottom'
          initial={{ y: 100 }}
          animate={bottomControls}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Logo />
          {/* <div style={{ color: headerColor.bottom }}>Logo</div> */}
        </motion.div>
      </div>
      <Menu open={open} />
    </header>
  );
};
