const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
module.exports = add;
module.exports.sub = sub;
// module.exports.sub = {add,sub} h
