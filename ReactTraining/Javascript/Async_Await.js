// Async Await is part of ES8 built on top of promises
// async under the hood returns the promise but the code is easier to read

// by promise
moveplayer(100, "left")
  .then(() => moveplayer(400, "right"))
  .then(() => moveplayer(100, "left"))
  .then(() => moveplayer(433, "right"));

// by async await
async function playerStart() {
  // we declare this playerstart function as async
  await moveplayer(100, "left");
  // now this await says pause the function until i have something for you
  // and you can use this await keyword in front of any function that returns promise
  // and once promise is resolved function moves to next line
  await moveplayer(400, "right");
  // here we can assign it a variable like
  const third = await moveplayer(100, "left");
  await moveplayer(433, "right");
}

// by promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then(console.log);

// now by async await
async function fetchusers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}
fetchusers();

// by promise
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));

// by async await
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((resp) => resp.json());
      })
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops", err);
  }
};
getData();

// new es feature for await of
// like for of loop which allows us to iterate over iterables
// for await of is used to iterate over the multiple awaits
// we use the above examples of urls
const loopThroughUrls = (url) => {
  for (url of urls) {
    console.log(url);
  }
};
loopThroughUrls(urls);
// by using this logic

const getdata2 = async function () {
  const arrayofPromises = urls.map((url) => fetch(url));
  for await (let request of arrayofPromises) {
    const data = await request.json();
    console.log(data);
  }
};
getdata2();

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("✅ Got User");
//       resolve({ name: "Bhavya" });
//     }, 2000);
//   });
// }

// async function showData() {
//   console.log("Start");
//   const user = await getUser(); // this waits 2 sec
//   console.log("User:", user);
// }

// showData();
// console.log("This runs while waiting!"); // still runs immediately!
// Start
// This runs while waiting!
// ✅ Got User   (after 2 sec)
// User: { name: 'Bhavya' }
// The reason is because await suspends the execution of the entire async function at that point.

// async function slowSteps() {
//   const a = await delay(1000); // waits 1 sec
//   const b = await delay(1000); // waits another 1 sec
//   console.log("✅ Done in ~2 seconds");
// }
// this is parallel with promise.all
// async function fastSteps() {
//     const [a, b] = await Promise.all([delay(1000), delay(1000)]);
//     console.log("⚡ Done in ~1 second");
//   }