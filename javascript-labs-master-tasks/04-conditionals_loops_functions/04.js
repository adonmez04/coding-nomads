/**
 * You have already made some functions for temperatures. Now you will make some
 * more functions!
 *
 * 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
 *    CtoK, FtoK and a KtoF function. Be sure to return the value so that the
 *    code below functions without error.
 *
 * 2. Research and write a function that uses the pythagorean formula to get the
 *    length of the hypotenuse of a right-angled triangle. It should take in two
 *    arguments, the two shorter sides of a triangle, and return the longest
 *    side. Call the function "pythagoras". After writing your function the code
 *    below should work without error.
 *
 * 3. Research and write a functions to convert
 *      - inches to centimeters (inchToCm)
 *      - centimeters to inches (CmToInch)
 *      - miles to kilometers (MToKm)
 *      - kilometers to miles (KmToM)
 *
 */

// Write your code here:

// ****************************************************************************
// 1. Research the formula for conversions to and from Kelvin. Write a KtoC,
//     CtoK, FtoK and a KtoF function. Be sure to return the value so that the
// code below functions without error.
// ****************************************************************************

// The formula of Kelvin to Celsius is (C = K - 273.15)
// The formula of Celsius to Kelvin is (K = C + 273.15)

// The formula of Fahrenheit to Kelvin is (K = (F − 32) × 5 ⁄ 9 + 273.15)
// The formula of Kelvin to Fahrenheit is (F = (K − 273.15) × 1.8 + 32)

function KtoC(tempInKelvin) {
  // (C = K - 273.15)
  let celsius = tempInKelvin - 273.15;
  celsius = celsius.toFixed(2);
  return celsius;
}

function CtoK(tempInCelsius) {
  // (K = C + 273.15)
  let kelvin = tempInCelsius + 273.15;
  kelvin = kelvin.toFixed(2);
  return kelvin;
}

function FtoK(tempInFahrenheit) {
  // (K = (F − 32) × 5 ⁄ 9 + 273.15)
  let kelvin = (tempInFahrenheit - 32) * 5 / 9 + 273.15;
  kelvin = kelvin.toFixed(2);
  return kelvin;
}

function KtoF(tempInKelvin) {
  //   (F = (K − 273.15) × 1.8 + 32)
  let fahrenheit = (tempInKelvin - 273.15) * 1.8 + 32;
  fahrenheit = fahrenheit.toFixed(2);
  return fahrenheit;
}

// console.log(KtoC(272));
// console.log(CtoK(0));
// console.log(FtoK(30));
// console.log(KtoF(100));

// *****************************************************************************
// 2. Research and write a function that uses the pythagorean formula to get the
// length of the hypotenuse of a right-angled triangle. It should take in two
// arguments, the two shorter sides of a triangle, and return the longest
// side. Call the function "pythagoras". After writing your function the code
// below should work without error.
// *****************************************************************************

function pythagoras(side1, side2) {
  // hypotenuse ** 2 = (side1 ** 2) + (side2 ** 2)
  // hypotenuse = ((side1 ** 2) + (side2 ** 2)) ** (1/2)
  let hypotenuse;
  hypotenuse = (side1 ** 2 + side2 ** 2) ** (1 / 2);
  return hypotenuse.toFixed(2);
}


// console.log(pythagoras(10, 20));
// console.log(pythagoras(30, 100));
// console.log(pythagoras(20, 50));


// *****************************************************************************
// * 3. Research and write a functions to convert
// *      - inches to centimeters (inchToCm)
// *      - centimeters to inches (CmToInch)
// *      - miles to kilometers (MToKm)
// *      - kilometers to miles (KmToM)
// *
// */
// *****************************************************************************

// The inches to centimeters formula is (C = I * 2.54)
// The centimeters to inches formula is (I = C / 2.54)

function inchToCm(inInches) {
  let centimeters;
  centimeters = inInches * 2.54;
  return centimeters.toFixed(2);
}

function CmToInch(inCentimeters) {
  let inches;
  inches = inCentimeters / 2.54;
  return inches.toFixed(2);
}

// console.log(inchToCm(10));
// console.log(CmToInch(425));



// The miles to kilometers formula is (K = M * 1.609)
// The kilometers to miles formula is (M = K / 1.609)

function MToKm(inMiles) {
  let kilometers;
  kilometers = inMiles * 1.609;
  return kilometers.toFixed(2);
}

function KmToM(inKilometers) {
  let miles;
  miles = inKilometers / 1.609;
  return miles.toFixed(2);
}

// console.log(MToKm(100));
// console.log(KmToM(25));


// *****************************************************************************
// Do not modify anything below this line

console.log(KtoC(272));
console.log(CtoK(0));
console.log(FtoK(30));
console.log(KtoF(100));

console.log(pythagoras(10, 20));
console.log(pythagoras(30, 100));
console.log(pythagoras(20, 50));

console.log(MToKm(100));
console.log(KmToM(25));

console.log(inchToCm(10));
console.log(CmToInch(425));