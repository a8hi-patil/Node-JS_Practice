const bioData = {
  name: "Abhijit",
  age: 25,
  id: 920367,
  hoby: ["one", "two"],
};
const fs = require("fs");

const jsonData = JSON.stringify(bioData);
fs.writeFileSync("json.txt", jsonData);
const fileData = fs.readFileSync("json.txt");
const data = JSON.parse(fileData);
console.log(data);
