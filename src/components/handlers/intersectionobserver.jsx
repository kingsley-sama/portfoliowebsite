import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useColor } from './usecontext';
export const useIntersectionObserver = () => {
  const { setGreenState } = useColor();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setGreenState(inView);
  }, [inView, setGreenState]);

  return ref;
};
