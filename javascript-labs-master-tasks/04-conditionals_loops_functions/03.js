function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */


// ********************************************************************************
// *** 1. Create while loop equivalents of the loops in the previous exercises! ***
// ********************************************************************************


// 2. Create a for loop that outputs every number between 100 and -100 included.
// 3. Create a for loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6,
//     9, 8 ... That is, starting at 0: +3, -1, +3, -1, +3. Make it output 5000
// times, what is the number you get at the end?



// 1. Create a for loop that will log all the numbers between 5 and 1000.
// incrementing in 5s. So the output would start "5, 10, 15, 20 ..."

// let result = 0;
//
// while (true) {
//     let i = 0;
//     i += 5;
//     result += i;
//
//     if (result === 1000) {
//         break;
//     } else if (result % 5 === 0) {
//         console.log(result);
//     }
// }


// 2. Create a for loop that outputs every number between 100 and -100 included.

// let i = 99;
//
// while (i > -100) {
//     console.log(i);
//     i--;
// }

// 3. Create a for loop that outputs this sequence of numbers: 3, 2, 5, 4, 7, 6,
//     9, 8 ... That is, starting at 0: +3, -1, +3, -1, +3. Make it output 5000
// times, what is the number you get at the end?

// let i = 0;
//
// while (i < 5000) {
//     i += 3;
//     console.log(i);
//     i--;
//     console.log(i);
// }


// *****************************************************************************
// 2. Using the random number generator above, write a while loop that generates
// random numbers until it has generated one that is divisible by 11. Do you
// remember what operator to use?
// // *****************************************************************************
// let result = 0;
// let random = 0;
//
// while ((random = getRandomNumber()) % 11 !== 0) {
//     console.log(random);
//
//     // To see the iteration number
//     let i = 0;
//     i++;
//     result += i;
//     console.log("The iteration number is " + result);
// }
// console.log("The non-iterated number is :" + random);

