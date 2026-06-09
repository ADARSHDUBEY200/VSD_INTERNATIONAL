'use client';

import { useState, useEffect } from 'react';

export function useBreakpoint() {
  const [width, setWidth] = useState(1280);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return {
    isMobile:        width < 640,
    isTablet:        width >= 640 && width < 1024,
    isDesktop:       width >= 1024,
    isMobileTablet:  width < 1024,
    isSmallMobile:   width < 480,
    width,
  };
}
