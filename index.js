// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>More Objects</h1>`;

//Value Types (Primitives) --> Number, String, Boolean, Symbol, undefined, null
//Reference Types -> Object, Function, Array
let x = 10;
let y = x;

x=20;
console.log(x);
console.log(y);

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);

let obj = {value: 10 };

function increaseValue(obj) {
  obj.value++;
}

console.log(obj);

increaseValue(obj);

console.log(obj);

//Primitives are copied by their value
//Objects are copied by their reference


//Enumerating Properties of an Object
const circle = {
  radius: 1,
  draw() {
    console.log('draw method');
  }
};

for(let key in circle)
  console.log(key, circle[key]);

for(let key of Object.keys(circle))
  console.log(key);

for(let entry of Object.entries(circle))
  console.log(entry);

//cloning an object
const another = {};

for(let key in circle)
  another[key] = circle[key];

console.log(another);

//better way
const another2 = Object.assign({}, circle);

console.log(another2);

//simpliest way to clone a object
const another3 = { ...circle };

console.log(another3);


//Garbage Collection
//happens automatically

//Templated Literals `` (ES6)
const another10 = `This is my 
'first' message`;

console.log(another10);

const name = 'John';
const message = `Hi ${name},

Thank you for joining my mailist list`;

console.log(message);

//Date
const now = new Date(); //current datetime
const date1 = new Date('May 11 2019 09:00');
const date2 = new Date(2018, 4, 11, 9);

console.log(now);
console.log(date1);
console.log(date2);
