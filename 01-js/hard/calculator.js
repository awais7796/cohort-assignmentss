/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
constructor(){
    this.result=0;
    
}
add(num){
    this.result+=num;
    return this;
}
subtract(num){
    this.result-=num;
    return this;
}
multiply(num){
    this.result*=num;
    return this;
}
divide(num){
if(num===0) throw new Error("num is zero");
this.result/=num;
return this;

}
clear(){
    this.result=0;
    return this;
}
getResult(){
    return this.result;
}
calculate(expression){
  try{
// removing space and validating  invalid charactes expression
    expression=expression.replace(/\s+/g,'');
    if(/[^0-9+\-*/().]/.test(expression)){
      throw  new Error("invalid characters")
    }

// divided by zero
if(/\/0(?!\d)/.test(expression))
{
    throw new Error("cant divid eby zero")
}

// paranthesis balancing 
let stack=[];
for(let char of expression){
    if(char==='(') stack.push(char);
    if(char===')'){
            if(!stack.length){
                throw new Error("imbalance paranthesis")
            }
            stack.pop();
            }
            
                          }
// if input is in the form of expression the ths function will evaluate anf c=by creating the new anomonous function 
    this.result = new Function(`return ${expression}`)();
    return this.result; 
}
catch(error){
throw new Error("cant do this man");
}
}
}
/**
 * 

class Calculator {
    constructor() {
      this.result = 0;
  }

  add(num) {
    this.result += num;
    return this;
  }

  subtract(num) {
      this.result -= num;
      return this;
  }

  multiply(num) {
      this.result *= num;
      return this;
    }

  divide(num) {
      if (num === 0) throw new Error("Cannot divide by zero");
      this.result /= num;
      return this;
    }

  clear() {
      this.result = 0;
      return this;
  }
  
  getResult() {
    return this.result;
  }
*/
  
//   calculate(expression) {
//     try {
//         // Remove spaces and validate expression
//         expression = expression.replace(/\s+/g, '');
//         if (/[^0-9+\-*/().]/.test(expression)) {
//             throw new Error("Invalid characters in expression");
//         }
        
//         // Check for division by zero
//         if (/\/0(?!\d)/.test(expression)) {
//             throw new Error("Cannot divide by zero");
//           }
          
//           // Validate parentheses balance
//           let stack = [];
//           for (let char of expression) {
//               if (char === '(') stack.push(char);
//               if (char === ')') {
//                   if (!stack.length) throw new Error("Mismatched parentheses");
//                   stack.pop();
//                 }
//             }
//             if (stack.length) throw new Error("Mismatched parentheses");
            
//           // Evaluate expression securely
//           this.result = new Function(`return ${expression}`)();
//           return this.result;
//       } catch (error) {
//           throw new Error(error.message || "Invalid mathematical expression");
//       }
//     }
// }
// 


module.exports = Calculator;
