import { useContext } from 'react';
import { ColorContext } from '../../providers';
import { Menu } from './Menu';
import './Header.style.css';

export const Header = () => {
  const { headerColor } = useContext(ColorContext);

  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__top'>
          <button style={{ color: headerColor.top }}>burger</button>
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
