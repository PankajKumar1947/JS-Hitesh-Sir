//Immediately Invoked Function Expression (IIFE).
//Used to get rid of pollution from global declared varibable.
//IIFE is called at the time of declarations.

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();

//iife of above function.
(function chai(){
    //named iffi
    console.log(`DB CONNECTED`);
}());


//iife syntax: ()()

( function aurcode(){
    console.log(`DB Connected two`);
})(); // it is same as above but why it is giving errow ?
// ans: above iife must be end with ; other wise next will throw an error.

//arrow function
(()=>{
    //unnamed iife
    console.log(`DB conntected by arrow `);
})();

((name)=>{
    console.log(`DB conntected by arrow ${name}  with argument`);
})("ARG ARROW")

