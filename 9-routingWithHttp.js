const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.end("Hello from home");
  } else if (req.url === "/about") {
    res.end("Hello from about");
  } else if (req.url === "/contact") {
    res.end("Hello from contact");
  } else {
    res.writeHead(404, { "Contet-Type": "text/html" });
    res.end("<h1>Error 404</h1>");
  }
});
server.listen(3500);
