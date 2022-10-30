const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
//   fs.readFile("input.txt", "utf-8", (err, data) =>{
    const rStream = fs.createReadStream("input.txt");
//     rStream.on("data", (chunkdata) => {
//       res.write(chunkdata);
//     });
//     rStream.on("end", () => {
//       res.end();
//     });
//     rStream.on("error", () => {
//       res.end("file not dounf");
//     });
//   });
      rStream.pipe(res)
});

server.listen(3500);
