import { useEffect, useState } from "react";

export function useDebounce(inputValue: string, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => clearInterval(handler);
  }, [inputValue, delay]);

  return debouncedValue;
}
