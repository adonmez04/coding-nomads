/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

// *****************************************************************************
// 1. Use a random number generator to generate an array of 100 values.

// let randomNumList = [];
//
// for (let i = 0; i < 100; i++) {
//   randomNumList[i] = Math.floor((Math.random() * 100));
// }
//
// console.log(randomNumList);

// *****************************************************************************
// 2. Use forEach on the array to output the sum, count and average.
// let sum = 0;
// let count = 0;
// let average = 0;
// randomNumList.forEach( (number) => {
//   sum += number;
//   count++;
//   average = Math.floor((sum / count));
//   console.log(`The iteration number is ${count}`);
//   console.log(`The sum of items is ${sum}`);
//   console.log(`The average value of items is ${average}`);
// });

// *****************************************************************************
// 3. Use forEach to create a new array from the first one that halves all the
// values.
// let halfRandomNumList = [];
// let count = 0;
// randomNumList.forEach( (number) => {
//   number = number/2;
//   halfRandomNumList[count] = number;
//   count++;
// });
//
// console.log(randomNumList);
// console.log(halfRandomNumList);
//
// let counter = 0;
// for (let i = 0; i < randomNumList.length; i++) {
//   counter++;
//   console.log(`The iteration number is ${counter}.
//   The original number is ${randomNumList[i]} and
//   the half of it is ${halfRandomNumList[i]}`);
// }

// *****************************************************************************
// 4. Use forEach on the new array to output the sum, count and average again.

// let halfSum = 0;
// let halfCount = 0;
// let halfAverage = 0;
//
// halfRandomNumList.forEach( (number) => {
//   halfSum += number;
//   halfCount++;
//   halfAverage = Math.floor(halfSum / halfCount);
// });
//
// console.log(halfSum);
// console.log(halfCount);
// console.log(halfAverage);



// *****************************************************************************
// 5. Refactor: define the sum, count and average function as a separate
// function and pass it to the forEach functions as a name.

// let tempsInC = [12, 14, 16, 30, 21, 35, 0, -10];
//
// function cToF(tempInC) {
//   return tempInC * 1.8 + 32;
// }
//
// tempsInC.forEach((tempToConvert) => {
//   let newTemp = cToF(tempToConvert);
//   console.log(`${tempToConvert}C is ${newTemp}F`);
// });

// let randomNumList = [];
//
// for (let i = 0; i < 100; i++) {
//   randomNumList[i] = Math.floor((Math.random() * 100));
// }
// console.log(randomNumList);
//
//
// let sum = 0;
// function sumFunc2 (number) {
//   sum += number;
// }
// randomNumList.forEach(sumFunc2);
//
// console.log(sum);
//
// let count = 0;
// function countFunc2 (number) {
//   count++;
// }
// randomNumList.forEach(countFunc2);
// console.log(count);
//
// let average = 0;
// let counter = 0;
// let sum2 = 0;
// function averageFunc2 (number) {
//   sum2 += number;
//   counter++;
//   average = sum2 / counter;
// }
//
// randomNumList.forEach(averageFunc2);
// console.log(average);



// function sumFunc (number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   return sum;
// }



// function countFunc (number) {
//   let count = 0;
//   for (let i = 0; i < number.length; i++) {
//     count++;
//   }
//   return count;
// }
//
// function averageFunc (number) {
//   let average = 0;
//   average = sumFunc(randomNumList) / countFunc(randomNumList);
//   return average;
// }

// console.log(sumFunc(randomNumList));
// console.log(countFunc(randomNumList));
// console.log(averageFunc(randomNumList));


