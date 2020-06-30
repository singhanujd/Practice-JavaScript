// https://www.javascripttutorial.net/javascript-prototype/

let Foo = function(name){
  this.name = name;
}

let a = new Foo('Jitendra');
let b = new Foo('Singh');

console.log(a);
console.log(b);

console.log(a.__proto__);
console.log(b.__proto__);

console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(b));

//set prototype
//Function Constructor
var Address = (function(){
  function Address(city,country){
    this.city = city;
    this.country = country;
    this.sayHi = function(){
      console.log('I am part of old Address');
    }//Object function
  }

  Address.welcome = function(){
    console.log("welcome to my old city");
  } //Class function

  Address.prototype.usePrototype = function(){
    console.log("I am being called from old prototype chain");
  } //prototype

  return Address;
})();

function Person(name,age,city,country){
  Address.call(this,city,country);
  this.name = name;
  this.age = age;
}

//Set Prototype
Object.assign(Person,Address); //assign object properties (static)
Person.prototype = Object.create(Address.prototype);  //prototype copy
Person.prototype.constructor = Person; //constructor copy

//InstanceOf
let person = new Person();
console.log(person instanceof Person);



