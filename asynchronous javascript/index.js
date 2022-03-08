// ASYNCHRONOUS JAVASCRIPT
// async means we don't have it right now
// we need asynchronous code for information we don't have yet
// asynchronous functions are functions that we can execute later
// a promise is an object that may produce a single value some time in the future, either a resolved value, of a reason that it's not resolved (rejected)
// fulfilled, rejected, pending
// before promises was callbacks
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("Error, it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "pookie");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "is it me you are looking for?");
});

Promise.all([promise2, promise3, promise4]).then((values) =>
  console.log(values)
);

promise.then((result) => console.log(result)); //stuff worked

// we runned the promise, and because it was true, it resolved and its result was stuff worked, which was used in then
promise
  .then((result) => result + "!")
  .then((result2) => {
    // throw Error
    console.log(result2);
  })
  .catch(() => console.log("Error!"));

// real world example of the same
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
/*
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log("error"))
*/

// ASYNC AWAIT,
// it is part of the es8, underneath the hood, it makes code easier to read.
// returns a promise under the hood

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((resp) => console.log(resp));

// turning the function above to async functions
async function fetchUsers() {
  // we use the await keyword with anything that returns a promise
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
fetchUsers();

const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls2.map((url) => {
        return fetch(url).then((resp) => resp.json());
      })
    );
    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (err) {
    // console.log(err);
    console.log("OOPS!!!", err);
  }
};
getData();

// object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
};

const { tiger, ...rest } = animals;
console.log(tiger); //23
console.log(rest); //{lion: 5, monkey: 2}

const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
sum(...array); //spreading tha array to individual values

// finally()
// it is a new feature in es2018 which is called once a promise executes completely irregardless of whether it resolves or rejects
const myPromise = new Promise((resolve, reject) => {
  let users = 3;
  if (users > 2) {
    resolve("More than three users online, throw ad");
  } else {
    reject("few users online don't throw an ad");
  }
});

myPromise
  .then((result) => console.log(result))
  .finally(() => console.log("extra information about ads copyright"));

// finally is great in those situations that we need to run a piece of code no matter what

// for await of feature
// it allows us to loop through our async await calls
const doSomething = async function () {
  const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
doSomething();

// web workers in javascript
// a web worker is  a javascript program running on a different thread alongside the main thread

// single core- computer works on one thread, as soon as it is done, it switchs to the next thread and works on something there, etc, it only allows one thread to run at a time. This is called CONCURRENCY

// In multi-core cpu, many more cpus principle where where multiple threads run simultaneously. This is called CONCURRENCY + PARALLELISM

// parallelism is not built in javascript.
const {spawn} = require('child_process')
spawn('git', ['stuff'])
