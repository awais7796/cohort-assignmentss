/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // let cnt=0;
    // for(str of strin){
    //  let check= str.toLowerCase();
    //  if(str==a||str==e||str==i||str==o||str==u){

    //    cnt++
    //  }
    // }
    // return cnt;

// ,'A','E','I','O','U'

    const vowels=new Set(['a','e','i','o','u']);
    let count=0;
    const lowerStrn=str.toLowerCase();
    for(let char of lowerStrn){
      if(vowels.has(char)){

        count++;
      }
    }
    return count;

}

module.exports = countVowels;