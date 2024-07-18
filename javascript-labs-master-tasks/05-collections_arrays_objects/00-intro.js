// Things are now getting interesting!
// This is a supplementary lesson to get you geared up for the labs to come.
// This is a walk through of a very common programming task that
// you will be doing many times and practicing in many forms!
//
//   Say you have this temperature data in Fahrenheit:
//
// ```
// 123
// 32
// 42
// 94
// 34
// 0
// -10
// 30
// 63
// 84
// 56
// 94
// 87
// 43
// 26
// 75
// 90
// -43
// -23
// 153
// 41
// 74
// 54
// 24
// 85
// 80
// 56
// 35
// 23
// 45
// 87
// -90
// 87
// 56
// 23
// 56
// 71
// 37
// 56
// 34
// ```
//
// Its a long list. Would you assign each item to a variable?
//
//   ```javascript
// let temp1 = 123;
// let temp2 = 32;
// let temp3 = 42;
// let temp4 = 94;
// ```
//
//   That would take a lot of repetitive typing,
//   definitely something that you should _always_ avoid as a programmer.
//
//   Better to put it into an array!
//   If you are reading this then it should be from Visual Studio Code.
//   Create a new `.js` file in this folder with the same name as this file except with
//   the JavaScript extension - `00-00-intro.js`.
//   Go to [this website](https://convert.town/column-to-comma-separated-list), and
//   use it to convert the data above into a comma separated list.
//   Then add the necessary syntax to make this into an array in your new file:
//
//   ```javascript
// let listOfTempsInF = [
//   /*PASTE YOUR COMMA SEPARATED LIST HERE*/
// ];
// ```
//
// Now build a for loop that at each iteration, references and logs the new temperature:
//
// ```javascript
// for (let i = 0; i < listOfTempsInF.length; i++) {
//   let element = listOfTempsInF[i];
//   element = fToC(element)
//   console.log(element + "C")
// }
// ```
//
// In this script, copy in the function fToC that you have defined previously.
// Once you have it, open the test.html file,
// it should automatically be outputting the logs for your new script.
// If it is not, check that the file name is correct.

let listOfTempsInF = [
  123,32,42,94,34,0,-10,30,63,84,56,94,87,43,26,75,90,-43,-23,153,41,74,54,24,85,80,56,35,23,45,87,-90,87,56,23,56,71,37,56,34,
];

function convertList (item) {
  for (let i = 0; i<item.length; i++) {
    let element = item[i];
    element = fToC(element);
    console.log(`${listOfTempsInF[i]}F = ${element}C`);
  }
}

function fToC (fahrenheit){
  let celsius = (fahrenheit - 32) * (5/9);
  celsius = celsius.toFixed(2);
  return celsius;
}

convertList(listOfTempsInF);

// for (let i = 0; i < listOfTempsInF.length; i++) {
//   let  element = listOfTempsInF[i];
//   element = fToC(element);
//   console.log(`${listOfTempsInF[i]}F = ${element}C`);
// }

//
// const objectList = {
//   list: null,
//   convertList : function () {
//     for (let i = 0; i<this.list.length; i++) {
//       let element = this.list[i];
//       // element = fToC(element);
//       console.log(`${this.list[i]}F = ${element}C`);
//     }
//   },
//   fToC : function (){
//     let celsius = (this.list - 32) * (5/9);
//     celsius = celsius.toFixed(2);
//     return celsius;
//   },
// };

// const objectList = {
//   list: null,
//   convertList : function () {
//     for (let i = 0; i<this.list.length; i++) {
//       let element;
//       let celsius;
//       element = this.list[i];
//
//       // Converting Fahrenheit to Celsius
//       celsius = (element - 32) * (5/9);
//       celsius = celsius.toFixed(2);
//
//       // The Final Output
//       console.log(`${this.list[i]}F = ${celsius}C`);
//     }
//   },
// };
//
// const test = Object.create(objectList);
// test.list = listOfTempsInF;
