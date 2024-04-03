const http = require('http');

//Creates a server object
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write(req.url); //Writes a response to the client

    res.end(); //Ends the response
}).listen(3000); //The server object listens on port 3000

console.log('Server started on port 3000...');