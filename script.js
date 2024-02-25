// Задания 1
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 1996,
};
console.log(car);

// Задания 2
console.log(car.year);

// Задания 3
car.year = 1000;

console.log(car.year);

// Задания 4
car.color = "red";

// Задания 5
delete car.model;

// Задания 6
function user(a) {
  car = {
    brand: "Toyota",
    model: "Camry",
    year: 1996,
  };
}
console.log(user);

// Задания 7
const course = {
  name: "Peacsoft Hous",
  adress: {
    city: "Bishkek",
    street: "Гражданская",
    home: 119,
  },
};
console.log(course);

// Задания 8
const personOne = { name: "Киану Ривз", age: "59" };

const personTwo = { name: "Киану Ривз", age: "59" };

console.log(personOne === personTwo);

// Задания 9
let madeIn = "made";
car[madeIn] = "Japan";

// Задания 10
const copyObject = Object.assign({}, car);

copyObject.year = 9999;

console.log(car);
console.log(copyObject);
