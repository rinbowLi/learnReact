import { useState, useEffect } from 'react'

function useScrollTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollHandle = () => {
      setScrollY(window.scrollY)
    }
    document.addEventListener("scroll", scrollHandle);
    return () => {
      document.removeEventListener("scroll", scrollHandle)
    }
  }, []);
  return scrollY;
}

export default useScrollTop;