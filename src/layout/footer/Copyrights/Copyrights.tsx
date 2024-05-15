import { Link } from 'react-router-dom';
import './Copyrights.style.css';

export const Copyrights = () => {
  return (
    <div className='copyrights'>
      <div className='copyrights__inner'>
        <p>© 2024 Mémoire d'Encrier</p>
        <p>
          <Link className='copyrights__link' to='#'>
            Politique de confidentialité
          </Link>
        </p>
        <p>
          <Link className='copyrights__link' to='#'>
            Suivi des données
          </Link>
        </p>
      </div>
      <div className='copyrights__inner'>
        <p>
          Design web par{' '}
          <a className='copyrights__link' href='#'>
            Eva Coste
          </a>{' '}
          propulsé par{' '}
          <a className='copyrights__link' href='#'>
            fatfish
          </a>
        </p>
      </div>
    </div>
  );
};
