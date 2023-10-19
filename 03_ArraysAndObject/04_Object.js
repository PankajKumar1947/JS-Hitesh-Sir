//2. Singleton --> constructor ki help se object ko declare karna.
const tinderUser=new Object();
console.log(tinderUser); // {} -> same as literal objects but it is singleton object.

//adding some value
tinderUser.id="123abc";
tinderUser.name="sam";
tinderUser.isLoggedIn=false;

console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    //object nesting
    fullname:{
        username:{
            firstname:"hitesh",
            lastnaem:"Chaudhary"
        }
    }
}

//accessing the values.
console.log(regularUser.fullname);//{ username: { firstname: 'hitesh', lastnaem: 'Chaudhary' } }
console.log(regularUser.fullname.username);
console.log(regularUser.fullname.username.firstname);


//combining the objects.
const obje1={1:"a",2:"b"};
const obje2={3:"a",4:"b"};
const obje4={4:"a",5:"z"};

const obj3={obje1,obje2};//{ obje1: { '1': 'a', '2': 'b' }, obje2: { '3': 'a', '4': 'b' } } --> same problem as array.
//1.assign(obj1,obj2) --> combine the object and returned a single object.
const obje3=Object.assign(obje1,obje2);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const object3=Object.assign({},obje1,obje2); // same as above but for better practice use it.
console.log(obje3);
const object4=Object.assign({},obje1,obje2,obje4);// store in this empty object.

//2.spread operator: better than assign.
// but for better practive use the below.
const ob={...obje1,...obje2,...obje3};
console.log(ob);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



//Note that during accessing the value from database this method is generally followed.
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    
]

const firstElement=users[1].email;
console.log(tinderUser);

//getting keys of an object;
//Object.keys(objectName)--> return an array of keys present in the object.
//that's why we can access them by using array properties.
console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ] --> keys

// getting object of an object;
// Object.values(objectName); --> return an array of values present in the object.
console.log(Object.values(tinderUser));//[ '123abc', 'sam', false ] --> object

// getting entries of an object.
// Object.entries(objectName);--> return an array of all array of keys and values present in the object.
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ] -->entries


//checking if that properties is present or not
//objectName.hasOwnProperty('propertyName');--> return true or false.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true;



// Some suggestions:
// Open console and take an example of an object check their properties in prototypes.