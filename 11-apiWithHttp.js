const user = [
  {
    name: "Abhi",
    id: 320367,
    age: 25,
  },
  {
    name: "Amol",
    id: 520367,
    age: 27,
  },
];
const http = require("http");
const server = http.createServer((rq, rs) => {
  rs.end(JSON.stringify(user));
});
server.listen(3500, () => {
  console.log("Listining on 35000");
});
