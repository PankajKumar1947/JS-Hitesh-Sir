//for loop
//syntax:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//printing 1 to 10
for(let i=1;i<=10;i++){
    console.log(i);
}

//printing even 1 to 10
for(let i=1;i<=10;i++){
    if(i%2==0)
        console.log(i);
}

//nested loop
for(let i=0;i<5;i++){
    console.log(`Outer Loop value : ${i}`);
    for(let j=0;j<5;j++){
        console.log(`Inner loop ${j} and inner loop`)
    }
}

//printing multiplication table
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

//for loop on array
let myArray=["flash","batman","superman"];
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}


//break and continue keyword
for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}
//continue
for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`);
        continue;// go for next iteration.
    }
    console.log(`Value of i is ${i}`);
}