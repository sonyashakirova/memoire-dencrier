import { Link } from 'react-router-dom';
import { EmailForm } from '../../components/atoms';
import { Copyrights } from './Copyrights';
import './Footer.style.css';

const navItems = [
  { name: 'Livres', link: '/catalogue' },
  { name: 'À propos', link: '/a-propos' },
  { name: 'Auteur·trice·s', link: '/auteurs' },
  { name: 'Médiathèque', link: '/mediatheque' },
  { name: 'Manuscrits', link: '/manuscrits' },
];
const socials = [
  { name: 'Instagram', link: '#' },
  { name: 'Facebook', link: '#' },
];

export const Footer = () => {
  return (
    <footer className='footer'>
      <EmailForm
        size='lg'
        label='Abonnez-vous à notre infolettre'
        onSubmit={(email) => console.log('Email:', email)}
      />
      <div className='footer__content'>
        <address className='footer__address'>
          <h4 className='footer__subtitle'>Où nous trouver</h4>
          <a>1260, rue Bélanger, Bureau 201 Montréal (Québec) H2S 1H9</a>
        </address>
        <nav className='footer__navigation'>
          <div>
            <h4 className='footer__subtitle'>Explorer</h4>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='footer__subtitle'>Suivez-nous</h4>
            <ul>
              {socials.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <Copyrights />
    </footer>
  );
};
