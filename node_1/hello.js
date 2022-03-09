const mission = process.argv[2]
// process.argv will return an array containing the command line arguements passed when the node.js process was launched
// we run this file with node hello.js
// ['node', 'hello'] is our process.argv
if (mission == "Learn"){
    console.log('Time to write some node code');
}else{
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

