import { Copyrights } from './Copyrights';
import { NewsletterForm } from './NewsletterForm';
import './Footer.style.css';

export const Footer = () => {
  return (
    <footer className='footer page-grid-sm'>
      <div className='footer__wrapper'>
        <NewsletterForm />
        <div className='footer__content'>
          <address className='footer__address'>
            <h4>Où nous trouver</h4>
            <a>1260, rue Bélanger, Bureau 201 Montréal (Québec) H2S 1H9</a>
          </address>
          <nav className='footer__navigation'>
            <div>
              <h4>Explorer</h4>
              <ul>
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
              <h4>Suivez-nous</h4>
              <ul>
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
