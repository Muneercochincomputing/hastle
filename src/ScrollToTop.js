// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top
  }, [pathname]); // Effect runs every time the pathname changes

  return null; // No need to render anything
}

export default ScrollToTop;
