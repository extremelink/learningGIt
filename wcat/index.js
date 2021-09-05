let arg = process.argv.slice(2);

var flags=[];
var files= [];
var sargs=[];

for(i of arg){
    if(i[0]=="-"){
        flags.push(i.slice(1));
    }else if(i[0]=="$"){
        sargs.push(String(i.slice(1)));
    }else{
        files.push(i);
    }

}

// console.log(sargs[.length);
console.log(flags);



const fs=require("fs");





for(file of files){
let data = fs.readFileSync(file,"utf-8");

    for(flag of flags){

        if(flag=="rs"){
            data =data.split(" ").join("");
        }if(flag=="rn"){
            data = data.split("\r\n").join("");
        }if(flag=="rsc"){
            for(i of sargs){
                for(j of i){
                    console.log(j);
                    data = data.split(j).join("");
                }
                    
            }

        }
        if(flag=="s"){
            data=addSequence(data);
            for(i of data){
                console.log(i);
            }


        }if(flag=="rel"){
            data=remExtraLine(data);
            for(i of data){
                console.log(i);
            }
           
        }
    }
    console.log(data);

}

function addSequence(data){
    data=data.split("\r\n");
    
        let idx=1;
    for(let i=0;i<data.length;i++){
        if(data[i]!=" "){
            data[i]=idx+") "+data[i];
            // console.log(data[i]);
            idx++;
        }
    }
    return data;
    }

function remExtraLine(data){

data = data.split("\r\n");
console.log(data);
ndata=[];
for(i of data){
    if(i!=""){
        ndata.push(i);
    }
}

return ndata;

}

