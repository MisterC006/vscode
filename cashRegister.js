console.log("Included");
let fieldBuy = document.getElementById("buyField");
let fieldAmount = document.getElementById("amount");
let buttonSelect = document.getElementById("select");
let shoppingCart = document.getElementById("shoppingCart");
let price = document.getElementById("price");
let checkout =document.getElementById("checkout");
let buttonTrue = 0;
let runningTotal = 0;
let owedTotal   = 0;
let priceDiv = document.getElementById("runningTotal");
let productArray = ["Apple","Bananna","Orange","Neel Pai","Cody Leonard","Febreez","MacBook","PC","ExpoMarker"];
productArray.push({Apple: 1},{Bananna: 1},{Orange: 2},{NeelPai: .2},{CodyLeonard: 100},{Febreez: 5},{MacBook: 1000},{PC: 500},{ExpoMarker: 10});

fieldBuy.addEventListener("blur", x => {

    console.log(fieldBuy.value);

});

fieldAmount.addEventListener("blur", x =>{
    
    console.log(fieldAmount.value);

});

buttonSelect.addEventListener("click", x =>{

        if(buttonTrue == 0){
            shoppingCart.innerHTML="";
            buttonTrue= 1;
        };
console.log("You have ordered "+fieldAmount.value+" "+fieldBuy.value+" which costs $"+price.value);

let obj = productArray.find(item => item)

if(productArray.includes(fieldBuy.value)){
    shoppingCart.innerHTML+=("You have ordered "+fieldAmount.value+" "+fieldBuy.value+" which costs $"+price.value+"<br />");
    runningTotal= parseInt(runningTotal)+parseInt(price.value*fieldAmount.value);
    priceDiv.innerHTML=("Your total is $"+runningTotal);
    owedTotal = owedTotal+parseInt(price.value*fieldAmount.value);
    checkoutDiv.innerHTML=("You owe $"+owedTotal);
}
else{
    alert("We do not sell that item. Please check you spelling and try again.");
};


});

checkout.addEventListener("click", x =>{
    
})

