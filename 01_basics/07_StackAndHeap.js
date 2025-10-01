// Primitive Data types uses Stack Memory.
//Non Primitive Data types uses Headp Memory.

let myYoutubename="hiteshchaudhary.com"// it is a primitive value it will uses stack.

let anothername=myYoutubename;// it's also primitive value.

anothername="chai aur code";// this value will be changed in the copy of anothername.

console.log(anothername);
console.log(myYoutubename);//


//Non- Primitive ;
let user={
    email:"user@google.com",
    upi:"2343432@sbi"
}

// Non-Primitive data types uses Heap memory.
// In non-Primitve data types , refrence of original value is taken.

let userTwo=user;//reference of uer is taken. not copy is taken.

userTwo.email="xyz@gamil.com";

console.log(user);//email will be changed to user also.
console.log(userTwo);