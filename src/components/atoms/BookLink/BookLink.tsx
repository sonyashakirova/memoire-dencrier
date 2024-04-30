import './BookLink.style.css';

interface Props {
  img?: string;
}

export const BookLink = ({ img }: Props) => {
  return (
    <div className='book-link'>
      <div className='book-link__image-container'>
        <img src={`src/assets/images/books/${img}`} alt='#' />
      </div>
    </div>
  );
};
