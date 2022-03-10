// node modules: #we cannot build everything by ourselves
// making http requests
// const http = require("https");
// it is advisable to use modern destructuring
const { get } = require("https");

get("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk is ${chunk}`);
  });
  //   end is sent when there is no more data coming from the request
  res.on("end", () => {
    console.log("No more data");
  });
});


// why use modules
    // 1.Reuse existing code---packaging existing code into reusable chunks
    // 2.Organize our code
    // 3.Expose only what will be used

// in node each file is treated as a seperate module
// when we require a module(which is impossible), node resolves to the index.js file inside of that folder. I.E we can require folders and the index.js folder is what will be resolved



