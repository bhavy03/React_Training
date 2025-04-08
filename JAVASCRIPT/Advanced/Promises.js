const cart = ["kurta", "pant", "shirt"];

// this is consumer part
const promise = createOrder(cart);
console.log(promise);
// here this createOrder will return the orderId in promise object
// as we call the createOrder API it will create the new promise and return it

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
    // we can also return a promise that can also be resolved
  })
  // if we want to proccedtoPayment even if cart is not valid we put catch here
  // if we put .catch here it will only have responsibility to check on top of it
  // now no matter what hapens if catch is here this below then will always be called
  .then(function (orderId) {
    return proceedtoPayment(orderId);
  })
  // here callback function is called
  // now by writing return here we are returning a promise which get
  // attached to below .then
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  // when we have promise chain we had to return things down to chain
  // and we had to return from top of chain
  .catch(function (err) {
    console.log(err.message);
  });
// this part is called when we reject the promise we attach failure callback
// if we don't do this we get a red error by doing this
// we gracefully handle our rejection
// the catch here has the responsibility to check error in all .then
// if suppose we have 20 then and only one fails it will show error

// this is producer part
// we can create promise by fetch or
// now we create the createOrder api
function createOrder(cart) {
  // here we create the promise
  // we use new keyword and promise constructor
  // these resolve and reject functions are provided by javascript to build promise
  // it is not something that we pass
  // now we can either reject the promise or resolve it
  // so now if the cart is valid it will throw success as orderId
  // and if cart is not valid it will throw error
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      // if cart is not validated we reject the promise and throw error
      // if cart is not valid the promise object is rejected at line 3 for whoever calling the promise
      const err = new Error("cart is not valid");
      // way to create error
      reject(err);
    }
    // now if everything is ok like cart is validated now we create the logic to createOrder
    const orderId = "12345";
    // so promise can only have two things a resiolve or a reject
    // now if orderId is valid it will make it a success
    if (orderId) {
      // now here we create a fake timer to delay the resolve
      // setTimeout(function () {
      // resolve(orderId)
      // }, 5000)
      resolve(orderId);
    }
  });
  return pr;
  // this is returning the promise that is going to stored in promise object of line 3
}

function validateCart(cart) {
  return true;
  // do return false to get reject
}

function proceedtoPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment successful");
  });
}

// simple example
const promise1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("error,it broke");
  }
});
promise1
  .then((result) => result + "!")
  .then((result2) => {
    // throw Error;
    // console.log(result2)
    result2 + "!";
  })
  .catch(() => console.log("error"))
  .then((result3) => {
    // throw Error
    console.log(result3 + "!");
  });

// output
// stuff worked !?!

const promise2 = new Promise(resolve, (reject) => {
  setTimeout(resolve, 100, "hiiii");
});
const promise3 = new Promise(resolve, (reject) => {
  setTimeout(resolve, 1000, "hiiii");
});
const promise4 = new Promise(resolve, (reject) => {
  setTimeout(resolve, 5000, "hiiii");
});

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});
// now it wait for all promises to resolve

// real life example
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
  .catch((err) => console.log("error", err))
  // now the below line new js syntax
  // it is invoked after everything is done in promise
  .finally(() => console.log("extra"));
// usually takes nothing as input
// generally used when we want to run neccesarily what happens in promise

// new es feature
const promise5 = new Promise(resolve, (reject) => {
  setTimeout(resolve, 1000, "hiiii");
});
const promise6 = new Promise(resolve, (reject) => {
  setTimeout(reject, 1000, "hiiii");
});
Promise.all([promise5, promise6])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => console.log("something failed", e));

// output
// Uncaught (promise in) undefined
// this didn't work cause
// Promise.all works when both resolve at line 153
// now to work it we use catch
// now in new es feature we have
Promise.allSettled([promise5, promise6])
  .then((values) => {
    console.log(values);
  })
  .catch((e) => console.log("something failed", e));
// now output will be array of two promise objects one is fulfilled and one is rejected

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("✅ Promise fulfilled!");
  } else {
    reject("❌ Promise rejected.");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
