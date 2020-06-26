
// Variables Types
console.log(typeof 11);  //number
console.log(typeof "string"); //string
console.log(typeof true); //boolean
console.log(typeof []); //typeof array is object
console.log(typeof null); //typeof null is object
console.log(typeof undefined);

//Value Assignment
//Mutability vs Immutability
let num = 12;
let str = "Jitendra";
let bool = true;
let arr = [1,2,3];
let obj = {
  firstName: 'Jitendra',
  lastName: 'Singh'
}


let num1 = num;
let str1 = str;
let bool1 = bool;
let arr1 = arr;
let obj1 = obj;

num1 = 50;
console.log(num); //12

str1 = "Singh";
console.log(str); //Jitendra

bool1 = false;
console.log(bool); //true

arr1[2] = 70;
console.log(arr); //[1,2,70] instead of [1,2,3]

obj1.lastName = 'Blank';
console.log(obj.lastName); // "Blank" instead of 'Singh' 
