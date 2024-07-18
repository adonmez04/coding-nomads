// let musicians = [
//   "Jimi Hendrix",
//   "Johnny Cash",
//   "Elvis Presley",
//   "Dolly Parton",
// ];

// musicians[10] = 2;
// musicians[11] = musicians[10]*2;
// musicians[12] = true;
// console.log(musicians);

// console.log(musicians[0][0]);
// console.log(musicians.length);
// console.log(musicians[0]);
// console.log(musicians[musicians.length - 1]);

// for (let i = 0; i < musicians.length; i++) {
//   console.log(musicians[i]);
// }

// *****************************************************************************

// let fruits = ["apple", "banana"];
// // console.log(fruits);
// fruits.push("orange");
// console.log(fruits);
//
// console.log(fruits.pop());
// console.log(fruits);

// *****************************************************************************


// let musicians = [
//   "Jimi Hendrix",
//   "Johnny Cash",
//   "Elvis Presley",
//   "Dolly Parton",
// ];
//
//
// let indexOfLastItem = musicians.length - 1;
// let lastItem = musicians[indexOfLastItem];
// console.log(`The total item in the array is: ${musicians.length}`);
// console.log(`The last item in the array is: ${lastItem}`);

// let indexOfLastItem = musicians.length - 1;
// let lastItem = musicians[indexOfLastItem];
// console.log(lastItem); // Outputs: "Dolly Parton"


// let howManyMusicians = musicians.length;
// console.log(howManyMusicians);

// *****************************************************************************

// let musicians = [
//   "Jimi Hendrix",
//   "Johnny Cash",
//   "Elvis Presley",
//   "Dolly Parton",
// ];
//
// let i = 0;
// let current = '';
//
// while(true) {
//   current = musicians[i];
//   console.log(current);
//   i++;
//   if (current === undefined) break;
// }

// *****************************************************************************

//
// let largeArray = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];
//
// // Suppose you want to replace every fruit that starts with a vowel with "kiwi"
// for (let i = 0; i < largeArray.length; i++) {
//   if ('aeiou'.includes(largeArray[i][0].toLowerCase())) {
//     largeArray.splice(i, 1, "kiwi");
//   }
// }
//
// console.log(largeArray); // ["kiwi", "banana", "kiwi", "date", "kiwi", "fig", "grape", "kiwi"]


// *****************************************************************************


// let colors = ["red", "blue", "green", "orange"];
// colors.splice(3,1);
// console.log(colors);


// let colors = ["red", "green", "blue"];
// colors.push("purple", ["blue", "green", "red"], null);
// console.log(colors);
// colors.pop();
// console.log(colors);

// let colors = ["red", "green", "blue"];
// colors.shift();
// console.log(colors);
// colors.unshift("reddish");
// console.log(colors);

// Suppose you want to replace every fruit that starts with a vowel with "kiwi"
// for (let i = 0; i < largeArray.length; i++) {
//   if ('aeiou'.includes(largeArray[i][0].toLowerCase())) {
//     largeArray.splice(i, 1, "kiwi");
//   }
// }

// *****************************************************************************

// let warning = [
//   "x10",
// ];
//
// for (let i = 0 ; i < warning.length ; i++) {
//   let change;
//   if ('x'.includes(warning[i][0])){
//     warning.splice(1, 0, "You don't use px");
//   }
// }
// console.log(warning);

// *****************************************************************************

// let obj1 = { value: 10 };
// let obj2 = obj1;
// obj2.value = 20;
// console.log(obj1.value); // 20

// let obj1 = { value: 10 };
// console.log(obj1);
// let obj2 = obj1;
// obj2.value = 20;
// console.log(obj1.value);
// console.log(obj1);
// obj1.value = 30;
// console.log(obj1);
// console.log(obj2);



// console.log(Math.PI);

// let obj1 = {
//   name : "Alper",
//   age : 35,
//   occupation: "coder",
// }
//
// console.log(obj1);
// console.log(obj1);
// console.log(obj1);
//
// obj1.country = "Turkey";
// obj1.position = "Frontend Developer";
// obj1.age = 36;
//
// let test = delete obj1.test;
// console.log(obj1.country);
// console.log(obj1);
//
// console.log(test);


// let value = Math.PIES
// console.log(value); // undefined

// *****************************************************************************

// let test = NaN;
// console.log(test);
// console.log(typeof test);
//
// console.log(test ** 0);

// *****************************************************************************

//
// const currentUser = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   emails: ["John@geemail.com", "MysteryMan@hatmail.com"],
//   locations: [
//     {
//       address: "123 State St",
//       city: "Scranton",
//       state: "PA",
//       zip: "12345",
//     },
//     {
//       address: "500 Paseo de Vermut",
//       city: "Bilbao",
//       country: "Spain",
//     },
//   ],
//   greeting: function () {
//     console.log(`Hey, ${this.firstName}, your level is: ${this.age}!`);
//   },
//   "is Authorized": true,
// };
//
// // console.log(currentUser);
// // console.log(currentUser.greeting());
// console.log(currentUser.locations[1].country);
// console.log(currentUser.locations[0].state);
//
// const testUser = {
//  car:'fiat'
// };
// console.log(testUser);
//
// const divTextPerScreenWidthMap = new Object(
//   {'360' : 'click'},
//   {'480' : 'click it'},
//   {'768' : 'click it right'},
//   {'1024' : 'you know you want to click it'},
//   {'1280' : 'click this button which is very long will help you'}
// );
//
// console.log(divTextPerScreenWidthMap);
//
//
// const literal = {
//   "Name": "value",
//   "Array": [],
//   "NestedObject": {name: {inside : 123}}
// };
//
// console.log(literal.NestedObject.name);

// *****************************************************************************

// let array = [1, 2, 3];
// console.log(array);
// console.log(array.length)
// array["property"] = "value";
// console.log(array);
// console.log(array.length)


// let array2 = ['apple', 'banana', 'kiwi', 'orange', 1, 2, 3];
// console.log(array2);
// console.log(array2.length);

// *****************************************************************************

// let array2 = ['apple', 'banana', 'kiwi', 'orange', 1, 2, 3];

// let array3 = [];
// array3['fruit'] = "apple";
// array3[0] = "banana";
// array3[10] = "orange";
// console.log(array3.length);
// console.log(array3);

// *****************************************************************************

// const hello = "Hello!";
// console.log(window.hello);
// console.log(this.hello);
// console.log(window['hello']);
// console.log(this['hello']);


// function hey(){
//   console.log("Hey!");
// }
//
// window.hey();
// this.hey();
// this['hey']();


// *****************************************************************************

//
// let myObj = {name: 'John', age: 31, city: 'New York', 'time zone': 'utc+7'};
// let myObj2 = JSON.stringify(myObj)
// console.log(myObj2);
// console.log(typeof myObj2);
//
// let myObj3 = JSON.parse(myObj2)
// console.log(myObj3);
// console.log(typeof myObj3);


// *****************************************************************************


// The Object Literal Notation *****************************

// const person = {
//   name: "John",
//   age: 20,
// };
//
// console.log(person);


// The Factory Function *****************************

// function createPerson(name, age){
//   return {
//     name: name,
//     age: age,
//     printInfo: function(){
//       console.log(`My name is ${this.name}. I'm ${this.age} years old.`)
//     },
//   };
// }
//
// let john = createPerson("John", 20);
// john.printInfo();
//
// let sarah = createPerson("Sarah", 22);
// sarah.printInfo();


// The Constructor Function *****************************

// function Person(name, age){
//   this.name = name;
//   this.age = age;
//   this.printInfo = function() {
//    console.log(`My name is ${this.name}. I'm ${this.age} years old.`);
//   };
// }
//
// let john = new Person("John", 20);
// let sarah = new Person("Sarah", 22);
// john.printInfo();
// sarah.printInfo();


// console.log(john.__proto__);

// The new Operator *****************************

// const birthday = new Date(3000, 10, 1);
// console.log(birthday);


// The Object.create() Method *****************************

// const person = {
//   name: null,
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };
//
// // console.log(person.name);
// // person.printIntroduction();
//
// const matt = Object.create(person);
// matt.name = "Matthew";
// matt.isHuman = true;
// matt.printIntroduction();
//
// console.log(matt);


// console.log(person.printIntroduction === matt.printIntroduction)

// console.log(matt.__proto__);

// const matt2 = Object.create(matt);
// matt2.name = "Matthew2";
// matt2.isHuman = true;
// matt2.printIntroduction();
//
// console.log(matt2.__proto__);
//
// console.log(person.printIntroduction === matt.printIntroduction);
// console.log(person.printIntroduction === matt2.printIntroduction);
// console.log(matt.printIntroduction === matt2.printIntroduction);



// *****************************************************************************


// let start = new Date();
// console.log(start);
//
// for (let i = 0; i < 1_000_000_000; i++) {}
//
// let end = new Date();
// console.log(end);
//
// console.log(end - start); // subtracting dates

// let now = new Date();
// console.log(now);
// console.log(typeof now);
// console.log(now.toLocaleDateString());
// console.log(typeof now);

// let now = new Date();
// console.log(now.toISOString()); // 3000-11-15T07:50:50.000Z
//
// let now = new Date();
// let formatter = new Intl.DateTimeFormat("en-US", {
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// });
// console.log(formatter.format(now)); // November 15, 3000

//
// let now = new Date();
// now;


// let start = new Date();
// console.log(start);
//
// for (let i = 0; i < 1_000_000_000; i++) {
//   let j = i;
// }
//
// let end = new Date();
// console.log(end);
//
// console.log(end - start); // subtracting dates


