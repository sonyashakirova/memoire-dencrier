import { RefObject, useEffect, useState } from 'react';

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  margin: string,
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const handler = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIntersecting(entry.isIntersecting);
    };

    const options = {
      root: null,
      rootMargin: margin,
      threshold: 0,
    };

    const observer = new IntersectionObserver(handler, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref.current, margin]);

  return isIntersecting;
};
