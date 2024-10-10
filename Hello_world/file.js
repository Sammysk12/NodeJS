const fs =require("fs");
const os =require("os");

fs.writeFileSync('./text.txt', "Hey there!");

console.log(os.cpus().length);