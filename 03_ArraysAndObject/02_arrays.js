// Some more methods of array
const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

//marvel_heros.push(dc_heros);// here array is pushed in the array. here pushed array behaves as a single elements.

//console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);

//10. concat(arr1,arr2)  --> concatinate two arrays and return a array.
const allheros=marvel_heros.concat(dc_heros);
console.log(allheros);

//11. spread(...arr1,...arr2,...arr3) --> similar to concat(arr1,arr2)
// generally spread() opearator is used in place of concat().
const allnewHeros=[...marvel_heros,...dc_heros]
console.log(allnewHeros);


//12.flat() --> all arrays inside the array also spread into a single array.
//consider array inside the array.
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

//13. Array.from(anything) --> convert the anything into the array.
console.log(Array.isArray("Hitesh"))//false  :it is a string.
console.log(Array.from("Hitesh"));//convert the string into array.

console.log(Array.from({name:"hitesh"}))// interesting. it will give []

//14.Array.of(var1,var2,var3, , ,) --> it will make an array of var1,var2, var3 etc.
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));// it will make an array of score1,score2,score3.