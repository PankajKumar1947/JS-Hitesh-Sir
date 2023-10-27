const coding=["js","ruby","java","python","cpp"];

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);//undefined
// as forEach do not return any values.


//filter() --> it also take a call back function
// filter()  --> return the value according to the condition but forEach() do not return the value.
const myNums=[1,2,3,4,5,6,7,8,9,10];

//implicit return -> do not open scope and don't use return keyword. 
const newNums=myNums.filter((num)=>num>4)
//explicit return -> if you open the scope you have to write return keyword
const newExpNum=myNums.filter((num)=>{
    return num>4;
})

console.log(newNums);//[ 5, 6, 7, 8, 9, 10 ]
console.log(newExpNum);//[ 5, 6, 7, 8, 9, 10 ]

// applying login in forEach() to do the same as above
const newNum=[];
newNums.forEach((num)=>{
    if(num>4)
        newNum.push(num);
})
console.log(newNum);//[ 5, 6, 7, 8, 9, 10 ]

//++++++++++ How filter is used in database ++++++++++//
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//using database
const userBooksByGenre=books.filter((bk)=> bk.genre==='History');
console.log(userBooksByGenre);// print those books whose genre is 'History'

const userBooksByPublish=books.filter((bk)=>{
    return bk.publish >2000
});// return those books whose publish date is greater than 2000
console.log(userBooksByPublish);

const userBooks=books.filter((bk)=>{
    return bk.edition>=1990 && bk.genre==='Science';
});//return those books whose edition date is greate than 1990 and books Genre is Science.
console.log(userBooks);