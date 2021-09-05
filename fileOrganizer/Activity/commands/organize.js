let fs = require("fs");
let path = require("path");

let types ={
media:["mp4","mkv","mp3"],
archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
documents:["docx","docs","pdf","xlsx","odt","ods","odp","odg","odf","txt","ps","tex"],
app:["exe","dmg","peb","deb"],
pictures:["png","jpg","jpeg"]
}

function organizeFn(srcPath){
let dirData=fs.readdirSync(srcPath);
let organizeFolder=path.join(srcPath,"OrganizedFolder");


// console.log(organizeFolder);
if(!fs.existsSync(organizeFolder)){
    fs.mkdirSync(organizeFolder);
}

for(let file of dirData){
   
    let fpath = path.join(srcPath,file);
    console.log(fpath);
    if(fs.lstatSync(fpath).isFile()){

        let type = checkType(file);
        let typeFolder = path.join(organizeFolder,type)
    
       console.log(typeFolder);

       if(!fs.existsSync(typeFolder)){
           fs.mkdirSync(typeFolder);
       }

       
   let destFile = path.join(organizeFolder,type,file);
   fs.copyFileSync(fpath,destFile);

//    fs.copyFileSync(fpath,destFile);
   
      
    }

    }


}


function checkType(file){

    for( let type in types){
        for(let i of types[type]){
            if(path.extname(file).split(".")[1]==i){
                return type;
            }
        }
        
        
    }
   

    return "other";
}



module.exports={

ofn:organizeFn
};

