import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const countClick = () => {
    setCount(count + 1);
  };
  return <div>{count} <button onClick={countClick}>+</button></div>;
};

export default Count;