/**## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.*/

let count=0;
const callCounter=()=>{
    console.log(count);
    count++;
    setTimeout(callCounter,1000)
    
}
callCounter();

