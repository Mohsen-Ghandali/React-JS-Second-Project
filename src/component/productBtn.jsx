import { useState } from "react";
const Product = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>{format()}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      </>
  );
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }
  
  function format() {
    if (count === 0) {
      return "Null";
    } else {
      return count;
    }
  }
};

export default Product;
