console.log("Included");
//Declaring original values here so that the function can be run again.
let puppies = 20;
let tissuesused = 0;
let ponytoys = 100;
let monies = -5;
let kittens = 12;
let tires = 2;
let spicy = 100;
function Myfunction(){



/*

Under each statement, provide a proper 'if' statement, including 'else if/else' clauses where applicable.
Use new variables for each problem.  Do not reuse ones from prior problems.

 */

// 1.  If the number of puppies you have is greater than 10, print out "OMG PUPPIES LOLOL" to the console.


if(puppies > 10){

    console.log("OMG PUPPIES LOLOL");
    console.log("Why do you make us suffer?");
    console.log("puppies is equal to "+ puppies);
}

// 2.  If the number of tissues you've used is less than 5, print out "CRY MORE NOOB" to the console.


if(tissuesused < 5){
    console.log("CRY MORE NOOB");
    console.log("Maybe with all those tears, you could water a garden.");
    console.log("tissuesused is equal to "+ tissuesused);

}

// 3.  If the number of My Little Pony toys you own is equal to or more than 20, print out "I LOVE YOU PRINCESS CELESTIA!" to the console.


if(ponytoys >= 20){

    console.log("I LOVE YOU PRINCESS CELESTIA!");
    console.log("Do you have something you need to share with us Mr.Weaver?");
    console.log("ponytoys is equal to "+ ponytoys);

}

// 4.  If the number of dollars you have is less than or equal to zero, print out "WHY YOU SO POOR???" to the console.


if(monies <= 0){

    console.log("WHY YOU SO POOR???");
    console.log("BECAUSE I DON'T WORK AS OFTEN AS I SHOULD");
    console.log("monies is equal to "+ monies);

}

// 5.  If the number of kittens you have is greater than 10, print out "AWW KITTY EXPLOSION".  If it's greater than 5, print "KITTY BOOM".  Otherwise, print "YOUR KITTEN POWERS ARE WEAK".


if(kittens > 10){
    console.log("AWW KITTY EXPLOSION");
    console.log("You're going to need a weak sense of smell and a large litter box...");
    console.log("kittens is equal to "+ kittens);

}

else if( kittens > 5){

    console.log("KITTY BOOM");
    console.log("Hope you don't mind dealing with hairballs at 2am");
    console.log("kittens is equal to "+ kittens);

}
else {
    console.log("YOUR KITTEN POWERS ARE WEAK");
    console.log("Probably because you made the smart choie, and got a dog.");
    console.log("kittens is equal to "+ kittens);

}

// 6.  If the number of tires on your car is less than 4, print out "YOU AIN'T GOING NOWHERE" to the console.

if(tires == 0){
    console.log("You are driving a hovercar.");
    console.log("tires is equal to "+ tires);

}
else if(tires < 4){

    console.log("YOU AIN'T GOING NOWHERE");
    console.log("tires is equal to "+ tires);

}
else if(tires > 4){

    console.log("What are you driving? A truck?");
    console.log("tires is equal to "+ tires);
}
else{
    console.log("Everthing looks good!");
    console.log("tires is equal to "+ tires);

}

// 7.  If the number of spiciness level of the hot sauce is greater than 100, print "FIREEEE".  If it's greater than 50, print "WARRMMMM".

if(spicy > 100){
    console.log("FIREEEE");
    console.log("spicy is equal to "+ spicy);
}
else if(spicy > 50){
    console.log("WARRMMMMM");
    console.log("spicy is equal to "+ spicy);

}
}
Myfunction();
let thing = document.getElementById("thing");

thing.addEventListener("click", Myfunction,{
});