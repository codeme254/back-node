const request = require("./request.js");
const response = require("./response");


function req(url, data) {
  request.send(url, data);
  return response.read();
}

console.log(req("https://google.com", "hello"));
