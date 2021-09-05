const fs = require("fs");
const path = require("path");

let f = function tree(dir){
    dir = dir.split("\\").join("/");

console.log("------");
console.log(path.basename(dir));


let data =fs.readdirSync(dir);
let display=[];



for(let i=0;i<data.length;i++){
    display+=`\n\t |---------- ${data[i]}`;
}
console.log(display);


}



module.exports={
    fxn:f
};