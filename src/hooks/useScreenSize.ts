import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({ 
    width: typeof window !== 'undefined' ? 
      (window.screen.width < window.innerWidth ? window.screen.width : window.innerWidth) : 
      0 
  });

  useEffect(() => {
    const handleReSize = () => {
      setScreenSize({
        width: window.screen.width < window.innerWidth ? 
          window.screen.width : 
          window.innerWidth,
      });
    };

    // Call once to ensure we have the correct initial value
    handleReSize();
    
    window.addEventListener('resize', handleReSize);
    return () => {
      window.removeEventListener('resize', handleReSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
