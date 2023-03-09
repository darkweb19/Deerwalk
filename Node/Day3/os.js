// const os = require("os");
const path = require("path");
const myPath = "/Users/sujanshrestha/Developer/DeerWalk/node/Day3/indexas.js";

// console.log(os.arch());
// console.log(os.platform());
// // console.log(os.cpus());
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.type());
// console.log(os.release());
// console.log(os.totalmem());
// console.log(os.freemem());
// // console.log(os.networkInterfaces());

console.log(path.basename(myPath));
console.log(path.dirname(myPath));

console.log(path.extname(myPath));
console.log(path.parse(myPath));
console.log(path.join(__dirname, "public", "indexs.jtml"));
console.log(path.resolve("/", "indexs.jtml"));
