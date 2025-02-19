/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
//     for(let num of numbers){
//         let largestElement=numbers[num];

//     if(largestElement<=numbers[num]){
//         largestElement=numbers[num];
//     }
//    }
if (numbers.length === 0) return undefined;
    return Math.max(...numbers);
}

module.exports = findLargestElement;