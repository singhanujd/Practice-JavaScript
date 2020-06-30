// ES5 classes
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
Object.assign(Person,Address); //assign object properties (static)
Person.prototype = Object.create(Address.prototype);  //prototype copy
Person.prototype.constructor = Person; //constructor copy

//ES6
class NewAddress{
  constructor(city,country){
    this.city = city;
    this.country = country;
    
  }
  sayHi = function(){
    console.log('I am part of new Address');
  } //Object function
  static welcome(){
    console.log("Welcome to my city");
  } //Class function
  usePrototype(){
    console.log("I am being called from new prototype chain");
  } //prototype
}

class NewPerson extends NewAddress{
  constructor(name,age,city,country){
    super(city,country);
    this.name = name;
    this.age = age;
  }
}

let person = new Person('Jitendra Singh',26,'Hyderabad','India');
let person2 = new Person('Jitendra Singh',26,'Hyderabad','India');
console.log(person);
console.log(Person);
console.log(Address);
Person.welcome();
person.sayHi();
Person.prototype.usePrototype = function(){
  console.log("I am old and modified");
}
person.usePrototype();
let newPerson = new NewPerson('Jitu Singh',36,'Mumbai','India');
let newPerson2 = new NewPerson('Jitu Singh',36,'Mumbai','India');
console.log(newPerson);
console.log(NewPerson);
console.log(NewAddress);
NewPerson.welcome();
newPerson.sayHi();
NewPerson.prototype.usePrototype = function(){
  console.log("I am new and modified");
}
newPerson.usePrototype();