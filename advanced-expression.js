//Hoisting
//Javascript Engine work in two phase (Creation and Execution phase)

var name;
console.log(name);// undefined
//as in creation phase engine takes into account all function defined and initializes all variable as undefined
//and in next phase lines are executed and values are assigned.


//Auto type conversions
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
console.log('True' == true); //true Numeric Conversion
// ‘True’ == true //Numeric
// False == ‘false’ //Numeric
// Null == ‘’ // only null == null and undefined == undefined
// !!”false” == !!”true” //Numeric
// [‘x’] == ‘x’ // Numeric will return array and then toString
// [] + null  + 1
// [1,2,3] == [1,2,3] //No  conversion but different references
// {} + [] + {} + [1] //Both Object’s and Array’s valueOf method returns the object itself, so it’s ignored. toString() is used as a fallback.
// ! + [] + [] + ![]
// New Date(0) - 0 //Numeric
// New Date(0) + 0 //String
