/**
 * ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/
const fs = require ('fs');


console.log("befor fs");
fs.appendFile('example.txt','this is writtem via fs',(err)=>{
    if(err){
        console.log("the error is ",err);
        
    }
    console.log("wrote");
    
})
fs.readFile('example.txt','utf8',(err,data)=>{
    if(err){
        console.log("error in read fs");
        
    }
    console.log(data);
})

let sum=0;
for(let i=0;i<=100000;i++){
    sum+=i;
}
console.log(sum);
