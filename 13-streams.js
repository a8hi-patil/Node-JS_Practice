const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    // if (err) {
    //   console.log("err");
    // } else {
    //   console.log(data);
    //   res.end(data);
    // }
    const rStream = fs.createReadStream("inpsut.txt");
    rStream.on("data", (chunkdata) => {
      res.write(chunkdata);
    });
    rStream.on("end", () => {
      res.end();
    });
    rStream.on("error", () => {
      res.end("file not dounf");
    });
  });
});

server.listen(3500);
