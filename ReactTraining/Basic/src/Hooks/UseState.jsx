// The [ and ] syntax here is called array destructuring and it lets you read values from an array. The array returned by useState always has exactly two items.

//React renders the local variable from scratch after rendenring it doesn't persist them

// Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions. Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.

// 2 same components in same file have two different states they don't share the states like
// func(<Component/>\n<Component/>)
// Unlike props, state is fully private to the component declaring it.

// “Rendering” is React calling your components.
// On initial render, React will call the root component.
// For subsequent renders, React will call the function component whose state update triggered the render.

// Rendering must always be a pure calculation:
// Same inputs, same output. Given the same inputs, a component should always return the same JSX. (When someone orders a salad with tomatoes, they should not receive a salad with onions!)
// It minds its own business. It should not change any objects or variables that existed before rendering. (One order should not change anyone else’s order.)

// As a component’s memory, state is not like a regular variable that disappears after your function returns. State actually “lives” in React itself—as if on a shelf!—outside of your function

import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </>
  );
}

// now lets understand this example perfectly
// in this one may assume in first 1 goes, in second 2 goes and in third 3 goes but that's not how React batching works

// What actually happens:
// All three setNumber(number + 1) calls are executed synchronously before the render happens.
// Each of them uses the same stale number value, which is 0.
// So all three calls effectively become setNumber(1).
// React batches them together, and sees that all three are trying to update to the same value.
// React applies the final state only once → number becomes 1.

// and the key points for this are:
// State updates using setState(newValue) don't immediately update the variable.
// The actual re-render is scheduled after the event handler (onClick) finishes running.
// Until re-render happens, the state value inside the function stays the same (i.e. number is 0 during all 3 calls).
// This is why the re-render doesn't happen immediately after first setNumber.

// so one may use functional updated here:
// setNumber(prev => prev + 1);
// setNumber(prev => prev + 1);
// setNumber(prev => prev + 1);
// setNumber(42);
// Here’s what happens:
// First call: prev is 0, returns 1
// Second call: prev is 1, returns 2
// Third call: prev is 2, returns 3

// similarly now even in this it will alert 0 in this
// <h1>{number}</h1>
// <button onClick={() => {
// setNumber(number + 5);
// alert(number);
//   }}>+5</button>
// </>

// similarly in this also cause at the time of snapshot it takes 0 as the number
{
  /* <button
  onClick={() => {
    setNumber(number + 5);
    setTimeout(() => {
      alert(number);
    }, 3000);
  }}
>
  +5
</button>; */
}
// React keeps the state values “fixed” within one render’s event handlers. You don’t need to worry whether the state has changed while the code is running.

// This lets you update multiple state variables—even from multiple components—without triggering too many re-renders. But this also means that the UI won’t be updated until after your event handler, and any code in it, completes. This behavior, also known as batching, makes your React app run much faster. It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated.
// React does not batch across multiple intentional events like clicks

// Through React Update queue we are referring to the queue of state updates that React collects (aka batches)
// before re-rendering the component.
// When you call setState (or setNumber from useState):
// The state update doesn't happen immediately.
// React puts the update into a queue (internal data structure).
// After the current synchronous code (like your event handler) finishes, React:
// Looks at the queue of state updates.
// Batches them together to reduce re-renders.
// Applies the final value.
// Then, triggers a re-render of the component.

// so this setState(prev => prev + 1) avoids stale values
// here prev => prev + 1 is called an updated function
// and when you pass it to a state setter
// React queues this function to be processed after all the other code in the event handler has run.
// During the next render, React goes through the queue and gives you the final updated state.
// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
// When you call useState during the next render, React goes through the queue.
// The previous number state was 0, so that’s what React passes to the first updater function as the n argument.
// Then React takes the return value of your previous updater function and passes it to the next updater as n, and so on:
// During the re-render, React will process the queue. Updater functions run during rendering,
// so updater functions must be pure and only return the result.
// Don’t try to set state from inside of them or run other side effects.
// React processes state updates after event handlers have finished running. This is called batching.

