//create

let fn1 = function(){
  return 10;
}

function fn2(){
  return 20;
}

//invoke
console.log(fn1());
console.log(fn2());

// An expression is any valid unit of code that resolves to a value.
let fn3 = function f(){}  //expression

function f(){} //statement

//Operators
console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 20);
console.log(10 / 20);
console.log(10 ** 2);
console.log(10 + 2 + 'hey');

//Object literal
let obj = {};
console.log(obj);

//conditions
if(true){
  console.log("true");
}else{
  console.log("false");
}