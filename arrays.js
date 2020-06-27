// Arrays (create, indexes, length, modification, built-in methods: sorting, filtering, search, iterating)

//Create
let arr1 = [];
let arr2 = new Array();

console.log(arr1,arr2);

//indexes and modification
arr1[0] = 'Hi';
console.log(arr1[0]);

//length
console.log(arr1.length);

//sorting
arr1.push('Bye','Namaste','Hello','Kem Cho');
arr1.sort();
console.log(arr1);

arr1.reverse();
console.log(arr1);

//for number array
arr2 = [10,2,3,4,5,7,1];
arr2.sort((a,b) => a-b);
console.log(arr2);
arr2.sort((a,b) => b-a);
console.log(arr2);

arr2 = arr2.filter(item => item > 5);
console.log(arr2);

console.log(arr2.find(item => item == 7)); //undefined for not found
console.log(arr2.findIndex(item => item == 7));  //-1 for not found

//iterate over array
for(let item of arr1){
  console.log(item);
}

//iterate over object
for(let item in arr1){
  console.log(arr1[item]);  //for in return keys
}