import { BookLink } from '../../atoms';
import './CatalogSection.style.css';

export const CatalogSection = () => {
  return (
    <section className='catalog'>
      <div className='catalog__wrapper'>
        <div>
          <h4>Collections</h4>
          <ul className='catalog__categories'>
            <li>
              <a>Roman/Récit</a>
            </li>
            <li>
              <a>Essai</a>
            </li>
            <li>
              <a>Poésie</a>
            </li>
            <li>
              <a>Cadastres</a>
            </li>
            <li>
              <a>Legba</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className='catalog__books'>
            <li>
              <BookLink />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
