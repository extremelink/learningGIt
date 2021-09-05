console.log("owner.js");

let str ="i export it you import it is that simple for you sukka";
let a =23;
let foo=function(){
    return "hey there";
}
console.log("all of my code is run first then you get access back");

let obj = {
    num:a,
    string:str,
    function:foo
};

module.exports=obj;
