import { useEffect } from "react";
import { useState } from "react";
const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('hello')
  }, [count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}

export default UseEffect;

// useEffect returns undefined.
