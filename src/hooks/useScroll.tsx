import { useCallback, useEffect, useState } from "react";

const useScroll = () => {
  const [y, setY] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<
    "Up" | "Down" | "Not Moved Yet"
  >("Not Moved Yet");

  const handleNavigation = useCallback(() => {
    if (y > window.scrollY) {
      setScrollDirection("Up");
    } else if (y < window.scrollY) {
      setScrollDirection("Down");
    }
    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return { scrollDirection, scrollPosition: y };
};

export default useScroll;
