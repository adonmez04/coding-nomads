/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc.
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two-dimensional array.
 * 3. Pick 5 things from the two-dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create an array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create an array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */

// Task 1 *************************************************************************
// 1. Create an array of strings with the names of some items in the room you
//    are sitting in right now. For example "chair", "keyboard" etc

// let items = [
//   "computer",
//   "desk",
//   "chair",
//   "tablet",
//   "kindle",
//   "clock",
//   "timer",
//   "notebook",
//   "pencil",
//   "drawer",
//   "glass",
//   "pencil case",
// ];

// Task 2 *************************************************************************
// 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
// array with a sub-array for each drawer or box, and add 5 things in each
// sub-array. Do this for 3 boxes. You should have a two-dimensional array.

// let nestedArrays = [
//   ["book", "pencil case", "eraser", "mobile phone", "rubber duck"],
//   ["tie", "t-shirts", "jeans", "cables", "computer screen"],
//   ["socks", "gloves", "eye patch", "winter cap", "sunglasses"],
// ];

// Task 3 *************************************************************************
// 3. Pick 5 things from the two-dimensional array just created, and log them to
// the console using array referencing.

// console.log(nestedArrays[0][0]);
// console.log(nestedArrays[0][4]);
// console.log(nestedArrays[1][3]);
// console.log(nestedArrays[1][4]);
// console.log(nestedArrays[2][2]);
// console.log(nestedArrays[2][4]);


// Task 4 *************************************************************************
// 4. Use a for loop to create an array of the numbers from 1 to 100.


// let loopArray = [];
//
// for (let i = 1; i <= 100; i++) {
//   loopArray[i-1] = i;
// }
// console.log(loopArray);


// Task 5 *************************************************************************
// 5. Use another for loop to go through the array of numbers just created and
// log the sum of all the numbers.

// let loopArray = [];
//
// for (let i = 1; i <= 100; i++) {
//   loopArray[i-1] = i;
// }
//
// let sum = 0;
//
// for (let i = 0; i < loopArray.length; i++) {
//   sum += loopArray[i];
// }
// console.log(sum); // (100/2 * 100 + 50) = 5050


// Task 6 *************************************************************************
// 6. Use the random number generator from previous labs and another for loop to
// create an array of 100 random numbers.
//
// function getRandomNumber(){
//     return Math.floor((Math.random() * 100) + 1);
// }
//
// let randomNumberList = [];
//
// for (let i = 0; i < 100; i++) {
//   randomNumberList[i] = getRandomNumber();
// }
//
// console.log(randomNumberList);



// Task 7 *************************************************************************
// 7. Use another for loop to go over each of these random numbers and put them
// in one of two arrays. One for odd numbers, and one for even numbers.

// function getRandomNumber(){
//     return Math.floor((Math.random() * 100) + 1);
// }
//
// let randomNumberList = [];
// let evenNumbers = [];
// let oddNumbers = [];
// let resultEven = 0;
// let resultOdd = 0;
//
// for (let i = 0; i < 100; i++) {
//   randomNumberList[i] = getRandomNumber();
// }
//
// for (let i = 0; i < randomNumberList.length; i++){
//   if (randomNumberList[i] % 2 === 0) {
//     evenNumbers[resultEven] = randomNumberList[i];
//     let count = 0;
//     count++;
//     resultEven += count;
//   } else {
//     oddNumbers[resultOdd] = randomNumberList[i];
//     let count = 0;
//     count++;
//     resultOdd += count;
//   }
// }
//
// console.log(evenNumbers);
// console.log(oddNumbers);


// Task 8 *************************************************************************
// 8. Make the for loop that logs the sum of all the numbers in an array into a
// function that takes an array as an argument and returns the sum. Use this
// function to log the sum of the two arrays of odd and even numbers.

// function sumArray (array){
//   let sum = 0;
//   for (let i = 0; i < array.length; i++){
//     sum += array[i];
//   }
//   return sum;
// }
// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(`The sum of the even numbers is ${sumArray(evenNumbers)}`);
// console.log(`The sum of the odd numbers is ${sumArray(oddNumbers)}`);