// for of  --> This loop is valid for only array

// ["","",""] --> Array of string
// [{},{},{}] --> Array of object

//syntax:for (const iterator of object) {
// 
// }  //here object means not the object of js. 
// here object matlab kis chij par loop lagana hai jaise array , object ,string, etc
//eg:
// const arr=[1,2,3,4,5,6];
// for(const num of arr){
//     console.log(num);
// }
// const greeting="Hello World";
// for(const greet of greeting){
//     console.log(greet);
// }


//Maps --> similar to array.
//map is an object which hold key value pairs and remembers the original insertion of the keys.
// map do not contain duplicate values.
const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");
map.set('IN',"India");//kuchh frak nahi parega.

console.log(map);

//applying loop on map
for(const key of map){
    console.log(key);// it will return array of key-value pairs.
}
for(const [key,value] of map){
    console.log(key,':-',value);// it will give the desired value.
}

// applying loop on object.
const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }// will throw an error as object are not iterable in this way

//iterating on object.

