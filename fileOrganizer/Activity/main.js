const helpObj = require("./commands/help");
const treeObj=require("./commands/tree");
const organizeObj=require("./commands/organize");

const arg = process.argv.slice(2);
console.log(arg);

command = arg[0];
let dir=arg[1];
console.log(dir);

switch(command){
case "helpFunction":helpObj.function;break;
case "tree":treeObj.fxn(dir);break;
case "organize":organizeObj.ofn(dir);break;
default:console.log("invalid command");break;
}