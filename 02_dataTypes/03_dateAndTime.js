//++++++++++++++++ Date +++++++++++++++/
let myDate=new Date();
console.log(myDate);// output: 2023-10-17T06:39:14.842Z  --> utpatang sa samajh me nhi aa rha!

console.log(myDate.toString());// output: Tue Oct 17 2023 12:10:57 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());// ouput: Tue Oct 17 2023

console.log(myDate.toLocaleString());// ouput: 10/17/2023, 12:12:53 PM

console.log(typeof myDate);// date is an object in javascript.



let myCreatedDate=new Date(2023,0,23);// note that month start from 0 in javascript.
// you can use above to make project which can find the day on a given date.
console.log(myCreatedDate.toDateString());
let myDateTime=new Date(2023,0,23,5,3);//last two arguments denotes hour and minutes.
console.log(myDateTime.toLocaleString());//output: 1/23/2023, 5:03:00 AM

let myCustomDate=new Date("2023-01-14");// yy-mm-dd
console.log(myCustomDate.toLocaleString());//1/14/2023, 5:30:00 AM

//mm-dd-yy
let myIndianDate=new Date("01-14-2023");
console.log(myIndianDate.toLocaleString());

//timestamp.
//timestamp is generally used in creating poll and quizes in javascript.
let myTimeStamp=Date.now();
console.log(myTimeStamp);//1697525675926 it is in millisecond.
console.log(myCreatedDate.getTime());// 1674412200000 it is also in millisecond.

console.log(Date.now());//milisecond
console.log(Math.floor(Date.now()/1000))//second.


//methods of date
let newDate=new Date();
console.log(newDate);
console.log(newDate.getDate());//give date
console.log(newDate.getDay());//give day
console.log(newDate.getMonth()+1);//give month


//interesting 
//iternationalisation: 
newDate.toLocaleString('default',{
    weekday: "long"
})



//Question: print date,month, day upto 7 days.
const currentDate=new Date();
const currentDayNo=currentDate.getDate();// for date number
const currentDay=currentDate.getDay();// for day name
const currentMonth=currentDate.getMonth();// for month

const monthName=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const dayName=["Sun","Mon","Teu","Wed","Thu","Fri","Sat"];

for(let i=0;i<7;i++){
    console.log(currentDayNo+i,dayName[(currentDay+i)%7],monthName[(currentMonth+i)%12])
}

//Result for above question is:
//1 Wed Nov
// 2 Thu Dec
// 3 Fri Jan
// 4 Sat Feb
// 5 Sun Mar
// 6 Mon Apr
// 7 Teu May

