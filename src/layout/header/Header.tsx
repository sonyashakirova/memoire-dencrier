import { Logo } from './Logo';
import { Menu } from './Menu';
import './Header.style.css';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__top'>
          <button>burger</button>
          <div>user navigation</div>
        </div>
        <div className='header__bottom'>
          <Logo />
        </div>
      </div>
      <Menu />
    </header>
  );
};
