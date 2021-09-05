const path = require("path");
const fs = require("fs");
const arg = process.argv.slice(2);
console.log(arg);

const dir=arg[0];
const rdir = fs.readdirSync(dir);
console.log(rdir);


let data =[];

for(i of rdir){
    if(path.extname(i)==".txt"){
        let val = path.join(dir,i);
        data.push(fs.readFileSync(val,"utf-8"));
    }
 
}

console.log(data);