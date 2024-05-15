import './BookLink.style.css';

interface Props {
  img?: string;
}

export const BookLink = ({ img }: Props) => {
  const imgUrl = new URL(
    `../../../assets/images/books/${img}`,
    import.meta.url,
  );

  return (
    <div className='book-link'>
      <div className='book-link__image-container'>
        <img src={imgUrl.href} alt='#' />
      </div>
    </div>
  );
};
