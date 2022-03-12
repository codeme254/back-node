const express = require("express");

const app = express();
const PORT = 3000;

// middlwares are special functions that come between the requests coming in and the responses going out, they have a third parameter called next

const friends = [
  { id: 0, name: "Isaac Newton" },
  { id: 1, name: "Ryan Dahl" },
  { id: 2, name: "Albert Einsten" },
  { id: 3, name: "ada lovelace" },
];

// registering our middleware
app.use((req, res, next) => {
  const start = Date.now();
  // using the next function because this is a middleware and not the final destination
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta} milliseconds`);
});
// app.method("route", routeHandlerFunction)

app.use(express.json()); //looks at the content type and sets the request.body to a javascript object when the content type is application/json
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    //   we can as well return:
    res.status(400).json({
      error: "Missing friend name",
    });
  } else {
    const newFriend = {
      id: friends.length,
      name: req.body.name,
    };
    friends.push(newFriend);
    res.json(newFriend);
  }
});
app.get("/", (req, res) => {
  res.send("Heeelloooowww");
});
app.get("/friends", (req, res) => {
  res.status(200).json(friends); //the data will be treated as json
});
app.get("/friends/:friendId", (req, res) => {
  const frinedId = Number(req.params.friendId);
  const friend = friends[frinedId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "friend does not exist",
    });
  }
});
app.get("/messages", (req, res) => {
  res.send("['message1', 'message 2', 'message 3']");
});

app.post("/messages", (req, res) => {
  res.send("Updating messages...");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});


// Model View Controller desing pattern: architecture and structure of your code
// mvc is a pattern that tells us how to organize various pieces of our code depending on what they do
// in express, the controller is the code or the function that reacts to the incoming reactions and responds accordingly, the model is the data eg the database, it also includes any functions that we use to access that database, the model manipulates/translates how data lives in the storage to how it is used by your application, view is how the data is presented back to the use, sometimes the view can be made of graphs and diagrams. The view can also be the api or the json through which we send the data.
// code should be correct,do what it says it does and understandable, the part of understandable is where the mvc comes in.
// other design patterns grew out of mvc to help capture subtle difference that applicatons have
// they are: model-view-presenter and the mode-view-viewmodel pattern
