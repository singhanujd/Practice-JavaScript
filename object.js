//Create

let obj1 = new Object({
  firstName: 'Jitendra',
  lastName: 'Singh'
});

let obj2 = {
  firstName: 'Jitendra',
  lastName: 'Singh'
};

console.log(obj1,obj2);

console.log(obj1.fullName);

//Manage Properties
let props = 123;
obj1[props] = 'Jitendra Singh';
console.log(obj1['123']);  //key should be convertible to string
// JavaScript object property names (keys) can only be strings or Symbols 

for (let item in obj1){
  console.log("Obj1 fields " + item);
}

console.log(Object.keys(obj1));
console.log(Object.getOwnPropertyNames(obj1));
// for...in loops
// This method traverses all enumerable properties of an object and its prototype chain

// Object.keys(o)
// This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.

// Object.getOwnPropertyNames(o)
// This method returns an array containing all own properties' names (enumerable or not) of an object o.

// Constructor Function
function Car(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);

//Object.create
// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

//Access through index
console.log(obj1[0]);
obj1[0] = 'hey';
console.log(obj1[0]); // If you initially define a property by its name, you must always refer to it by its name, and if you initially define a property by an index, you must always refer to it by its index.

//Defining properties for an object type
Car.prototype.color = 'black';
console.log(mycar.color); //adding to prototype is shared by all object type


// Object.keys()
// Object.values()
// Object.entries()
// console.log(Object.fromEntries(Object.entries(obj1)));
Object.assign(obj1,mycar);
Object.freeze(obj1); //stop content from changes
obj1.firstName = 'Hey';
console.log(obj1);
console.log(Object.getOwnPropertyDescriptor(mycar,'model'));