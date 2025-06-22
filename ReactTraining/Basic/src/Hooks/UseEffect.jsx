import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Unmounted");
      clearInterval(interval);
    };
  }, [running]); // re-run useEffect when running changes

  return (
    <>
      <h2>Timer: {seconds}s</h2>
      <button onClick={() => setRunning(false)}>Stop</button>
    </>
  );
}
// 🟢 1. INITIAL MOUNT (running = true)
//     |
//     |-- useEffect runs
//     |     |
//     |     |-- running is true
//     |     |-- ⏱️ setInterval() starts
//     |     |-- ✅ cleanup function saved for future
//     |
//     |-- UI: Timer showing on screen

// --------------------------------------

// 🟡 2. STATE CHANGES (click "Stop" → running = false)
//     |
//     |-- BEFORE new effect:
//     |     |
//     |     |-- React runs cleanup from PREVIOUS effect
//     |     |-- 🧹 clearInterval()
//     |     |-- 🖨️ console.log("Unmounted")
//     |
//     |-- React now re-runs useEffect (because [running] changed)
//     |     |
//     |     |-- running is false ❌
//     |     |-- useEffect returns early (skips new setInterval)
//     |
//     |-- UI still shows: Timer with last value + "Stop" button

// --------------------------------------

// 🔴 3. IF COMPONENT UNMOUNTS
//     |
//     |
//     |-- React runs LAST cleanup function (if any)
//     |     |
//     |     |-- In this case: nothing, because effect didn’t do anything last time

// On Re-render (when dependency changes)
// Before running the new useEffect, React calls the last saved cleanup function.
// Then it runs your useEffect again with the new dependency.
// And again saves the new cleanup function.
// 💡 So React tracks the previous cleanup function and calls it just before running a new one!

// Render Cycle 1:  running = true
// └── useEffect runs ➜ sets up interval ➜ saves cleanup function
// Render Cycle 2: running = false (state changed)
// └── React: 🧹 calls previous cleanup (clearInterval)
// └── useEffect runs again ➜ skips setup (due to `if (!running) return`)
// Render Cycle 3: (component unmounts)
// └── React: 🧹 runs latest cleanup (if any)

// Think of useEffect like setting up a tent 🎪:
// Every time the weather (dependencies) changes, you take down the old tent (cleanup), then put up a new one (new setup).
// If the weather didn’t change → no action.
// If you're leaving the camp (unmounting), you clean it all up!

// 👶 Child Component
function Message() {
  useEffect(() => {
    console.log("Message component mounted ✅");

    return () => {
      console.log("Message component unmounted ❌");
    };
  }, []);

  return <h2>Hello Bhavya!</h2>;
}

// 👑 Parent Component
function Hooks() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? "Hide" : "Show"} Message
      </button>

      {showMessage && <Message />}
    </div>
  );
}

export default Hooks;

// Always list all external variables
// Use useCallback/useMemo for fns/objs
// Use setX(prev => …) when needed

// Don't Ignore used variables
// Don't Create functions inline inside useEffect
// Don't Assume your closure always updates

// why useeffect fails in functions and dependencies
// useEffect(() => {
//   console.log("Effect ran");
// }, [{ x: 10 }]); // ❌

// Objects and functions in JS are compared by reference, not content.
// so in this Even if you write { x: 10 } twice, they're treated like different houses with identical furniture.
// 🧠 Result: React sees a new object/function → effect runs again → possibly causing unwanted loops or performance hits.
// therefore useMemo and useCallback helps React remember the same object or function between renders — like a smart cache 🧠

// Feature	    When to Use               	   What It Prevents
// useMemo	    For caching objects/arrays	   Unwanted useEffect calls or re-renders
// useCallback	For caching functions	Stale    closures, child re-renders, re-effects
// and we also can't change callback for ojects and memo for functions like
// if in callback object passed then we have to call the obj as function
// lly if function passes in memo then it works but not recommended

// example

// function Child({ onClick, data }) {
//   useEffect(() => {
//     console.log("🔁 useEffect ran due to prop change!");
//   }, [onClick, data]);
//   return (
//     <>
//       <h3>Child Component</h3>
//       <button onClick={onClick}>Child Button</button>
//     </>
//   );
// }

// function Parent() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     console.log("Button clicked");
//   };
//   const data = { name: "Bhavya" };
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount((c) => c + 1)}>Increment</button>
//       <Child onClick={handleClick} data={data} />
//     </div>
//   );
// }

// now what happens even if we just change the count, the Child's useEffect runs every single time.
// because as count is changed the parent is re-rendered and creates new handleclick and data
// and then they are passed as props so props changed and they are in deps array
// therefore useEffect ran everytime count changed

// so to resolve this do this

// in parent
// const handleClick = useCallback(() => {
//   console.log("Button clicked");
// }, []);
// const data = useMemo(() => ({ name: "Bhavya" }), []);

// now to solve the problem of stale closure we use useRef
// A stale closure means a function "remembers" old values of variables,
// even though the component has re-rendered and those variables have new values.
