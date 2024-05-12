import { Link } from 'react-router-dom';
import './CartLink.style.css';

const booksCount = 0;

interface Props {
  to: string;
}

export const CartLink = ({ to }: Props) => {
  return (
    <Link className='cart-link' to={to} aria-label="Aller à la page 'Panier'">
      <span className='cart-link__count'>{booksCount}</span>
      <CartSVG />
    </Link>
  );
};

const CartSVG = () => {
  return (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none'>
      <path
        d='M2.85718 11.7142L10 30.2857H30L37.1429 11.7142'
        strokeWidth='2'
      />
    </svg>
  );
};
