import { BookLink } from '../../atoms';
import './NewArrivalsSection.style.css';

export const NewArrivalsSection = () => {
  return (
    <section className='new-arrivals'>
      <div className='new-arrivals__wrapper'>
        <h2 className='new-arrivals__title'>
          <span>Nouveautés</span>
        </h2>
        <ul className='new-arrivals__books'>
          <li>
            <BookLink />
          </li>
          <li>
            <BookLink />
          </li>
          <li>
            <BookLink />
          </li>
        </ul>
        <a className='new-arrivals__link'>Découvrir tous nos livres</a>
      </div>
    </section>
  );
};
