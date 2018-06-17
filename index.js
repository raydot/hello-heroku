const http = require('http');

//const hostname = '127.0.0.1';
//const port = 3000;

//Run on any port supplied, otherwise fallback to 5000
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Dave rules!\n');
});

// server.listen(port, hostname, () => {
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });

// rewrite server to use PORT
server.listen(PORT, () => {
	console.log(`Server running on ${PORT}/`);
})