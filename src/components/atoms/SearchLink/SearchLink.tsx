import { Link } from 'react-router-dom';
import './SearchLink.style.css';

interface Props {
  to: string;
}

export const SearchLink = ({ to }: Props) => {
  return (
    <Link
      to={to}
      className='search-link'
      aria-label="Aller à la page 'Recherche'"
    >
      <SearchSVG />
    </Link>
  );
};

const SearchSVG = () => {
  return (
    <svg width='41' height='40' viewBox='0 0 41 40' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.9272 18.2494C25.9272 22.4898 22.4897 25.9274 18.2493 25.9274C14.0088 25.9274 10.5713 22.4898 10.5713 18.2494C10.5713 14.009 14.0088 10.5714 18.2493 10.5714C22.4897 10.5714 25.9272 14.009 25.9272 18.2494ZM25.1025 25.0829C23.3504 26.84 20.9268 27.9274 18.2493 27.9274C12.9043 27.9274 8.57129 23.5944 8.57129 18.2494C8.57129 12.9044 12.9043 8.57141 18.2493 8.57141C23.5943 8.57141 27.9272 12.9044 27.9272 18.2494C27.9272 20.1932 27.3542 22.0032 26.3677 23.5196L32.9359 30.0878L31.5217 31.502L25.1025 25.0829Z'
      />
    </svg>
  );
};
