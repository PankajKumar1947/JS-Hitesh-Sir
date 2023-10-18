//arrays are written in square brackets.
const myArr=[1,2,5,"pan",true];
// In js, array can be collection of similar or dissimilar elements.
// Note that in js , arrays are resizeable.

console.log(myArr[1]);
// arrays are accessed by indexing . array is zero based index.

//Note that arrays make a shallow copy:
//Shallow copy:- A shallow copy of an object is a copy whose properties share the same refrences(pointto the same underlying values)  as those of the source object from which the copy was made.
// As a result, when you make changes in copied array then there will be also changed in the original arrray.

// Deep copy: a deep copy of an object is a copy whose properties do not share the same refrences( point to the same underlying value) as of the source object from which the copy was made.


// new way to declare array
const myArr2=new Array(1,2,3,5);// it will create an object
console.log(typeof myArr2);
console.log(myArr2[0]);// still accessing the value.


const arr=[];
// Methods of array
//1. push(num) --> add new elements num in the last of an array.
arr.push(4);
arr.push(2);
arr.push(3)
arr.push(34)
arr.push(6)
arr.push(32);

//2.pop() --> delete last elements.
arr.pop();

//3.unshift(num)  --> num will be added in start
arr.unshift(100);
// In unshift(num), all the elements in the right from their original position.
// if there will be greater numbers of elements then time complexity will be very hight.
// So avoid it to use.

//4.shift()  --> delete first elements from the array.
// Same problem as unshift() is with it. it shifts all the elements to the left.
arr.shift();

//5. includes(num)  --> check whether the array includes num or not.
console.log(arr.includes(3));

//6. indexOf(num)  --> It will find the index of num in the array.
console.log(arr.indexOf(9));
// Note that: if the element is not present then it will give -1 index.

//7. join() --> join the all elements of an array to string.
const nArr=arr.join();
console.log(arr);//[ 4, 2, 3, 34, 6 ]
console.log(nArr);//4,2,3,34,6 --> types of nArr will be string.

//8. slice(n1,n2) --> it will slice the arr from index n1 to n2 including n1 and excluding n2.
console.log("A",arr);
const sArr=arr.slice(1,3);
console.log(sArr); 

//9. splice(n1,n2) --> it will delete all the elements from index n1 to index n2 from the original elements including elements at index n1 and n2.
console.log("B",arr);//  B [ 4, 2, 3, 34, 6 ]
const spArr=arr.splice(1,3);
console.log(spArr); //  [ 2, 3, 34 ]
console.log("C",arr);// C [ 4, 6 ]

