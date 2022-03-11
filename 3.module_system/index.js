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

// versioning:
// There is the major version, minor version and the patch version
// 1.Major version is when we make breaking changes to how the package works. It's almost like releasing a completely new package
// 2.Minor version: is for decently sized updates that add functionality but do so without breaking compatibility
// 3.Patch: version that is generated just for smaller bug fixes
// "axios": "0.21.1" 0 is major, 21 is minor and 1 is patch

// package-lock.json is automatically generated when we run any npm commands.
// It is a much more descriptive of dependencies on our package
// ^ allowed to install any version of the package as long as it is not a major version.
// ~ matches patch versions



