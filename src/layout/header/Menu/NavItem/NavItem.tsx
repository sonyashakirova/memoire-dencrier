import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDeviceType } from '../../../../hooks';
import './NavItem.style.css';

interface Item {
  name: string;
  link: string;
  touchOnly?: boolean;
}

interface Props {
  visible: boolean;
  item: Item & { sublist?: Item[] };
  index: number;
}

export const NavItem = ({ visible, item, index }: Props) => {
  const [sublistOpen, setSublistOpen] = useState(false);
  const { isTouchDevice } = useDeviceType();

  return (
    <div
      className='nav-item'
      onMouseEnter={() => !isTouchDevice && setSublistOpen(true)}
      onMouseLeave={() => !isTouchDevice && setSublistOpen(false)}
    >
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: '110%' }}
            animate={{
              y: 0,
              transition: { delay: index * 0.1, duration: 0.6 },
            }}
            exit={{ y: '110%', transition: { duration: 0.4 } }}
          >
            <Link
              className='nav-item__link'
              to={item.link}
              onClick={(e) => {
                if (isTouchDevice && item.sublist?.length) {
                  e.preventDefault();
                  setSublistOpen((prev) => !prev);
                }
              }}
            >
              {item.name}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {visible && sublistOpen && !!item.sublist?.length && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%', transition: { duration: 0.4 } }}
            exit={{ height: 0, transition: { duration: 0.4 } }}
          >
            <ul className='nav-item__sublist'>
              {item.sublist
                .filter(({ touchOnly }) => isTouchDevice || !touchOnly)
                .map((subitem, subindex) => (
                  <li key={subindex}>
                    <Link to={subitem.link}>{subitem.name}</Link>
                  </li>
                ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {visible && sublistOpen && !!item.sublist?.length && (
          <motion.span
            className='nav-item__border'
            initial={{ width: 0 }}
            animate={{
              width: '100%',
              transition: { delay: 0.2, duration: 0.3 },
            }}
            exit={{ width: 0, transition: { duration: 0.3 } }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
