import { motion } from 'framer-motion';
import './BurgerButton.style.css';

interface Props {
  open: boolean;
  onClick: () => void;
}

export const BurgerButton = ({ open, onClick }: Props) => {
  return (
    <button
      type='button'
      className={`burger ${open && 'open'}`}
      onClick={onClick}
      aria-label='Open menu'
    >
      <motion.span className='burger__line' />
      <motion.span className='burger__line' />
      <motion.span className='burger__line' />
    </button>
  );
};
