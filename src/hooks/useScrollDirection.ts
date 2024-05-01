import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  let oldScrollY = 0;

  const [direction, setDirection] = useState('down');

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection('down');
    } else {
      setDirection('up');
    }

    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);

    return () => {
      window.removeEventListener('scroll', controlDirection);
    };
  }, []);

  return direction;
};
