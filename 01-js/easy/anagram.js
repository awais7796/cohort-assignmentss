/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
// const n1=str1.toLowerCase().length;
// const n2=str2.toLowerCase().length;
// if(n1!=n2)
//   { 
//     return false;
//   }

// str1.sort();
// str2.sort();
// for(let i=0;i<n1;i++){
//   if(str1[i]!=str2[i]) 
//     {
//       return false;
//     }
//   }

// return true
// if (str1.length !== str2.length) return false;

// const normalize = (str) => str.toLowerCase().split('').sort().join('');

// return normalize(str1) === normalize(str2);


if(str1.lenght!==str2.lenght) return false;
const normalize=(str)=>str.toLowerCase().split('').sort().join('');


return normalize(str1)=== normalize(str2);
}
// isAnagram("spar","rasp")


module.exports = isAnagram;
