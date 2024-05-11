import { MouseEvent, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import './ArrowLink.style.css';

interface Props extends PropsWithChildren {
  as?: 'a' | 'button';
  to?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

export const ArrowLink = ({
  children,
  as = 'a',
  to = '#',
  type = 'button',
  onClick,
}: Props) => {
  return as === 'button' ? (
    <button className='arrow-link' onClick={onClick} type={type}>
      {children}
      <AnimatedArrow />
    </button>
  ) : (
    <Link className='arrow-link' to={to}>
      {children}
      <AnimatedArrow />
    </Link>
  );
};

const AnimatedArrow = () => {
  return (
    <span className='animated-arrow'>
      <span className='animated-arrow__inner'>
        <ArrowSVG />
        <ArrowSVG />
      </span>
    </span>
  );
};

const ArrowSVG = () => {
  return (
    <svg className='arrow' viewBox='0 0 33 8' fill='none'>
      <path d='M0 4H32' />
      <path d='M29 1L32 4L29 7' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};
