// Just like objects arrays should also be treated as readonly so shouldn't reassign items inside array and also shouldn't use methods like push and pop that mutates the array.
// so we should prefer methods like concat, filter, slice, map and reduce
import { useState } from "react";

let nextId = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          //   artists.push({
          //     id: nextId++,
          //     name: name,
          //   });
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

// now in this example we are directly mutating the array using push()
// This does not create a new array — React uses reference comparison (===) to check whether state has changed.
// Since the reference of the artists array hasn't changed (you're still using the same array in memory), React says:
// “Oh, nothing changed! No need to re-render.” 🤷‍♂️

// Put old items at the end
// setArtists([{ id: nextId++, name: name },...artists]);

// The easiest way to remove an item from an array is to filter it out. In other words, you will produce a new array that will not contain that item
// setArtists(artists.filter((a) => a.id !== artist.id));

// This is how to insert in between the array
// function handleClick() {
//   const insertAt = 1; // Could be any index
//   const nextArtists = [
//     // Items before the insertion point:
//     ...artists.slice(0, insertAt),
//     // New item:
//     { id: nextId++, name: name },
//     // Items after the insertion point:
//     ...artists.slice(insertAt),
//   ];
//   setArtists(nextArtists);
//   setName("");
// }

// now to apply methods like reverse and sort we first duplicate and then apply
// function handleClick() {
//   const nextList = [...list];
//   nextList.reverse();
//   setList(nextList);
// }
// cause nextList[0] and list[0] both point to same object

// Objects are not really located “inside” arrays. They might appear to be “inside” in code, but each object in an array is a separate value, to which the array “points”. This is why you need to be careful when changing nested fields like list[0]. Another person’s artwork list may point to the same element of the array!
// When updating nested state, you need to create copies from the point where you want to update, and all the way up to the top level.

// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function BucketList() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(
//     initialList
//   );

//   function handleToggleMyList(artworkId, nextSeen) {
//     const myNextList = [...myList];
//     const artwork = myNextList.find(
//       a => a.id === artworkId
//     );
//     artwork.seen = nextSeen;
//     setMyList(myNextList);
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//     const yourNextList = [...yourList];
//     const artwork = yourNextList.find(
//       a => a.id === artworkId
//     );
//     artwork.seen = nextSeen;
//     setYourList(yourNextList);
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={myList}
//         onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList
//         artworks={yourList}
//         onToggle={handleToggleYourList} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// const myNextList = [...myList];
// const artwork = myNextList.find(a => a.id === artworkId);
// artwork.seen = nextSeen; // Problem: mutates an existing item
// setMyList(myNextList);

// Although the myNextList array itself is new, the items themselves are the same as in the original myList array. So changing artwork.seen changes the original artwork item. That artwork item is also in yourList, which causes the bug. Bugs like this can be difficult to think about, but thankfully they disappear if you avoid mutating state.

// You can use map to substitute an old item with its updated version without mutation.

// setMyList(myList.map(artwork => {
//   if (artwork.id === artworkId) {
//     // Create a *new* object with changes
//     return { ...artwork, seen: nextSeen };
//   } else {
//     // No changes
//     return artwork;
//   }
// }));

// now this is with immer
// updateMyTodos((draft) => {
//   const artwork = draft.find((a) => a.id === artworkId);
//   artwork.seen = nextSeen;
// });

// in react we use declarative ui that means sits in taxi and it reaches us to our destination and the other is imperative ui which is like giving instructions where to go and turn

// Displaying many visual states at once
// If a component has a lot of visual states, it can be convenient to show them all on one page:
// and these pages are called living styleguides and storybooks

// const props = {
//     value: 'Mary',
//     onChange: handleChange
//   };

//   <input {...props} />
//   ⏩ This is equivalent to:

//   jsx
//   Copy
//   Edit
//   <input value="Mary" onChange={handleChange} />

// So it unpacks all key-value pairs from the object and spreads them into JSX as props. This is called props spreading.
// these are examples of destructuring
// const person = {
//   name: "Bhavya",
//   age: 22,
//   city: "Udaipur",
// };

// const { name, city } = person;
// console.log(name); // Bhavya
// console.log(city); // Udaipur
// const { name: firstName } = person;
// console.log(firstName); // Bhavya

// const arr = [10, 20, 30];
// const [a, b] = arr;
// console.log(a); // 10
// console.log(b); // 20

// function greet({ name, age }) {
//   console.log(`Hello, ${name}! You are ${age} years old.`);
// }
// const user = { name: "Ankit", age: 23 };
// greet(user); // Hello, Ankit! You are 23 years old.

// const arr1 = [1, 2];
// const arr2 = [...arr1, 3]; // [1, 2, 3]
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };  { a: 1, b: 2, c: 3 }

// const settings = {
//   theme: "dark",
//   fontSize: 14,
// };
// const updated = {
//   ...settings,
//   fontSize: 16,
// };
// console.log(updated); // { theme: 'dark', fontSize: 16 }

// const commonProps = { onClick: handleClick, disabled: false };
// <Button {...commonProps} label="Click me" />;
