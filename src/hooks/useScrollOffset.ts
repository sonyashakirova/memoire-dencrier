import { useEffect } from 'react';

export const useScrollOffset = (
  callback: (overscroll: number) => void,
  offset: number,
) => {
  const handleScrollOffset = () => {
    const offsetHeight = document.body.offsetHeight - offset;
    const currentScroll = window.innerHeight + window.scrollY;

    if (currentScroll >= offsetHeight) {
      callback(offsetHeight - currentScroll);
    } else {
      callback(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollOffset);

    return () => window.removeEventListener('scroll', handleScrollOffset);
  }, [offset]);
};
