import { Link } from 'react-router-dom';
import './Book.style.css';

interface Props {
  title: string;
  author: string;
  category: string;
  link: string;
  img: string;
}

export const Book = (book: Props) => {
  const imgUrl = new URL(
    `../../../assets/images/books/${book.img}`,
    import.meta.url,
  );

  return (
    <div className='book'>
      <div className='book__image-container'>
        <img src={imgUrl.href} alt={book.title} />
        <Link
          className='book__link'
          to={`/catalogue${book.link}`}
          aria-label='Voir le livre'
        >
          <div className='book__info'>
            <span className='book__info-surtitle'>{book.category}</span>
            <h3 className='book__info-title'>{book.title}</h3>
            <span className='book__info-subtitle'>{book.author}</span>
          </div>
          <span className='book__link-label'>Voir le livre</span>
        </Link>
      </div>
    </div>
  );
};
