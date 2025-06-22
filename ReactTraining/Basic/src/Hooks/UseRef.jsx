import { useRef, useEffect, useState } from "react";

function UseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count; // Keep ref updated
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Real count:", countRef.current); // ✅ always latest value
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>hello world</div>
    </>
  );
}

export default UseRef;

// useEffect(() => {
//   setInterval(() => {
//     console.log("Count:", count); // ❌ Always logs 0 (stale value)
//   }, 1000);
// }, []);

// now this generates stale closure to resolve this we use functional updates.
// useEffect(() => {
//   const interval = setInterval(() => {
//     setCount((prev) => prev + 1); // ✅ Always has the latest value
//   }, 1000);
//   return () => clearInterval(interval);
// }, []);

// const myRef = useRef(initialValue);
// Like a box that holds a mutable value (myRef.current)
// Doesn’t trigger re-renders
// Perfect for:
// Accessing DOM elements
// Storing a latest value (like count) across renders
// Creating persistent IDs, timers, intervals
