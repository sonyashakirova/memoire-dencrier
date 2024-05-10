import { motion } from 'framer-motion';
import './BurgerButton.style.css';

interface Props {
  open: boolean;
  onClick: () => void;
  color?: string;
}

export const BurgerButton = ({ open, onClick, color }: Props) => {
  return (
    <button
      type='button'
      className={`burger ${open ? 'open' : ''}`}
      onClick={onClick}
      aria-label='Open menu'
    >
      <motion.span
        className='burger__line'
        style={{ backgroundColor: color }}
      />
      <motion.span
        className='burger__line'
        style={{ backgroundColor: color }}
      />
      <motion.span
        className='burger__line'
        style={{ backgroundColor: color }}
      />
    </button>
  );
};
