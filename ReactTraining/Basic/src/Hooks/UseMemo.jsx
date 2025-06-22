// import { useMemo } from "react";

function UseMemo() {
//   const myObj = useMemo(() => ({ x: 10 }), []);
  return (
    <>
      <div>hello world</div>
    </>
  );
}
export default UseMemo;

// useMemo(() => computeExpensiveValue, deps) returns the memoized result of a computation, only re-running when dependencies change.

// (for values like objects/arrays)
// React only creates the object once.
// On re-render, it reuses the same object (unless deps change).
// 🔒 Great for dependency arrays in useEffect.
// use it when
// You have an object/array that you use in deps or pass to child components.
// You want to avoid unnecessary re-renders or re-runs of effects.
