// 1. #### BASICS ###
document.getElementById("js_in_body").innerHTML = "Fahmida Rahman Nira";

function myFunction() {
  document.getElementById("js_in_head").innerHTML =
    "Paragraph Change from Head Tag.";
}

// document.getElementById("demo").innerHTML = 5+5;
// document.write(5+6);
// alert(100+100);
// console.log(100+200);

// 2. #### STATEMENTS ###
let x, y, z;
x = 50;
y = 52;
z = x + y;

document.getElementById("demo").innerHTML = "The value of z is " + z + ".";

// 3. #### VARIABLES ###
let carName = "BMW";
document.getElementById("demo2").innerHTML = carName;

{
  let carName = "Audi";
  // console.log(carName);
}

// try {
//   const PI = 3.141592653589793;
//   PI = 3.14;
// }
// catch (err) {
//   document.getElementById("demo2").innerHTML = err;
// }

const cars = ["saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
document.getElementById("demo2").innerHTML = cars;

const car = { type: "Audi", model: "500", color: "white" };
car.color = "black";
car.owner = "Fahmida Rahman";
document.getElementById("demo3").innerHTML = "Car owner is " + car.owner;

// 3. #### OPERATORS ###
let text1 = "10";
let text2 = "5";
let result = text1 < text2;
// console.log(result);

let sen1 = "Fahmida Rahman ";
sen1 += "Nira";
// console.log(sen1);

let x1 = 10;
x1 <<= 5;

// console.log(x1);

let x2 = "audi" + 16 + 4;
// console.log(x2);

let y1 = 1e5;
let z1 = 123e-5;
console.log(y1, "and ", z1);

// 4. #### DATA TYPES ###
let nira;
// console.log(nira);

// 5. #### FUNCTIONS ###
function myTestFunc(p1, p2) {
  return p1 * p2;
}
let myRes = myTestFunc(5, 6);
// console.log(myRes);

let n = myFunction2(4, 5);
function myFunction2(a, b) {
  return a * b;
}
// console.log(n);

function toCelcious(farenheit) {
  return (5 / 9) * (farenheit - 32);
}
let value = toCelcious(77);
// console.log(value);

// 5. #### OBJECTS ###
const prophet = {
  firstName: "Hazrat Muhammad",
  lastName: "Sallallahu Alaihi Wasallam",
  age: 62,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// prophet.fullName = function() {
//   return (this.firstName+ " " + this.lastName).toUpperCase();
// }

const p = prophet;
p.age = 63;

document.getElementById("demo5").innerHTML =
  prophet.fullName() + " " + prophet.age;
console.log(prophet.fullName());

const person = {
  firstName: "Fahmida",
  lastName: "Rahman",
  age: 26,
  eyeColor: "black",
};

person.weight = 62;

// let nameText = "";
// for (let x in person) {
//   nameText += person[x] + " "
// }

document.getElementById("demo4").innerHTML =
  person.firstName +
  " " +
  person.lastName +
  " is " +
  person.age +
  " years old." +
  " And she is " +
  person.weight +
  " kg.";

console.log(person["eyeColor"]);

const fruits = {
  name: "Mango",
  season: "summer",
  taste: "sweet",
  price: 120,
  famousIn: "Rajshahi"
}

let text = "";
for (let fruit in fruits) {
  text += fruits[fruit] + " ";
};
document.getElementById("demo6").innerHTML = text;

const myCars = {
  name: "Audi",
  model: 1020,
  weight: "870kg",
  color: "black"
};
// let myCarsObj = "";
// for(let [car, value] of Object.entries(myCars)) {
//   myCarsObj += car + ": " + value + "<br>"
// }

const myArray = Object.values(myCars);
document.getElementById("demo7").innerHTML = myArray;
console.log(typeof(myArray));
console.log(Array.isArray(myArray));

const colors = {
  Black: 10,
  Orange: 20,
  Red: 15,
  Pink: 54,
  Yellow: 25
}

let colorText = "";
for(let [color, v] of Object.entries(colors)) {
  colorText += color + ": " + v + "<br>"
}

document.getElementById("demo8").innerHTML = colorText;

let colorString = JSON.stringify(colors);
document.getElementById("demo9").innerHTML = colorString;

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  // this.nationality = "Bangladeshi";
}

const myFather = new Person("Ataur", "Rahman", 58 , "black");
// myFather.nationality = "Bangladeshi"

const myMother = new Person("Bilkis", "Ara", 58 , "black");

// Add a new Property
Person.prototype.nationality = "Bangladeshi";

document.getElementById("demo10").innerHTML = "My father's name is " + myFather.firstName + " " + myFather.lastName + " and he is " + myFather.age + " years old. My father is " + myFather.nationality;

document.getElementById("demo11").innerHTML = "My mother's name is " + myMother.firstName + " " + myMother.lastName + " and she is " + myMother.age + " years old. My mother is " + myMother.nationality; 


function Car (make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

const myNewCar = new Car("Ford", "Mustang", 2024, "Black");
console.log(myNewCar.make);
console.log(myNewCar.model); 
console.log(myNewCar.year); 
console.log(myNewCar.color); 

// 6. #### JavaScript Events ###
