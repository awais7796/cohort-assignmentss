/**
 * ## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/
const fs = require ('fs');
console.log("befor fs");

// writeFile overwrite the content of the file 
fs.writeFile('example.txt','this is written via fs',(err)=>{
    if(err){
        console.log("the error is ",err);
        
    }
    console.log("wrote via writeFile");
    
})
// appendFile does not overwrite the file 
fs.appendFile('example.txt','this is writtem via fs',(err)=>{
    if(err){
        console.log("the error is ",err);
        
    }
    console.log("wrote via appnendFile");
    
})
fs.readFile('example.txt','utf8',(err,data)=>{
    if(err){
        console.log("error in read fs");
        
    }
    console.log("readFile : ",data);
})

// expensive operation for async 
let sum=0;
for(let i=0;i<=100000;i++){
    sum+=i;
}
console.log(sum);



/** 
                                output
 befor fs
5000050000
wrote via writeFile
wrote via appnendFile
this is written via fs
 * */ 
