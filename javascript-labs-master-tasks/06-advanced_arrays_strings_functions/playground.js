'use strict';
// let evenNumber = [2, 4, 6, 8, 10];
// let numberString = "2, 4, 6, 8, 10";
//
// console.log(evenNumber[0]);
// console.log(evenNumber[1]);
// console.log(evenNumber[2]);
//
// console.log(numberString[0]);
// console.log(numberString[1]);
// console.log(numberString[2]);


// console.log(evenNumber.length);
// console.log(numberString.length);

// for (let i = 0; i < numberString.length; i++) {
//   console.log(numberString[i]);
// }
//
// for (let i = 0; i < evenNumber.length; i++) {
//   console.log(evenNumber[i]);
// }

// let numberString2 = "[2, 4, 6, 8, 10]"
// console.log(numberString2[0]);
// console.log(numberString2[1]);
// console.log(numberString2[2]);


// *****************************************************************************

// const greeting = ["Hello,", "World"];
// const greeting2 = greeting.join(' ');
// console.log(greeting);
// console.log(greeting2);

// const names = ["Alice", "Bob", "Charlie", "Dana"];
// // const names = ["James"];
//
// // let namesString = names.join(", ")
// // console.log(namesString);
// // console.log(`Our team members are ${namesString}`);
//
// let namesString = names.length > 1 ? `${names.slice(0, -1).join(", ")} and ${names.slice(-1)}` : names[0];
// console.log(namesString);


// *****************************************************************************


// let numberString = "2, 4, 6, 8, 10";
// // numberString.split(", ");
// console.log(numberString.split(","));


// const testCode = `h2, h3 {font-family: "Young Serif", sans-serif; font-size: 30px; font-weight: 400;}`;
//
// let checkCode = testCode.split(';');
// console.log(checkCode);
// for (let i = 0; i < testCode.length; i++) {
//   console.log(checkCode[i]);
// }


// let numberString = "2, 4, 6, 8, 10";
// // console.log(numberString.split(",")); // Array(5) [ "2", " 4", " 6", " 8", " 10" ]
// //
// // let numberString2 = numberString.split(", ").map((number) => parseInt(number));
// // console.log(numberString2); // Array(5) [ 2, 4, 6, 8, 10 ]
// let numberArray = numberString.split(", "); // Array(5) [ "2", " 4", " 6", " 8", " 10" ]
// for (let i = 0; i < numberArray.length; i++) {
//   numberArray[i] = parseInt(numberArray[i]);
// }
//
// console.log(numberArray); // Array(5) [ 2, 4, 6, 8, 10 ]


// *****************************************************************************


// let numberString = "2,4,6,8,10";
// let numberString2 = numberString.split("");
// console.log(numberString2); // Array(10) [ "2", ",", "4", ",", "6", ",", "8", ",", "1", "0" ]
//
// console.log(numberString[8]);
// console.log(numberString[9]);



// *****************************************************************************
// const greeting = ["Hello", "World", 2, 3, 4, 5, " ", " ", ","];
// greeting.toString();
// console.log(greeting);
// console.log(greeting.toString());


// *****************************************************************************
// const greeting = ["Hello", "World", 2, 3, 4, 5, " ", " ", ","];
// const greeting2 = `${greeting}`;
// console.log(greeting2);

// *****************************************************************************
// const greeting = "Hello, World";
// Array.from(greeting); // ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"]

// const greeting = "Hello, World";
// Array.from(greeting);
// console.log(greeting);
// console.log(Array.from(greeting));


// const numberString = "12345";
// Array.from(numberString, (number) => parseInt(number)); // [1, 2, 3, 4, 5]
// const numberString = "12345";
// const numberString2 = Array.from(numberString, (number) => parseInt(number));
// console.log(numberString2);

// *****************************************************************************
// const greeting = "Hello, World";
// [...greeting]; // ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d"]

// const greeting = "Hello, World, 123101112";
// [...greeting];
// console.log([...greeting]);


// *****************************************************************************
// let numberString = "2,4,6,8,10";
// console.log(numberString);
// let numberString2 = numberString.split(",");
// for (let i = 0; i < numberString2.length; i++) {
//   numberString2[i] = parseInt(numberString2[i]);
//   numberString2[i] = numberString2[i] + 2;
// }
// console.log(numberString2);


// *****************************************************************************

// let numberString = "2,4,6,8,10";
// console.log(numberString);
// let numberString2 = numberString.split();
// console.log(numberString2);

// *****************************************************************************

// let textToSearch = "Hello world!";
// textToSearch.includes("world"); // true
// textToSearch.includes("nomad"); // false

// let textToSearch = "Hello world!";
// console.log(textToSearch.includes("world"));
// console.log(textToSearch.includes("nomad"));

// let fontSizePattern = /font-size:.*px/g; / html.*{\s+font-size:.*px
// let fontSizePattern = new RegExp("font-size:\\.\\*px", "g");
// let textToSearch = prompt("Enter your code here:");
// console.log(textToSearch.match(fontSizePattern));

// *****************************************************************************

// let textToSearch = "Hello world world";
//
// The substring "world" is found at index 6, at the `w`
// textToSearch.indexOf("world"); // 6
//
// The last substring "world" is found at index 12, at the `w`
// textToSearch.lastIndexOf("world"); // 12
//
// If the substring is not found, it returns -1
// textToSearch.indexOf("nomad"); // -1
//
// You can call string methods directly on the string too:
// "Hello world".indexOf("world"); // 6


// let textToSearch = "Hello world world";
//
// console.log(textToSearch.indexOf("world"));
// console.log(textToSearch.lastIndexOf("world"));
// console.log(textToSearch.indexOf("nomad"));
// console.log(textToSearch.lastIndexOf("nomad"));

// let textToSearch = prompt("Enter your code here:");
// console.log(textToSearch.indexOf("width"));
// console.log(textToSearch.lastIndexOf("width"));


// *****************************************************************************
// let textToSearch = "Hello world!";

// Starts with
// textToSearch.startsWith("Hello"); // true
// textToSearch.startsWith("!"); // false

// Ends with
// textToSearch.endsWith("!"); // true
// textToSearch.endsWith("Hello"); // false

// let textToSearch = "Hello world!";
// console.log(textToSearch.startsWith("Hello"));
// console.log(textToSearch.endsWith("!"));
// console.log(textToSearch.startsWith("nomad"));
// console.log(textToSearch.endsWith("Hello"));



// *****************************************************************************
// let textToSearch = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// contact@example.com
// Pellentesque sit amet lacus vitae massa pretium aliquam.
// Nulla facilisi. info@sample.org
// Donec sed dolor ac odio consequat varius.
// Integer non lorem lacus. support@website.com
// Maecenas non leo laoreet, condimentum lorem nec, vulputate massa.
// Quisque mollis dolor non tellus placerat vitae sodales lectus porta.
// Curabitur ut suscipit tellus. hello@hello-world.net
// Phasellus sed sapien eget mi condimentum vehicula.
// Nam cursus, diam et lacinia faucibus, email@domain.com
// Nunc ultrices auctor sapien id cursus.
// Aliquam erat volutpat. customer@service.com
// Morbi in ipsum sit amet pede facilisis laoreet.
// Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.
// Vestibulum tincidunt malesuada tellus.
// Ut ultrices ultrices enim. team@example.com`;


// let emailPattern = /\S+@\S+\.\S+/;
// or
// let emailPattern = new RegExp("\\S+@\\S+\\.\\S+");

// let emailPattern = /\S+@\S+\.\S+/;
// let emailPattern = new RegExp("\\S+@\\S+\\.\\S+");

// textToSearch.search(emailPattern); // 57
// textToSearch.search(/nomad/); // -1

// console.log(textToSearch.search(emailPattern));
// console.log(textToSearch.search(/\S+@\S+\.\S+/));

// *****************************************************************************
// let textToSearch = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// contact@example.com
// Pellentesque sit amet lacus vitae massa pretium aliquam.
// Nulla facilisi. info@sample.org
// Donec sed dolor ac odio consequat varius.
// Integer non lorem lacus. support@website.com
// Maecenas non leo laoreet, condimentum lorem nec, vulputate massa.
// Quisque mollis dolor non tellus placerat vitae sodales lectus porta.
// Curabitur ut suscipit tellus. hello@hello-world.net
// Phasellus sed sapien eget mi condimentum vehicula.
// Nam cursus, diam et lacinia faucibus, email@domain.com
// Nunc ultrices auctor sapien id cursus.
// Aliquam erat volutpat. customer@service.com
// Morbi in ipsum sit amet pede facilisis laoreet.
// Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.
// Vestibulum tincidunt malesuada tellus.
// Ut ultrices ultrices enim. team@example.com`;
//
// // let emailPattern = /\S+@\S+\.\S+/g;
// let emailPattern = /\S+@\S+\.\S+/g;
// console.log(textToSearch.match(emailPattern));

// let codeInput = `* {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
//
// html {
//   font-size: 13px;
// }
//
// root {
//   font-size: 13px;
// }
//
// body {
//   background-color: #ecf2f8;
//   font-family: "Barlow Semi Condensed", sans-serif;
// }
//
// main {
//   padding: 5.5rem 1.5rem;
//   display: grid;
//   row-gap: 1.5rem;
// }
//
// strong {
//   font-size: 1.54rem;
//   margin: 1rem 0 1.5rem;
//   display: block;
// }
//
// .testimonial p {
//   font-size: 1rem;
//   line-height: 1.4;
// }
//
// .author {
//   display: flex;
//   font-weight: 500;
//   gap: 1rem;
// }
// .author img {
//   display: block;
//   width: 2.1rem;
//   height: 2.1rem;
//   border-radius: 50%;
// }
//
// .author-name {
//   font-size: 1rem;
//   display: block;
// }
//
// .verified-grad {
//   font-size: 0.85rem;
// }
//
// .testimonial {
//   border-radius: 8px;
//   background-color: hsl(0, 0%, 100%);
//   padding: 1.8rem 2.5rem;
//   color: hsl(217, 19%, 35%);
// }
// .testimonial p {
//   color: hsla(217, 19%, 35%, 0.7);
// }
// .testimonial .verified-grad {
//   color: hsla(217, 19%, 35%, 0.5);
// }
//
// .testimonial:first-of-type {
//   background-color: hsl(263, 55%, 52%);
//   color: hsl(0, 0%, 100%);
//   background-image: url(/images/bg-pattern-quotation.svg);
//   background-repeat: no-repeat;
//   background-position: top right 20%;
//   background-size: 8rem;
// }
// .testimonial:first-of-type p {
//   color: hsla(0, 0%, 81%, 0.7);
//   margin: 2.5rem 1.8rem 0 0;
// }
// .testimonial:first-of-type .verified-grad {
//   color: hsla(0, 0%, 100%, 0.5);
// }
// .testimonial:first-of-type .author img {
//   outline: 2px solid #A775F1;
// }
//
// .testimonial:nth-of-type(2) {
//   background-color: hsl(217, 19%, 35%);
//   color: hsl(0, 0%, 100%);
// }
// .testimonial:nth-of-type(2) p {
//   color: hsla(0, 0%, 100%, 0.7);
// }
// .testimonial:nth-of-type(2) .verified-grad {
//   color: hsla(0, 0%, 100%, 0.5);
// }
//
// .testimonial:nth-of-type(4) {
//   background-color: hsl(219, 29%, 14%);
//   color: hsl(0, 0%, 100%);
// }
// .testimonial:nth-of-type(4) p {
//   color: hsla(0, 0%, 100%, 0.7);
// }
// .testimonial:nth-of-type(4) .verified-grad {
//   color: hsla(0, 0%, 100%, 0.5);
// }
// .testimonial:nth-of-type(4) .author img {
//   outline: 2px solid #733FC8;
// }
//
// footer {
//   font-size: 0.7rem;
//   text-align: center;
//   margin-bottom: 1.5rem;
//   font-weight: 500;
// }
// footer a {
//   text-decoration: none;
//   font-weight: 600;
// }
//
// @media screen and (min-width: 38em) {
//   main {
//     width: 35rem;
//   }
//   body {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     min-height: 100vh;
//   }
// }
// @media screen and (min-width: 64em) {
//   main {
//     display: grid;
//     gap: 2rem;
//     grid-template-columns: repeat(4, 1fr);
//     width: 90vw;
//     max-width: 100rem;
//   }
//   .testimonial:first-of-type {
//     grid-area: 1/1/2/3;
//   }
//   .testimonial:nth-of-type(4) {
//     grid-area: 2/2/3/4;
//   }
//   .testimonial:last-of-type {
//     grid-area: 1/4/3/5;
//   }
// }
// @media screen and (min-width: 90em) {
//   main {
//     width: 80vw;
//   }
// }
// @media screen and (min-width: 120em) {
//   html {
//     font-size: 20px;
//   }
// }
// @media screen and (min-height: 45em) {
//   footer {
//     position: absolute;
//     bottom: 10px;
//   }
// }/*# sourceMappingURL=styles.css.map */`;
// let fontSizePattern = /(html|root).*{\s*font-size:(.*);/g;
// console.log(codeInput.match(fontSizePattern));


// *****************************************************************************
// let textToSearch = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// contact@example.com
// Pellentesque sit amet lacus vitae massa pretium aliquam.
// Nulla facilisi. info@sample.org
// Donec sed dolor ac odio consequat varius.
// Integer non lorem lacus. support@website.com
// Maecenas non leo laoreet, condimentum lorem nec, vulputate massa.
// Quisque mollis dolor non tellus placerat vitae sodales lectus porta.
// Curabitur ut suscipit tellus. hello@hello-world.net
// Phasellus sed sapien eget mi condimentum vehicula.
// Nam cursus, diam et lacinia faucibus, email@domain.com
// Nunc ultrices auctor sapien id cursus.
// Aliquam erat volutpat. customer@service.com
// Morbi in ipsum sit amet pede facilisis laoreet.
// Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.
// Vestibulum tincidunt malesuada tellus.
// Ut ultrices ultrices enim. team@example.com`;
//
// let match = textToSearch.match(/(?<username>\S+)@\S+\.\S+/);
// console.log(match);
//
// Array [ "contact@example.com", "contact" ]
// 0: "contact@example.com"
// 1: "contact"
// groups: Object { username: "contact" }
// username: "contact"
// index: 57
// input: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\ncontact@example.com\nPellentesque sit amet lacus vitae massa pretium aliquam.\nNulla facilisi. info@sample.org\nDonec sed dolor ac odio consequat varius.\nInteger non lorem lacus. support@website.com\nMaecenas non leo laoreet, condimentum lorem nec, vulputate massa.\nQuisque mollis dolor non tellus placerat vitae sodales lectus porta.\nCurabitur ut suscipit tellus. hello@hello-world.net\nPhasellus sed sapien eget mi condimentum vehicula.\nNam cursus, diam et lacinia faucibus, email@domain.com\nNunc ultrices auctor sapien id cursus.\nAliquam erat volutpat. customer@service.com\nMorbi in ipsum sit amet pede facilisis laoreet.\nDonec lacus nunc, viverra nec, blandit vel, egestas et, augue.\nVestibulum tincidunt malesuada tellus.\nUt ultrices ultrices enim. team@example.com"
// length: 2
// <prototype>: Array []


// let emailPattern = /(\S+)@\S+\.\S+/g; // Ensure you are using the global flag
// let match;
//
// while ((match = emailPattern.exec(textToSearch)) !== null) {
//   console.log('Full match:', match[0]);
//   console.log('Username:', match[1]);
// }

// *****************************************************************************
// let greeting = "Hello, world!";
// greeting.replace("world", "internet"); // Hello, internet!

// You can also call string methods directly on the string literal:
// "Hello, world!".replace("world", "internet"); // Hello, internet!

// let greeting = "Hello, world!";
// let newGreeting = greeting.replace("world", "internet");
// console.log(newGreeting);
//
//
// console.log("Hello, world! The world is beautiful.".replaceAll("world", "internet"));
// Hello, internet! The internet is beautiful.

// let text = `Hello, world! The world is beautiful.
//   We must protect the beautiful world.
//   We must protect the beautiful world!
//   `;
//
// let NewText = text
//   .replaceAll("world", "internet")
//   .replaceAll("the", "our")
//   .replaceAll("The", "Our")
//   .replaceAll("beautiful", "wonderful")
//   .replaceAll("protect", "save");
//
// console.log(NewText);


// let text = "Java, java, JAVA, jAVA";
// text.replace(/java/i, "JavaScript");
// "JavaScript, java, JAVA, jAVA"

// let text = "Java, java, JAVA, jAVA";
// let newText = text.replace(/java/i, "JavaScript");
// console.log(newText);


// let text = "Java, java, JAVA, jAVA, java";

// let newText = text.replaceAll(/java/g, "JavaScript");
// console.log(newText);
// "JavaScript, JavaScript, JavaScript, JavaScript"

// let newText = text.replace("java", "JavaScript");
// console.log(newText);
// "JavaScript, JavaScript, JavaScript, JavaScript"

// let text =
//   "squeezy@lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net";
//
// let newText = text.replaceAll(/(\S+)@(\S+\.\S+)/gi, "$1");
// console.log(newText);
// console.log(text);
// lemon-aid.io, wooflogistics.com, eggnogemporium.net

// Also works with .replace():
// text.replace(/\S+@(\S+\.\S+)/i, "$1");
// lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net


// let clients = ["lemon-aid", "eggnogemporium"];
// let text =
//   "squeezy@lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net";
//
// function replacer(match, domainCaptureGroup, offset, string, groups) {
//   for (let i = 0; i < clients.length; i++) {
//     if (domainCaptureGroup.includes(clients[i])) {
//       return domainCaptureGroup;
//     }
//   }
//   return "";
// }
//
// text.replaceAll(/\S+@(\S+\.\S+)/gi, replacer);
// // lemon-aid.io,  eggnogemporium.net

// let clients = ["lemon-aid", "eggnogemporium"];
// let text =
//     "squeezy@lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net";

// function replacer(match, domainCaptureGroup, offset, string, groups) {
//   for (let i = 0; i < clients.length; i++) {
//     if (domainCaptureGroup.includes(clients[i])) {
//       return domainCaptureGroup;
//     }
//   }
//     return '';
// }

// let newText = text.replaceAll(/\S+@(\S+\.\S+)/gi, replacer);
// console.log(newText)

// let text =
//     "squeezy@lemon-aid.io, barky@wooflogistics.com, cluck@eggnogemporium.net";
//
// function replacer(match, domainCaptureGroup, offset, string, groups) {
//   return string;
// }
//
// let newText = text.replaceAll(/\S+@(\S+\.\S+)/gi, replacer);
// console.log(newText);
//
// lemon-aid.io,  eggnogemporium.net

// function replacer (match, p1, p2, offset, string) {
//   console.log(`match: ${match}`);
//   console.log(`p1: ${p1}`);
//   console.log(`p2: ${p2}`);
//   console.log(`offset: ${offset}`);
//   console.log(`string: ${string}`);
//   return `${p2}, ${p1}`;
// };
//
// let text = "Hello, World";
// let newText = text.replace(/(\w+), (\w+)/, replacer);
// console.log(newText);


/* ******************************************************************* */
// JetBrains AI question about the section

// Task: Replace all occurrences of the word "fox" with the word "cat" in the following sentence:
// let text = "The quick brown fox jumps over the lazy fox";
//
// // Your solution here:
// // (Use the replaceAll() method)
// let newText = text.replaceAll("fox", "cat");
// console.log(newText);


// let newText = text.replace(/fox/gi, "cat");
// console.log(newText);

/* ******************************************************************* */
// JetBrains AI question about the section

// Suppose you have a string:
// "Hello World, This is a wonderful world!".
// You want to replace all occurrences of the word 'world'
// (case insensitive) with 'universe'.
// How would you do that with a regular expression and
// the replaceAll() method in JavaScript?

// let text = "Hello World, This is a wonderful world!";
// let newText = text.replaceAll(/world/gi, "universe");
// console.log(newText);

/* ******************************************************************* */
// JetBrains AI question about the section
// let text = "I have 5 apples and 10 bananas.";
// function double (num1) {
//   return num1 *= 2;
// }
// let newText = text.replaceAll(/\d+/gi, double);
// console.log(newText);


/* ******************************************************************* */
// JetBrains AI question about the section
/*
* Consider the following JavaScript string: "The price is $100. The discounted price is $80."
We want to apply an additional 10% discount to all prices in the string.
* However, prices are string values with a dollar sign ($),
* so we can't directly perform mathematical operations on them.
To solve this, we can use the replaceAll() method with a callback function.
* The callback function will be responsible for extracting the numerical part of the price,
* calculating the discounted price, and then returning this new price in the correct format.
Given the regular expression for matching price values is /\$\d+/g,
* how would you define a JavaScript callback function to calculate the additional discount
* and format the new price?
* Can you also apply this callback function to the replaceAll() method
* to get the final discounted prices string?

* (As an additional hint: within the callback function,
use match.slice(1) to remove the dollar sign and get the numerical part of the price,
use Number(match.slice(1)) * 0.9 to calculate the discounted price, and,
use '$' + (Number(match.slice(1)) * 0.9).toFixed(2) to format the new price.)
* */


// let text = "The price is $100. The discounted price is $80.";
// let newText = text.replaceAll(/\$\d+/g, extraDiscount);
// console.log(newText);
//
// function extraDiscount(price) {
//   price = price.slice(1);
//   price = price * 0.9;
//   price = price.toFixed(2);
//   return "$" + price;
// }

// let test = "$100";
// console.log(test.slice(1));


/* ******************************************************************* */
// function outerFunction() {
//   let outerVariable = 'I am outside and edited!';
//
//   function innerFunction() {
//     // This is where the closure happens
//     console.log(outerVariable); // It remembers outerVariable
//   }

  // returns the function which has a closure over outerVariable
  // return innerFunction;
// }

// Trying to access outerVariable here will not work
// console.log(outerVariable); // ReferenceError


// But you can use innerFunction, which remembers outerVariable!
// const newFunction = outerFunction();
// newFunction(); // This will correctly log 'I am outside!'

// outerFunction();
// innerFunction();

/* ******************************************************************* */
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 5; i++) {
//     let i = 'name';
//     console.log(i);
//   }
// }

/* ******************************************************************* */
// let celsius = [0, 30, 45];
// let newCelsius = celsius.map((temp) => temp * 1.8 + 32); // [32, 86, 113]
// console.log(celsius);
// console.log(newCelsius);

// let celsius = [0, 30, 45];
// for (let i = 0; i < celsius.length; i++){
//   celsius[i] = celsius[i] * 1.8 + 32;
// }
// console.log(celsius);

// function cToF(temp) {
//   return temp * 1.8 + 32;
// }
//
// let celsius = [0, 30, 45];
// for (let i = 0; i < celsius.length; i++) {
//   celsius[i] = cToF(celsius[i]);
// }
// console.log(celsius);

/* ******************************************************************* */
// let numbers = [1, 2, 3, 4, 5, 6];
//
// let j = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     numbers[j] = numbers[i];
//     j += 1;
//   }
// }
// console.log(numbers);

// Hi, I got this ouput for the above code `Array(6) [ 2, 4, 6, 4, 5, 6 ]` I didn't expect that, what's the wrong on my code?

/*
The issue is due to how the JavaScript array operates when you modify it during the iteration, especially when the modification involves changing array's indices.
Looking closely at the code, what you try to do is, shift all the even numbers to the start of the array. In the end, you want to print these numbers.
This is what happens step by step as the code runs:
Initial array = [1, 2, 3, 4, 5, 6]
(i = 0, j = 0) 1 is not an even number and the array stays the same.
(i = 1, j = 0) 2 is an even number and it will overwrite the first element of the array. The array becomes [2, 2, 3, 4, 5, 6] with j increased by 1.
(i = 2, j = 1) 3 is not an even number. The array stays the same.
(i = 3, j = 1) 4 is an even number and it will overwrite the second element of the array. The array becomes [2, 4, 3, 4, 5, 6] with j increased by 1.
(i = 4, j = 2) 5 is not an even number. The array stays the same.
(i = 5, j = 2) 6 is an even number and it will overwrite the third element of the array. The array becomes [2, 4, 6, 4, 5, 6] with j increased by 1.
As you can see, the print statement will print [2, 4, 6, 4, 5, 6] which is not what you expected.
To fix this error, I would recommend creating a new array and pushing all even numbers to it, avoiding the problem of modification during iteration:

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);

This way, the new array evenNumbers will contain all the even numbers from the original array.
*/

/* ******************************************************************* */
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers[i] = numbers[i];
//   }
// }
// console.log(evenNumbers); // Array(6) [ <1 empty slot>, 2, <1 empty slot>, 4, <1 empty slot>, 6 ]

// Okay, I got it. What's the problem the following code now?
/*
* It looks like there is a slight issue in the revised code. You're trying to populate the evenNumbers array with only even numbers from the numbers array. However, in the evenNumbers array assignment line, you're still using i as the index, when i is being incremented for each number in the numbers array, not just the even ones. This results in undefined items in the evenNumbers array at the positions of odd numbers.
So, while you're correctly only copying over even numbers from the numbers array, the places at which you're inserting these numbers into the evenNumbers array is incorrect.
* */

/* ******************************************************************* */
// Here's the correct version of the code:
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = [];
// let j = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers[j] = numbers[i];
//     j++;
//   }
// }
// console.log(evenNumbers);

/* ******************************************************************* */
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = [];
// let counter = 0;
//
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0 ) {
//     evenNumbers[counter] = numbers[i];
//     counter++;
//   }
// }
//
// console.log(evenNumbers);

/* ******************************************************************* */
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = [];
//
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }
//
// console.log(evenNumbers);


/* ******************************************************************* */
// let celsius = [0, 30, 45];
// for (let i = 0; i < celsius.length; i++) {
//   celsius[i] = celsius[i] * 1.8 + 32;
// }
// console.log(celsius);

/* ******************************************************************* */
// function checkNumbers (limit) {
//   let numbers = [];
//   for (let i = 0; i < limit; i++) {
//     numbers[i] = i;
//   }
//
//   let evenNumbers = [];
//   let oddNumbers = [];
//   let evenCounter = 0;
//   let oddCounter = 0;
//
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0){
//       evenNumbers[evenCounter] = numbers[i];
//       evenCounter++;
//     } else {
//       oddNumbers[oddCounter] = numbers[i];
//       oddCounter++;
//     }
//   }
//   console.log(numbers);
//   console.log(evenNumbers);
//   console.log(oddNumbers);
// }

/* ******************************************************************* */
// let numbers = [1, 2, 3, 4, 5, 6];
// let newNumbers = numbers.reduce((total, current) => total + current, 0); // 21
// console.log(newNumbers);

/* ******************************************************************* */
// function createCounter() {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   };
// }
//
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

// for (let i = 0; i < 100; i++) {
//   console.log(counter());
// }


/* ******************************************************************* */
// let demo = {
//   showThis: () => console.log(this),
// };
//
// demo.showThis(); // Window { ... }



// let demo = {
//   showThis: function () {
//     console.log(this);
//   },
// };
//
// demo.showThis(); // {showThis: f}

/* ******************************************************************* */
// let demo = {
//   showThis: () => console.log(this),
// };
//
// demo.showThis();

// let demo = {
//   showThis: function () {
//     console.log(this);
//   },
// };
//
// demo.showThis();

/* ******************************************************************* */
// let demo = {
//   name: "demo",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayHelloLater: function () {
//     setTimeout(() => console.log(`Hello, ${this.name}!`), 1000);
//   },
// };
//
// demo.sayHello(); // Hello, demo!
// demo.sayHelloLater(); // Hello, demo! (after 1 second)


// let demo = {
//   name: "demo",
//
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//
//   sayHelloLater: function () {
//     setTimeout( () => console.log(`Hello, ${this.name}!`), 1000 );
//   },
//
// };
//
// demo.sayHello();
// demo.sayHelloLater();

/* ******************************************************************* */

// let demo = {
//   name: "demo",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayHelloLater: function () {
//     setTimeout(this.sayHello.bind(this), 1000);
//   },
// };

// let demo = {
//   name: "demo",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayHelloLater: function () {
//     setTimeout(this.sayHello.bind(this), 1000);
//   },
// };
//
// demo.sayHello();
// demo.sayHelloLater();

/* ******************************************************************* */
// function showArgs() {
//   console.log(arguments);
// }
//
// showArgs("Hello", "nomad!");
// // Arguments(2) ["Hello", "nomad!", callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function showArgs() {
//   console.log(arguments);
// }
//
// showArgs(1, 'Test', 2, [1,2,3], {test: "test"});

// let showArgs = () => console.log(arguments);
//
// showArgs("Hello", "nomad!"); // ReferenceError: arguments is not defined


/* ******************************************************************* */
// let numbers = [1, 2, 3, 4, 5];
//
// numbers.forEach((number) => {
//   console.log(number);
// });

// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.forEach((number) => {
//   console.log(number);
// });
// console.log(result);  // This will output: undefined

/* ******************************************************************* */

// let numbers = [1, 2, 3, 4, 5];
//
// numbers.forEach((number) => console.log(number));

/* ******************************************************************* */
// function outer() {
//   let movie = 'Amadeus';
//
//   function inner() {
//     let movie = 'The Shining';
//     console.log(movie);
//   }
//
//   inner();
// }
//
// outer(); // The Shining
// // inner();
/* ******************************************************************* */
function outer () {
  let counter = 0;
  function inner () {
    counter++;
    console.log(counter);
  }
  return inner;
}

let newFunc = outer();
// console.log(newFunc);
// console.log(newFunc);

// for (let i = 0; i < 100; i++) {
//   newFunc(); // console.log(counter);
//              // counter -> counter++; -> defined the inner function
//              // let counter = 0; -> defined the outer function
// }

/* ******************************************************************* */

// function createCounter() {
//   let count = 0;
//   return function () {
//     count += 1;
//     return count;
//   };
// }
//
// const counter = createCounter();
// // console.log(counter()); // 1
// // console.log(counter()); // 2
// counter();


/* ******************************************************************* */

// let numberString = "2,4,6,8,10";
// console.log(numberString[3]);

/* ******************************************************************* */

// let numberString = "2,4,6,8,10";
// numberString.split(); // ["2", ",", "4", ",", "6", ",", "8", ",", "1", "0"];
// console.log(numberString.split());

/* ******************************************************************* */