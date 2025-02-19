/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    // n=100000;
    let T1=new Date()
    const beforSum=T1.getTime();
    console.log("time before: ",beforSum);
    
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    console.log(sum);
    let T2=new Date()
    const afterSum=T2.getTime();
    console.log("time after: ",afterSum);
}
calculateTime(1000)