//What are two additional ways in which the standard ‘console.log()’ function can be used to format messages that it prints?
    console.log("This is a basic message");
    console.log("%s amounts to $%d","IPhone,",1000);
    console.log();

//How does ‘console.dir()’ differ from ‘console.log()’?


//What purpose does ‘console.warn()’ serve?


//What does ‘console.table()’ do with an array of object data that differs from ‘console.log()’?


//How can ‘console.time()’ be used to determine how long an operation takes to complete?



let dice1 = 0;
let dice2 = 0;
let x = 0;
let y = 10;

function diceRoll1(){while(x<y){
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    console.log(dice1);
    console.log(dice2);
    if(dice1+dice2== 10){
        console.log("Dice equal 10");
        y =0;
    }
}}
function diceRoll2(){console.log("Other way");
dice1 = 0;
dice2 = 0;
while(dice1+dice2!=10){
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;
    console.log(dice1);
    console.log(dice2);
}
console.log("Dice equal 10");
}
x = 0;

while(x < 10000){
    console.log(diceRoll2());
    x++;
}