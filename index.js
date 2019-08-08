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


