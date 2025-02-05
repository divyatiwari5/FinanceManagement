'use client';

import { useEffect, useState } from 'react';
import useScreenSize from './useScreenSize';

const useDeviceType = () => {
  const screenSize = useScreenSize();
  const [deviceType, setDeviceType] = useState('desktop');
  useEffect(() => {
    if (screenSize.width < 768) {
      setDeviceType('mobile');
    } else if (screenSize.width >= 768 && screenSize.width <= 850) {
      setDeviceType('tab');
    } else {
      setDeviceType('desktop');
    }
  }, [screenSize]);

  return deviceType;
};

export default useDeviceType;
