console.log("Included");
let count = 0;
for(count = 0; count < 100; count++){
    if(count%2 == 0){
        console.log(count);
    }
}


// Create a new HTML and JS file for this activity.  For each number, write the correct for loop.

// Print out a message 20 times.
    for(count = 0; count < 20; count++){
        console.log("This is a message");
    }


// Print out numbers evenly divisible by 3, up to 100.  (Hint: Use the % operator).

    for(count = 0; count < 100; count++){
        if(count%3 == 0){
            console.log(count);
    }
}

// Print out the sum of the numbers 1 to 50.
let total = 0;
console.log("Print numbers 1 to 50")
    for(count = 0; count < 50; count++){
            total=((total)+(count));
            console.log(total);
        
}

// Write a for loop that calculates the factorial of a given number.
total = 1
console.log("facotrial");
count = 0;
    for(count = 1; count <= 5; count++){
        total=(count*total);
        //console.log(total);
    }
    console.log("The factorial of "+(count-1)+" is "+total+".");

// If the loop count ends with 5, the expected output should be:

// The factorial of 5 is: 120


// Write a for loop that prints out n terms of squares and their sum.

    console.log("Sum of squares");
    count = 0;
    total =0;
    let square = 0;
        for(count = 1; count <= 10; count++){
            total=(count*count);
            //console.log(total);
            square=(square+total);
        }
        console.log("The sum of each square of all real numbers up to "+(count- 1)+" is "+square);
    

// Expected Output:

// The squares of each number up to 5 are: 1 4 9 16 25 
// The sum of each square of a number up to 5 is: 55


// Print out the multiplication table vertically from 1 to n, where n is the count limit of your loop.  For example, if n is 8:

// Expected Output:

// Multiplication table from 1 to 8

console.log("Multiplication table");
count = 0;
let firstcount = 0;
total = 0;
square = 0;
let number = 0;
let number2 = 0;
        for(firstcount = 1; firstcount <=8; firstcount++){
            number = firstcount;
            for(count = 1; count <=10; count++){
                number2= count;
                console.log(number+"x"+number2+" = "+(number*number2));

            }
        }

// 1x1 = 1, 2x1 = 2, 3x1 = 3, 4x1 = 4, 5x1 = 5, 6x1 = 6, 7x1 = 7, 8x1 = 8 
// ... 
// 1x10 = 10, 2x10 = 20, 3x10 = 30, 4x10 = 40, 5x10 = 50, 6x10 = 60, 7x10 = 70, 8x10 = 80

// Hint: You will need to use a for loop inside of another for loop.


// Write a loop to display the pattern like right angle triangle using an asterisk.

console.log("*")


// If your for loop ends at 4, the pattern should look like:

// *
// **
// ***
// ****
let string = "";

for (let asteriskCount = 1; asteriskCount <= 40; asteriskCount++){
    string += "*";
    console.log(string);
}