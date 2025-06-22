// Updating Objects in a state
// Technically, it is possible to change the contents of the object itself. This is called a mutation:
// However, although objects in React state are technically mutable, you should treat them as if they were immutable—like numbers,
// booleans, and strings. Instead of mutating them, you should always replace them.
// In other words, you should treat any JavaScript object that you put into state as read-only.
import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      //   onPointerMove={e => {
      //     position.x = e.clientX;
      //     position.y = e.clientY;
      //   }}
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

//   onPointerMove={e => {
//     position.x = e.clientX;
//     position.y = e.clientY;
//   }}
// now problem is with this without using the state setting function, React has no idea that object has changed.
// So React does not do anything in response.
// To actually trigger a re-render in this case, create a new object and pass it to the state setting function:

// Mutation is only a problem when you change existing objects that are already in state.
// Mutating an object you’ve just created is okay because no other code references it yet.
// Changing it isn’t going to accidentally impact something that depends on it.
// This is called a “local mutation”. You can even do local mutation while rendering.
// Very convenient and completely okay!

import { useImmer } from "use-immer";
export function Form() {
  const [person, setPerson] = useImmer({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  function handleCityChange(e) {
    setPerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input name="email" value={person.email} onChange={handleEmailChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}

// so now here we want the existing data also so in every separate we had to do like this
// function handleFirstNameChange(e) {
//   setPerson({
//   firstName: e.target.value, // New first name from the input
//   lastName: person.lastName,
//   email: person.email
//   });
// }

// but now we can do it with help of spread operator
// setPerson({
//   ...person, // Copy the old fields
//   firstName: e.target.value, // But override this one
// });
// Note that the ... spread syntax is “shallow”—it only copies things one level deep.
// This makes it fast, but it also means that if you want to update a nested property,
// you’ll have to use it more than once.

// now we can do like this single for all
// function handleChange(e) {
//   setPerson({
//     ...person,
//     [e.target.name]: e.target.value,
//   });
// }

// now here you can update a nested object
// const [person, setPerson] = useState({
//   name: "Niki de Saint Phalle",
//   artwork: {
//     title: "Blue Nana",
//     city: "Hamburg",
//     image: "https://i.imgur.com/Sd1AgUOm.jpg",
//   },
// });

// so do this like this populate first the artwork then object like this
// const nextArtwork = { ...person.artwork, city: 'New Delhi' };
// const nextPerson = { ...person, artwork: nextArtwork };
// setPerson(nextPerson);
// or like this
// setPerson({
//   ...person, // Copy other fields
//   artwork: {
//     // but replace the artwork
//     ...person.artwork, // with the same one
//     city: "New Delhi", // but in New Delhi!
//   },
// });

// now we can do flattening and make code like it break rules with use of Immer
