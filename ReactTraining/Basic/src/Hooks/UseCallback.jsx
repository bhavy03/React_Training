// import { useCallback } from "react";

function UseCallback() {
  //   const handleClick = useCallback(() => {
  //     console.log("clicked");
  //   }, []);

  return (
    <>
      <div>hello callback</div>
    </>
  );
}
export default UseCallback;

// useCallback(fn, deps) returns the same function instance between renders unless one of the dependencies changes.

// for functions
// React remembers this function between renders.
// Good for when you pass functions as props to avoid child re-rendering.
// Also helps avoid stale closures inside useEffect.
// Use it when:
// You're passing a function to a child component.
// You're using functions inside useEffect, and you want React to know they didn’t change.

// ❌ Wrong: count is not in dependency, will always log 0 (initial value)
//  const logCountIncorrectly = useCallback(() => {
//     console.log("❌ Incorrect: Count is", count);
//   }, []); // No dependency
// this generates stale data
