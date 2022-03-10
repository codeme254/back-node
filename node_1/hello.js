const mission = process.argv[2];
// process.argv will return an array containing the command line arguements passed when the node.js process was launched
// we run this file with node hello.js
// ['node', 'hello'] is our process.argv
if (mission == "Learn") {
  console.log("Time to write some node code");
} else {
  console.log(`is ${mission} really more fun.`);
}
// node is kept upto date in relation to the v8 engine which is in turn kept upto date witht the ecmascript
// window in the browser, global in node
// browser has document, history, location, navigator
// node had process, module, __dirname, require()
// require() function is used to import modules that help us to do what the browser wouldn't be able to do, eg reading files, servers etc
// client and server, frontend and backend.
// frontend is what the user sees and backend is behind the scenes eg security features, authentication etc
// the language that the client and server use to communicate to each other is called http/https. Https is a secure version of the https protocol
// backends can be made with any languages of runtimes that we want eg node, python, java, go, ruby, flask etc. this code is called backend code

// what does node.js include and do?
// (fs, http, path, crypto)
// bindings that allow javascript call functionalities implemented using C and C++
// these functionalities live in Libuv
// libuv and v8 are very important to node
// libuv deals with input and output tasks, it is written in C/C++

// synchronous vs asynchronous
// asynchronous code is code that doesn't necessary run line by line
// synchronous code runs line by  line

// ASYNCHRONOUS CALLBACKS
// Node js is an asynchronous event driven javascript runtime
setTimeout(() => console.log("Rabbit finishing"), 0);
console.log("Turtle finishes");

// Non blocking functions
// they execute in background or even in parallel with the rest of the code
// javascript is asynchronous language

// multithreading, processes and threads
// the way that we take advatage of multiple cores to run our programs faster is by using threads
// we run the proces(s), processes are containers containig your code
// each thread has it's own stack, they run asynchronously
// each thread is also independent of each other in terms of executing the code.
// they execute side by side allowing us to execute code independently by putting it in a new thread
// javascript is single threaded.
// in node we have one main thread which runs the v8 engine.
// libuv handles i/o asynchronously. (file system and network)
// the asynchronous function is runned in the event loop
// anytime we call an asynchronous function, it is pushed into the event loop
// inside the event loop, tasks get done in operating system(network) or thread pool
// thread pool is a collection of threads
// there is the main thread executing the v8 and there are a few other threads, 4 by default ready and waiting in the thread pool, each can handle a single taks at a time
// if we run out of threads, we wait for a task to complete before the thread pool is available again
// not all asynchronous functions are executed in the thread pool.
// NB the event loop is where callback functions are executed
/*while(!shouldExit){
    processEvents();
}*/

// the event loop is the piece of code in libuv that processes asynchronous events
// event loop phases
// 1.timers
// 2.I/O callbacks---network and file operations etc
// 3.setImmediate---executes after i/o phase
// 4.callbacks:::closing callbacks and all that.

// node vs php  and python
// java c and c++ support multithreading.
// python and php are high level easy to use single threaded programming languages
// node was built specifficaly to do non-blocking i/o simply and effectively.
// what is node best at
// node is not good at things like video processing, machine learning etc, they block the c.p.u(video processing) or even g.p.u(machine learning)
// node is good at talking to servers, eg talking to databases, I/O performance and  many more

// NODE IS EVENT DRIVEN
// It then uses observer desing pattern
// design patterns allow developers to avoid reinventing the wheel to avoid coming up with patterns of our own from scratch everytime we encounter a problem.

const EventEmitter = require("events");
const celebrity = new EventEmitter();

// subscribe to the celebrity for observer 1
celebrity.on('race win', function() {
  console.log("Congragulations! You are the best.")
})
// every time the celebrity wins a race, the observer will pring a congratuatlions message
// the callback function is the listener
// we can also have multipl listeners and they will be executed one after another
celebrity.on('race win', function() {
  console.log("Boo I could have done better.")
})

celebrity.emit('race win')
celebrity.emit('race lost')
celebrity.emit('race win')