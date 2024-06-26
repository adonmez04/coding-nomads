/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let firstNumber = 1000;
let secondNumber = 2000;
let thirdNumber = 3000;
let luckyNumber = 7;
let result = 0

result = firstNumber + secondNumber + thirdNumber + luckyNumber;
console.log(`1. The sum of the numbers = ${result}`);

result = thirdNumber - (firstNumber + secondNumber);
console.log(`2. The result of subtracting the two smallest numbers from the larger one = ${result}`);

result = firstNumber * secondNumber * thirdNumber * luckyNumber;
console.log(`3. The result of multiplying all the numbers = ${result}`);

result = thirdNumber / (secondNumber - firstNumber - luckyNumber);
console.log(`4. The result of the largest number divided by the difference between the smaller ones ${result}`);

console.log(`5. The result of the numbers modulo 7 (${firstNumber} % ${luckyNumber}) = ${firstNumber % luckyNumber}
5. The result of the numbers modulo 7 (${secondNumber} % ${luckyNumber}) = ${firstNumber % luckyNumber}
5. The result of the numbers modulo 7 (${thirdNumber} % ${luckyNumber}) = ${firstNumber % luckyNumber}`);


