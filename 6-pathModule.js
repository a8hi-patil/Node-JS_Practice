const path = require("path");

console.log(path.dirname("E:HERO VIREDThapa/ReACT/Node JS Thapa/6path.js"));

console.log(path.extname("E:HERO VIREDThapa/ReACT/Node JS Thapa/6path.js"));

console.log(path.basename("E:HERO VIREDThapa/ReACT/Node JS Thapa/6path.js"));
console.log(path.parse("E:HERO VIREDThapa/ReACT/Node JS Thapa/6path.js"));
console.log(path.parse("E:HERO VIREDThapa/ReACT/Node JS Thapa/6path.js").name);
console.log(__dirname);

let a = "abhi";
let b = "sxafabhi";

let c = path.join(a, b);
console.log(c);
