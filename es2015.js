// var vs let vs const
//function scope
function getDate () {
  var date = new Date()
  function formatDate () {
    return date.toDateString().slice(4) // ✅
  }
  return formatDate()
}
console.log(getDate());
// console.log(date) // ❌ Reference Error

//Block Scope
//Variable declared inside for loop is accessible outside
function discountPrices (prices, discount) {
  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }
  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150
  return discounted
}
discountPrices([100, 200, 300], .5) // [50, 100, 150]


//Hoisting
// function discountPrices (prices, discount) {
//   var discounted = undefined
//   var i = undefined
//   var discountedPrice = undefined
//   var finalPrice = undefined

//   discounted = []
//   for (i = 0; i < prices.length; i++) {
//     discountedPrice = prices[i] * (1 - discount)
//     finalPrice = Math.round(discountedPrice * 100) / 100
//     discounted.push(finalPrice)
//   }

//   console.log(i) // 3
//   console.log(discountedPrice) // 150
//   console.log(finalPrice) // 150

//   return discounted
// }

//for..of loop
let arr = [6,7,8,9];
for(let item of arr){
  console.log(item);
}

//string templates
let name = 'Jitendra Singh';
let age = 29;
console.log(`My name is ${name} and My age is ${age}`);

//Object, Array Destructuring and default parameter
let arr1 = [1,2,3,[4,5,6,[7,8]]];
let obj1 = {
  name: 'Jitendra Singh',
  age: 29,
  address: {
    city: 'Hyderabad'
  }
}

let [a,b,c,[d,e,f,[g,h,i = 10]]] = arr1;
let {name:myName, age, address: { country = 'India',city : myCity}} = obj1;
console.log(a,b,c,d,e,f,g,h,i);
console.log(myName,age,myCity,country);

//spread operator
console.log([...arr1]);
console.log({...obj1});

//arrow function
//does not have it's own this keyword. Inherit from parent

let sayName = () => {
  console.log(this);
}

function sayHello(){
  console.log(this);
}
sayName();
sayHello();

var cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
    console.log(this.lives);  //null
  }
}

cat.jumps();

var button = document.getElementById('press');
button.addEventListener('click', () => {
  // this.classList.toggle('on');
  console.log('Button this',this);  //bound to parent instead of button
});

// Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.


// The JavaScript this keyword refers to the object it belongs to.

// It has different values depending on where it is used:

// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.