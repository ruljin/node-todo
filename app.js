const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(`Request came from ${req.url}`);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Plain text!");
});

server.listen(3000, "127.0.0.1");
console.log("Server in listening mode ...");
