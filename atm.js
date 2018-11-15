let inputamount = document.getElementById("inputamount");

parseFloat(inputamount);

inputamount = 269.09;
console.log(Math.trunc(inputamount));
console.log(Math.trunc(inputamount/100));
console.log(Math.trunc(inputamount/10-(Math.trunc(inputamount/100)*10)));
console.log(Math.trunc(inputamount)-(Math.trunc(inputamount/100)*100)-(Math.trunc(inputamount/10-(Math.trunc(inputamount/100)*10))*10));
console.log(Math.abs((Math.trunc(inputamount)*100)-(inputamount*100))*.01);