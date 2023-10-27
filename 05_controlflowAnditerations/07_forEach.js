const coding=["js","ruby","java","python","cpp"];

//here callback is passed in forEach 
// callback function -> remove the name of a function.
coding.forEach( function (item) {
    console.log(item);
})// elements of coding will be printed.

//using arrow function in forEach loop
coding.forEach((item)=>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);//here reference of a function is passed only


// note that: multiple parameters are passed in callback of forEach loop.
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})// here index, value at index and arr are accessed by passing them in a callback


// +++++++++++++++++++++ array of an object. +++++++++++++//
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
]

//accessing the elements of object from an array.
myCoding.forEach((item)=>{
    console.log(item.languageName)
})
