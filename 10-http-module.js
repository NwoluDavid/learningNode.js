// http methods request modules

// import the http module

const http = require('http')

//create an instance of server, which takes a call back function
// the callback function take two parameters 
// the request which is what the client sends to the server
// the response which is what we are sending back to the client
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.end("This is our about page");
    } else {
        res.end(
            `<h1>Oops! 404 error, this page does not exist</h1> 
            <p>We can't find the page you are looking for</p>
            <a href="/">Homepage</a>`
        );
    }
});

server.listen(8000, (err) => {
    if (err) {
        return console.error('Error starting server:', err);
    }
    console.log(`Server is listening on port 8000`);
});