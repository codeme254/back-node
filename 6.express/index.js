const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
const PORT = 3000;

// middlwares are special functions that come between the requests coming in and the responses going out, they have a third parameter called next

// registering our middleware
app.use((req, res, next) => {
  const start = Date.now();
  // using the next function because this is a middleware and not the final destination
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta} milliseconds`);
});

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json()); //looks at the content type and sets the request.body to a javascript object when the content type is application/json

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My friends are very clever', 
    caption: 'Let\'s go do some math!',
  })
})
app.use("/friends", friendsRouter); //mounting the friends router on the app object
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});

// Model View Controller desing pattern: architecture and structure of your code
// mvc is a pattern that tells us how to organize various pieces of our code depending on what they do
// in express, the controller is the code or the function that reacts to the incoming reactions and responds accordingly, the model is the data eg the database, it also includes any functions that we use to access that database, the model manipulates/translates how data lives in the storage to how it is used by your application, view is how the data is presented back to the use, sometimes the view can be made of graphs and diagrams. The view can also be the api or the json through which we send the data.
// code should be correct,do what it says it does and understandable, the part of understandable is where the mvc comes in.
// other design patterns grew out of mvc to help capture subtle difference that applicatons have
// they are: model-view-presenter and the mode-view-viewmodel pattern

// in the above code for example, json is the view, contollers are friendsController.postFriend and more like those.

// The user uses the contoller, which manipulates the model, which updates the view and the use sees the final output

// it is advisable to use modules for mvc in node-express projects.

// ROUTERS
// =========
// A router is like a mini-application
// it contains it's own set of middleware and routes
// we use a router to breakdown an application and make it more modular

// REST
// ====
// RESTful APIS
// ============
// -They follow a certain pattern that we use when building http apis
// REST stands for REpresentational State Transfer
// REpresentational and State both refer to how the server maekes your ata available
// The Transfer part talks about how it is sent back to the user
// The general idea is to use the existing standards of the web (http, json, url)
// endpoints should represent collection of data stored on the server side
// use GET, POST, PUT and DELETE
// Requests should be stateless and cachable.

// CRUD
// ====
// The 4 basic operations we can perform on data
// Create, Read, Update, Delete
// the crud operations correspond to http verbs
// Create,, POST
// Read,, GET
//Update/Replace,,PUT
//Delete,, DELETE

// CDN: Content Delivery Network
