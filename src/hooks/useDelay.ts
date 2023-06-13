import { useEffect, useState } from "react";

export const useDelay = (duration: number) => {
  const [isDelayed, setIsDelayed] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsDelayed(true);
    }, duration);
    return () => {
      clearInterval(delay);
    };
  }, [duration]);

  return isDelayed;
};
