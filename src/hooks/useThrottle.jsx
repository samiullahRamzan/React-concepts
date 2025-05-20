import { useRef } from "react";

function useThrottle(callback, delay) {
  const lastCall = useRef(0);

  return (...args) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  };
}

export default useThrottle;
