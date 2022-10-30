const fs = require("fs");
const { appendFile } = require("fs/promises");

fs.writeFile("test.txt", "todays is awesome day", (err) => {
  if (!err) {
    console.log("data saved");
  } else {
    console.log("error");
  }
});
fs.appendFile("test.txt", "my data", (err) => {
  if (!err) {
    console.log("data added");
  } else {
    console.log("error");
  }
});

fs.readFile("test.txt", "utf-8", (err, data) => {
  console.log(data);
});
