// when we type something into the browser eg www.facebook.com the browser starts by calling the DNS/Domain Name System
// the dns sends ip address back to the computer
// it is this ip address that we use to communicate with the server using the http protocol or https protocol
// the port specifies which application on that server should handle our request

// summary:
// we use dns to figure out the ip address of where our page lives
// we then use the http or https protocols to grab the resources using these addresses
// THE API is what defines how our web server reponds to these requests
// API specifies how applications talk to each other (browser and server)
// Language that the http uses: (http verbs)

// get, post, delete, connect, options, head, trace, put etc
// GET/friends, GET/friends/5 POST/messages, PUT/messages/15, DELETE/messages/15, DELETE/friends/15

// all the above are https requests;
// they have 4 main parts:
    // 1.method: eg post, get, put, delete, etc
    // 2.path eg post/messages so /messages is the path also known as resource
    // 3.body: data that we are sending from the browser to the server, mostly in json format {text: "hello", phto:"smile.jpg"}
    // 4.Headers: optional properties we can put on requests to add some metadata eg size, authentication information and many more. There must be one header though that each request must have and that is the host. eg facebook.com


// The server responds
// RESPONSES have three main parts
    // 1.headers eg Content-Type:application/json
    // 2.Body that contains the data we are fetching from the server {text: "hi", photo: "wave.jpg"}
    // 3.Status code: shows if the response was successful or failed and provides status code which may vary depending on the success or fail nature of the request
        // informational responses: (100-199)
        // successful responses: (200-299)
        // Redirects: (300-399)
        // Client errors: (400-499)
        // server errors: (500-599)

// CORS: Cross Origin Resource Sharing
// it is used to loosen the same origin policy
// same origin policy limits us to talking to only one origin, eg you cannot request google maps when browsing in facebook unless you loosen this restricition usin the CORS policy

// we can also use the access-control-allow-origin header to allow cross orgin resource sharing
// Access-Control-Allow-Origin: https://www.google.com // this sets to a specific site
// or
// Access-Control-Allow-Origin: * //this sets to all
// it is the browser that enforces the principles of the same origin policy


