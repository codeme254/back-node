const http = require("http");
const { json } = require("stream/consumers");

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Sir Isaac Newton The Great",
  },
  {
    id: 1,
    name: "Sir Albert Einsten",
  },
  {
    id: 2,
    name: "Sir Nicholae tesla",
  },
];

const server = http.createServer((request, response) => {
  const items = request.url.split("/");
  //   /friends/2 => ['', 'friends', '2']
  if (request.method === "POST" && items[1] === "friends") {
    request.on("data", (data) => {
        const friend = data.toString()
        console.log('Request is: ', friend)
        friends.push(JSON.parse(friend))
        request.pipe(response)
    });
  } else if (request.method === "GET" && items[1] === "friends") {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    if (items.length === 3) {
      const friendIndex = parseInt(items[2]);
      response.end(JSON.stringify(friends[friendIndex]));
    } else {
      response.end(JSON.stringify(friends));
    }
  } else if (request.method === "GET" && items[1] === "messages") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<body>");
    response.write("<ul>");
    response.write("<li>Hello Isaac!</li>");
    response.write("<li>what are your thoughts on astronomy</li>");
    response.write("</ul>");
    response.write("</body>");
    response.write("</html>");
    response.end();
  } else {
    response.statusCode = 404;
    console.log("This page was not found");
    console.log(items, items[1]);
    response.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

console.log(JSON.stringify({ name: "dennis otwoma", career: "dev"}));

// the pipe functions reads data from a readable stream and write it to a destination writable stream



