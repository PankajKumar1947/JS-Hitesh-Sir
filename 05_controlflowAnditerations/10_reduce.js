const myNums=[1,2,3];

// reduce() is used in shopping cart where all the prices are added.
const myTotal=myNums.reduce(function(acc,currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc+currVal;
},0)// here 0 is initial value for acc.
console.log(myTotal);

// writing above code in arrow function.
const myTotalArrowFn=myNums.reduce((acc,currVal)=>acc+currVal,0);
console.log(myTotalArrowFn);


//real life example.
const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:4000
    },
    {
        itemName:"data science",
        price:12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item )=>(acc+item.price),0);
console.log(priceToPay);

