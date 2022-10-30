// Modules --> Pre written codes
//  Core modules are come with node JS no need to install it

// const name = "Abhijit";
// console.log(name);

const fs = require("fs");

// fs.writeFileSync("test.txt", "i am new file");
// fs.appendFileSync("test.txt", " I am new data");
// const buf_data = fs.readFileSync("test.txt");
// console.log(buf_data);
// const buf1_data = fs.readFileSync("test.txt");
// console.log(buf1_data.toString());
// const buf3_data = fs.readFileSync("test.txt", "utf-8");
// console.log(buf3_data);

fs.renameSync('test.txt', 'test1.txt')
