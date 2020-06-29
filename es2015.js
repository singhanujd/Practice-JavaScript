// const
// let

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
  console.log(this.name);
}
console.log(sayName());