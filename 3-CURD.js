const fs = require("fs");

fs.mkdirSync("Test");

fs.writeFileSync("Test/bio.txt", "Abhijit");
fs.appendFileSync("Test\/bio.txt", "Patil");
const data = fs.readFileSync("Test/bio.txt", "utf-8");
console.log(data);
fs.renameSync("Test/bio.txt", "Test/mybio.txt");

fs.unlinkSync("Test/mybio.txt");
fs.rmdirSync("Test");
