import { useContext, useState } from 'react';
import { BurgerButton } from '../../components/atoms';
import { ColorContext } from '../../providers';
import { Menu } from './Menu';
import './Header.style.css';

export const Header = () => {
  const { headerColor } = useContext(ColorContext);
  const [open, setOpen] = useState(false);

  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__top'>
          <BurgerButton
            color={headerColor.top}
            open={open}
            onClick={() => setOpen((prev) => !prev)}
          />
          <div style={{ color: headerColor.top }}>user navigation</div>
        </div>
        <div className='header__bottom'>
          <div style={{ color: headerColor.bottom }}>Logo</div>
        </div>
      </div>
      <Menu />
    </header>
  );
};
