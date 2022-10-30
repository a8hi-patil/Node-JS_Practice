const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(3500, "localhost", () => {
  console.log("Server Started");
});
