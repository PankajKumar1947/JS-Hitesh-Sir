// declaring constant
const accountId=144332


// variable is declared by using let
let accountEmail="hitesh@google.com"
// scope of let is under the block


// var is also used to declare varibales.
var accountPasswor="1234"
// var is not used now a days because of scope problem. 
// scope of var is whole the block

/* Prefer not to use var
because of issue in block scope and functional scope 
*/


let accountState;
// Only accountState variable is declared here it is undefined.

// We can declare the variable in this way also.
accountCity="jaipur"
// But this is not a safe way to declare varibales. so prefer to  use only let.



// accountId=2;  wrong
// we cannot change the value of const varibales.

accountEmail="hcverma@h.c";
accountPasswor="345112";
accountCity="bihar";

console.table([accountId,accountEmail,accountPasswor,accountCity,accountState])

console.log(accountId);