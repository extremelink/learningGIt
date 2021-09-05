const fs = require("fs");

const data = fs.readFileSync("f1.txt");
//to convert buffer to string, buffer is faster
console.log(data+"");

// fs.writeFileSync("abc.txt","hello everyone");
fs.writeFileSync("abc.txt","sukka");

fs.appendFileSync("abc.txt","hakuna matata");

// fs.unlinkSync("abc.txt");

//make directories // folder

//if a file already exists thenn it gives error so comment it afterwards
// fs.mkdirSync("pathModule");
//fs.rmdirSync("pathModule");

//to check if a file exists or not 
// returns a boolean;

// const val=fs.existsSync("fs.js");
// console.log(val);

//lsstatsync

// const statusObj=fs.lstatSync("f1.txt");
// console.log(statusObj);

//C://users//hermosa//gitLearning->folder

// console.log(statusObj.isDirectory());
// console.log(statusObj.isFile());

// let arr=fs.readdirSync("C:/Users/hermosa/OneDrive/Desktop/GitLearning/fileOrganizer/fsModule");
// console.log(arr);

// let inpArr = process.argv.slice(2);
// let fileName= inpArr[0];
// let content = inpArr[1];
// console.log(fileName,content);
// let cwd = process.cwd();
// console.log(cwd);

let path = require("path");

// let joinPath = path.join(process.cwd(),"abc.txt","def.txt");
// console.log(joinPath);
// let p = path.basename(process.cwd());
// console.log(p);

// let ename=path.extname(path.join(p,"abc.txt"));
// console.log(ename);

// let srcPath="C:/Users/hermosa/OneDrive/Desktop/GitLearning/fileOrganizer/fsModule/f1.txt";
// let destPath="C:/Users/hermosa/OneDrive/Desktop/GitLearning/fileOrganizer/fsModule/abc.txt";
// fs.copyFileSync(srcPath,destPath);
// let e = fs.readFileSync("abc.txt");
// console.log(e+"");

//it gets override 

// fs.mkdirSync("files");

//aactivity 1 : fetch the data from file and write all of it in one file;

let x=path.readFileSync("C:/Users/hermosa/OneDrive/Desktop/GitLearning/fileOrganizer/fsModule/files")
console.log(x);






// for(file in filenames){
//     data.push(fs.readFileSync(file,"utf-8"));
    
// }