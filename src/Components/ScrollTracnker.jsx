import { useState, useEffect } from "react";
import useThrottle from "../hooks/useThrottle";
function ScrollTracker() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  // Create a throttled version of the scroll handler
  const handleScroll = useThrottle(() => {
    setScrollY(window.scrollY);
  }, 200); // run at most once every 200ms

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return <div>Current scroll position: {scrollY}px</div>;
}

export default ScrollTracker;
