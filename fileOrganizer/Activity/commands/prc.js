let types ={
    media:["mp4","mkv","mp3"],
    archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents:["docx","docs","pdf","xlsx","odt","ods","odp","odg","odf","txt","ps","tex"],
    app:["exe","dmg","peb","deb"],
    pictures:["png","jpg","jpeg"]
    }

for( let type in types){
    for(let i of types[type]){
        console.log(i);
    }
    
    
}