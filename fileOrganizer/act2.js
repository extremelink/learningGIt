const fs = require("fs");
const path = require("path");

const arg = process.argv.slice(2);
let mainDir = arg[0];
let subDir = arg.slice(1);


// console.log(mainDir,subDir);

let mainPath = path.join(process.cwd(),mainDir);
// console.log(mainPath);
let subPath=[];

for( i of subDir){
    let d = path.join(mainPath,i);
    subPath.push(d);
}

// console.log(subPath);

if(!fs.existsSync(mainPath)){
    fs.mkdirSync(mainPath);
}
for(i of subPath){
if(!fs.existsSync(i)){
    fs.mkdirSync(i);
}
for(let j =1;j<=3;j++){
let sub = path.join(i,`Module ${j}`);

if(!fs.existsSync(sub)){
    fs.mkdirSync(sub);
}
let textPath = path.join(sub,"abc.md");
fs.writeFileSync(textPath,"hello everyone");


// console.log(`${i} Module ${j}`);

}

}