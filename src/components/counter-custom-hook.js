import { useState } from "react";

const useCounter = (initialState = 1) => {
  const [count, setCount] = useState(initialState);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count <= 1) {
      return;
    }
    setCount((prev) => prev - 1);
  };
  return { count, handleDecrement, handleIncrement };
};

export default useCounter;
