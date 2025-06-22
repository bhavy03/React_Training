// this is very basic typescript
let name1: string = "Bhavya";
let age: number = 25;
let isDev: boolean = true;
console.log(name1, age, isDev);

function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Bhavya"));

interface User {
  name: string;
  age: number;
}
const user: User = {
  name: "Alice",
  age: 23,
};
console.log(user.name, user, age);

// Feature          	                 interface	              type
// Extending (Inheritance)	            ✅ Easy (extends)	    ✅ But less clean (&)
// Declaring same name multiple times	✅ Merges automatically	❌ Error
// Preferred in React props	            ✅ (Common practice)	    ✅ Also fine
// Functions, unions, primitives	    ❌ Not allowed	        ✅ Super flexible

// interface User {
//   name: string;
//   age: number;
//   [key: string]: any; // now you can add anything
// }
// Or
// interface User {
//   name: string;
//   age: number;
//   email?: string; // optional
// }

// type Props = { title: string };
// const MyComponent = ({ title }: Props) => {
//     return <h1>{title}</h1>;
//   };

// const fruits: string[] = ["apple", "banana", "mango"];
// or
// const fruits: Array<string> = ["apple", "banana", "mango"];

// const fruits: readonly string[] = ["apple", "banana"];
// fruits.push("kiwi"); ❌ Error: Property 'push' does not exist
// fruits.forEach((fruit: string) => {
//   console.log(fruit.toUpperCase());
// });

// type Fruit = {
//   name: string;
//   color: string;
// };
// const fruits: Fruit[] = [
//   { name: "Apple", color: "Red" },
//   { name: "Banana", color: "Yellow" },
// ];
// fruits.forEach((fruit) => {
//   console.log(`${fruit.name} is ${fruit.color}`);
// });

// type FruitListProps = {
//   fruits: Fruit[];
// };

// const FruitList: React.FC<FruitListProps> = ({ fruits }) => {
//   return (
//     <ul>
//       {fruits.map((fruit) => (
//         <li key={fruit.name}>
//           {fruit.name} - {fruit.color}
//         </li>
//       ))}
//     </ul>
//   );
// };

// // Usage
// const sampleFruits: Fruit[] = [
//   { name: "Apple", color: "Red" },
//   { name: "Mango", color: "Yellow" },
// ];

// <FruitList fruits={sampleFruits} />;
