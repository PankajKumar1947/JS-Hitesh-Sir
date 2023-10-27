const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'Sift by apple'
}
//loop on object --> for in --> it can also be applied on other
//syntax:
// for (const key in object) {
    
// }
//eg:
for (const key in myObject){
    console.log(key);
}// it will print the key only

for(const key in myObject){
    console.log(myObject[key]);
}// it will print the values only



//Q. Can for in loop be applied on array ? : yes
const programming = ["js","rb","py","cpp","java"];
for (const key in programming){
    console.log(key);
}//keys
for(const key in programming){
    console.log(programming[key]);
}// it will give values at keys.


//Q. Can for in loop be applied on map ? : No, As map are not iterable.
const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set('Fr',"France");

for(const key in map){
    console.log(key);// return nothing as map is not iterable.
}

