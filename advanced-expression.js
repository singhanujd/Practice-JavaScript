//Hoisting
//Javascript Engine work in two phase (Creation and Execution phase)

var name;
console.log(name);// undefined
//as in creation phase engine takes into account all function defined and initializes all variable as undefined
//and in next phase lines are executed and values are assigned.

//Auto type conversions and comparison
console.log(true + false); //1 Numeric Conversion
// True + false // Numeric Conversion
console.log(12/"6"); ///2 Numeric Conversion
// 12/”6” //Numeric Conversion
console.log("Number"+15+3); //Number153 String Conversion
// “Number” + 15 + 3 //string conversion
console.log([1] > null); //true Numeric Conversion
// [1] > null // will return “1”
console.log("Foo" + +"bar"); //FooNaN String + Numeric Conversion
// “Foo” + +”bar” //NaN
console.log('True' == true); //false Numeric Conversion
// ‘True’ == true //Numeric
console.log(false == 'false'); //false Numeric Conversion
// False == ‘false’ //Numeric
console.log(null == ''); //false null === null && undefined === undefined
// Null == ‘’ // only null == null and undefined == undefined
console.log(!!"false" == !!"true"); //true Numeric conversion
// !!”false” == !!”true” //Numeric
console.log(['x'] == 'x'); //true String comparison
// [‘x’] == ‘x’ // Numeric will return array and then toString
console.log([] + null + 1); //string concatenation
// [] + null  + 1
console.log([1,2,3] == [1,2,3]); //No conversion but difference reference
// [1,2,3] == [1,2,3] //No  conversion but different references
console.log({} + [] + {} + [1]);
// {} + [] + {} + [1] //Both Object’s and Array’s valueOf method returns the object itself, so it’s ignored. toString() is used as a fallback.
console.log(! + [] + [] + ![]); // Numeric
console.log(Boolean([])); //true
console.log(Number([])); //0
// ! + [] + [] + ![]
console.log(new Date() - 0); //Numeric Conversion
// New Date(0) - 0 //Numeric
console.log(new Date() + 0); //String Conversion
// New Date(0) + 0 //String