// import { useState } from "react";

const title = <h1>Hello world</h1>;
const handleClick = () => alert("Hello world!");
const button = <button onClick={handleClick}>Click here</button>;
const handleMouseOver = (event) => (event.target.style.color = "purple");
const button2 = (
  <div onMouseOver={handleMouseOver}>Drag here to change color</div>
);

function NewApp() {
  return (
    <>
      <div>Hello there</div>
    </>
  );
}

function First() {
  //   const [count, setCount] = useState(0);
  const title2 = <h1>Hello world</h1>;
  return (
    <>
      <div>{button}</div>
      <div>{title}</div>
      <div>{title2}</div>
      <div>{button2}</div>
      <div>Hello world</div>
      <Gallery />
      <Props />
    </>
  );
}

export default First;

// function names starts with capital letters
// Components can render other components, but you must never nest their definitions:
// can provide any name in default export on importing
// JSX is a syntax extension, while React is a JavaScript library.
// JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array. This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

// Since children can’t send data directly to parents, we give them a function as a prop, and they call it with the data.
// Think of it like:
// “Hey child, here’s a walkie-talkie. If something happens, press the button and tell me!”


// <button onClick={handleClick}> right way
// now this is correct as it tells the react to remember it and only call your function when the user clicks the button
// <button onClick={handleClick()}>  wrong way
// the () at the end of handleClick() fires the function immediately during rendering, without any clicks. This is because JavaScript inside the JSX { and } executes right away.