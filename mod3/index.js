"use strict"

// // const object = {
// //     key: value,
// //     key: value   
// }
// const frontend = {
//     language_1: "HTML",
//     language_2: "CSS",
//     language_3: "Js"
// };
// console.log("frontend", frontend);
// const student = {
// name: "Alksandra",
// age: 31,
// sex: "female",
// course: frontend,
// passExam: true 
// };
// console.log("student", student);

// console.log(student.name);
// console.log(student.lastName);
// console.log(student.age);
// console.log(student.sex);
// console.log(student.course);
// console.log(student.paaExam);

// console.log(frontend["language_1"]);
// console.log(frontend["language_2"]);
// console.log(frontend["language_3"]);

// student.lastName = "0'Hurn";
// console.log(student.lastName);

// console.log("student", student);

// frontend["language_3"] = "Javascript";
// console.log(frontend["language_3"]);

// console.log("frontend", frontend);

// student.address = "Heroyv Staluhradu, 6";
// console.log(student.address);

// console.log("student", student);

// delete frontend.lanfuage_1;
// console.log(frontend.language_1);
// console.log("frontend", frontend);

// delete frontend["lanfuage_2"];
// console.log(frontend["language_2"]);
// console.log("frontend", frontend);

// const myTeacher = "Sasha Hrevtsove";
// const course = "frontend";

// const group_17 = {
//     myTeacher,                             
//     course,
//     count: 10
// };
// console.log(group_17);

// const key = "test";

// const getKey = function() {
//     return "score";
// };

// const testResult = {
//     key,
//     [key]: "2",
//     [getKey()]: 22
// };

// console.log(testResult);

/////////////////////////////////

// const myProducts = {
//     milk: 0.5,
//     eggs: 10,
//     apples: 5,
//     toCheck() {
//         console.log("Проверь наличие");
//     },
//     oranges: 10
// };
// myProducts.toCheck();
// console.log("myProducts", myProducts);

// myProducts.toBuySweets = function() {
// console.log("Ну купи уже что-то сладенькое!");
// };

// myProducts.toBuySweets();
// console.log("myProducts with new method", myProducts);

// delete myProducts.toBuySweets;
// console.log("myProducts without new method", myProducts);

///////////////////////////////////////////////////

// const product = {
//     type: "welness & spa",
//     category: "hair care",
//     productName: "shampoo",
//     price: 76.94,
//     showProductName() {
//         console.log(this.productName);
//     },
//     changePrice(value) {
//         this.price = value;
//     }

// };

// product.showProductName();

// product.changePrice(89.5);
// console.log(product.price);

////////////////////////////////////////////////////

// const myCars = {
//     tesla: "modelX",
//     zhiguli: "kopeyka",
//     lada: "xRay",
//     bmx:  "mongoose"
// };

// for (const key in myCars) {
//  console.log("key: ", key);
// }

// for (const key in myCars) {
//     console.log("value: ", myCars[key]);
// }

///////////////////////////////////////////////////

// const hero = {
//     name: "Black cat",
//     power: 100,
//     lifes: 9,
//     speed: 45
// };

// console.log("my hero", hero);

// const keysOfHero = Object.keys(hero);
// console.log(keysOfHero);

// for (const key of keysOfHero) {
// console.log("key: ",key);
// console.log("value: ", hero[key]);
// }

// const entriesOfHero = Object.entries(hero);
// console.log("entries Of Hero", entriesOfHero);

// for (const entry of entriesOfHero) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log('${key}: ${value}')
// }

///////////////////////////////////////////

// const hotel = {
//     hotelName: "Resort Hotel",
//     stars: 5,
//     capacity: 100
// };
// console.log(hotel);
// const { hotelName, stars, status = 5} = hotel;
// console.log(hotel);
// console.log('hotelName - ${hotelName}, stars - ${stars}, status - ${status}')

///////////////////////////////////////////////////

 