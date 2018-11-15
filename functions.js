// Instructions:
//
// Create the following functions.  Print the results of using each function (at least 3 times each) to the console.
// Each of these functions should 'return' some type of value, where applicable (90%+ of these problems).
//
// For example, if you make a function like this...
//
// function convertPoundstoKilograms(poundsWeight) {
//      return poundsWeight / 2.205;
// }
//
// ... later in your code, there should be at least 3 examples of using it...
//
// console.log(convertPoundsToKilograms(100));
// console.log(convertPoundsToKilograms(200));
// console.log(convertPoundsToKilograms(50));

// 1.  Convert pounds to kilograms (it's a freebie!)
    function convertPoundstoKilograms(poundsWeight) {
        return poundsWeight/2.205;
    };
// 2.  Convert kilograms to pounds
    function convertKilogramstoPounds(kilosWeight) {
        return kilosWeight*2.205;
    };
// 3.  Convert Celsius to Fahrenheit
    function convertCelsiustoFahrenheit(degreesC) {
        return (degreesC*9/5)+32;
    };
// 4.  Determine whether a given number is even or odd
    function isEvenorOdd(intParity) {
        let parity = "Neither";
        if(intParity%2 == 0){
            parity = "even";
            return (intParity+" is "+parity);
        }
        else{
            parity = "odd";
            return (intParity+" is "+parity);
        };
    };
// 5.  Calculate the square of a given number
    function squareofNumber(square) {
        return square*square;
    };
// 6.  Retrieve the largest number in an array
    function arrayLargestNumber(firstNumber,secondNumber,thirdNumber,fourthNumber,fifthNumber) {
        let array = [firstNumber,secondNumber,thirdNumber,fourthNumber,fifthNumber];
        return Math.max(...array);
    };
// 7.  Calculate the diameter of a circle given a radius
    function diameterofaCircle(radius) {
        return radius*2;
    };
// 8.  Calculate the area of a circle given a radius
    function areaofCircle(radius) {
        return Math.PI*radius^2;
    };
// 9.  Calculate the circumference of a circle given a radius
    function circumferenceofCircle(radius) {
        return Math.PI*2*radius;
    }
// 10. Print the sum of all numbers from 1 to n
    function sumofNnumbers(number){
    let sum = 0;
    for(let count = 1; count <= number; count++){
        sum = sum + count;
    }
    return sum;
                                }
// 11. Compute the average of 3 numbers
    function average(firstNumber,secondNumber,thirdNumber){
        return (firstNumber+secondNumber+thirdNumber)/3
    }

// 12. Count the number of vowels in a given string (Hint: Use the 'split' function to convert a string into an array
//     For example, "My String".split('') will give you -> ['M', 'y', ' ', 'S', 't', 'r', 'i', 'n', 'g']
/*    function vowelCount(string){
       string = string.toLowerCase();
       string = string.split(``);
       let numberofVowels = 0;
       vowelCountinnerfunction(string);
    }
    function vowelCountinnerfunction(string){
        if(string.forEach(string.includes("a","e","i","o","u"))){
            numberofVowels++;
            return "Positive";
        }
        else{
            return "No Vowels"; 
        };
    }
*/
    function vowelCount(string){
        let vowels = ["a","e","i","o","u"];
        let wordChars = string.toLowerCase().split(``);
        let numberofVowels = 0;

        for(let i = 0; i < vowels.length; i++){
            if(wordChars.includes(vowels[i])){
                for(let j = 0; j < wordChars.length; j++){
                    if (wordChars[j] === vowels[i]){
                        numberofVowels++;
                    }
                }
            }
        }
        return "String: "+string+"... Number of vowles "+numberofVowels;
    }    
// 13. Determine if a year is a leap year or not
    function isLeapYear(year){
        if(year%4 == 0){
            return (year+" was/is/will be a leap year.")
        }
        else{
            return (year+" was/is/will not be a leap year.")
        };
    }

// 14. Print an n x n grid using the '*' character
//     For example, something like 'printGrid(4)' should produce...
//
//     ****
//     ****
//     ****
//     ****

    function printlineGrid(sidelength){
        let temp = "";
        for(let count = 0; count < sidelength; count++){
            temp += "*";
        };
        return temp;
    }

    function printGrid(sidelength){
        for(let count = 0; count < sidelength; count++){
           console.log(printlineGrid(sidelength));
        };
        return sidelength;
    }

// 15. Calculate the area of a triangle
    function areaofTriangle(base,height){
        return (base*height)/2
    }
//These are all the function calls at the botton, for grouping and redability.

console.log(convertKilogramstoPounds(100));
console.log(convertKilogramstoPounds(300));
console.log(convertKilogramstoPounds(42));

console.log(convertPoundstoKilograms(25));
console.log(convertPoundstoKilograms(15));
console.log(convertPoundstoKilograms(21));

console.log(convertCelsiustoFahrenheit(19));
console.log(convertCelsiustoFahrenheit(21));
console.log(convertCelsiustoFahrenheit(3));

console.log(isEvenorOdd(11));
console.log(isEvenorOdd(13));
console.log(isEvenorOdd(18));

console.log(squareofNumber(23));
console.log(squareofNumber(5));
console.log(squareofNumber(1));

console.log(arrayLargestNumber(22,5,18,0,0));
console.log(arrayLargestNumber(9,14,20,8,5));
console.log(arrayLargestNumber(2,5,7,9,14));

console.log(diameterofaCircle(14));
console.log(diameterofaCircle(9));
console.log(diameterofaCircle(14));

console.log(areaofCircle(7));
console.log(areaofCircle(23));
console.log(areaofCircle(1));

console.log(circumferenceofCircle(19));
console.log(circumferenceofCircle(20));
console.log(circumferenceofCircle(8));

console.log(sumofNnumbers(5));
//23,15));
console.log(sumofNnumbers(18));
//4,20));
console.log(sumofNnumbers(8));
//5,23));

console.log(average(15,18,4));
console.log(average(23,1,19));
console.log(average(23,9,20));

console.log(vowelCount("Hello World"));
console.log(vowelCount("Superclaifragalisticexpialidousic"));
console.log(vowelCount("Guten Tag"));


console.log(isLeapYear(20,8,5));
console.log(isLeapYear(23,15,18));
console.log(isLeapYear(4,23,1));

console.log(printGrid(19));
console.log(printGrid(7));
console.log(printGrid(15));

console.log(areaofTriangle(42,21));
console.log(areaofTriangle(666,333));
console.log(areaofTriangle(777,388.5));




