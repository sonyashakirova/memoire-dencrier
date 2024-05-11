import { Copyrights } from './Copyrights';
import { EmailForm } from '../../components/atoms';
import './Footer.style.css';

export const Footer = () => {
  return (
    <footer className='footer page-grid-sm'>
      <div className='footer__wrapper'>
        <EmailForm
          size='lg'
          color='#5525a9'
          label='Abonnez-vous à notre infolettre'
          onSubmit={(email) => console.log('Email:', email)}
        />
        <div className='footer__content'>
          <address className='footer__address'>
            <h4 className='footer__subtitle'>Où nous trouver</h4>
            <a className='footer__text'>
              1260, rue Bélanger, Bureau 201 Montréal (Québec) H2S 1H9
            </a>
          </address>
          <nav className='footer__navigation'>
            <div>
              <h4 className='footer__subtitle'>Explorer</h4>
              <ul className='footer__text'>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>2</a>
                </li>
                <li>
                  <a>3</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='footer__subtitle'>Suivez-nous</h4>
              <ul className='footer__text'>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>2</a>
                </li>
                <li>
                  <a>3</a>
                </li>
              </ul>
            </div>
          </nav>
          <ul className='footer__partners'>
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
          </ul>
        </div>
        <Copyrights />
      </div>
    </footer>
  );
};
