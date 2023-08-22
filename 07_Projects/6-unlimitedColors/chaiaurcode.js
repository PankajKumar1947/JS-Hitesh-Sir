//generate a random color

const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color ='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color
}

//generating random number
// console.log(Math.random()*16);
// console.log(Math.floor(Math.random()*16));

// console.log(randomColor());


//function to startchanging color
let intervalId;
const startChangingColor=function(){
    if(!intervalId)//checking if the intervalId is null or not. run in the case of null and not run in the other case.
    {
    intervalId= setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
    document.body.style.backgroundColor=randomColor();
    }
};
//function to stop changing color
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;//flushing the intervalId variable
};

//selection start button and adding event listener on clicking and calling startChangingColor function
document.querySelector("#start").addEventListener('click',startChangingColor);

//selecting stop button and adding event listner click and calling stopChangingColor function.
document.querySelector("#stop").addEventListener('click',stopChangingColor);