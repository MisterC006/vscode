console.log("Hello worl!");

let first = document.getElementById("firstvalue");
let second = document.getElementById("secondvalue");
let add = document.getElementById("+");
let subtract = document.getElementById("-");
let divide = document.getElementById("%");
let multiply = document.getElementById("*");
let result = document.getElementById("result");
let firstvalue;
let secondvalue;
let thing;

add.addEventListener("click", x =>{

    firstvalue = parseInt(first.value,10);
    secondvalue = parseInt(second.value,10);
    result.value = firstvalue + secondvalue;
    console.log(Math.max(firstvalue,secondvalue));
});
subtract.addEventListener("click", x =>{

    firstvalue = parseInt(first.value,10);
    secondvalue = parseInt(second.value,10);
    result.value = firstvalue - secondvalue;
    console.log(Math.max(firstvalue,secondvalue));
});
divide.addEventListener("click", x =>{

    firstvalue = parseInt(first.value,10);
    secondvalue = parseInt(second.value,10);
    result.value = firstvalue / secondvalue;
    console.log(Math.max(firstvalue,secondvalue));
});
multiply.addEventListener("click", x =>{

    firstvalue = parseInt(first.value,10);
    secondvalue = parseInt(second.value,10);
    result.value = firstvalue * secondvalue;
    console.log(Math.max(firstvalue,secondvalue));
});