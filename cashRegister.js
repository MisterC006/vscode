console.log("Included");
let fieldBuy = document.getElementById("buyField");
let fieldAmount = document.getElementById("amount");
let buttonSelect = document.getElementById("select");
let shoppingCart = document.getElementById("shoppingCart");
let buttonTrue = 0;
let productArray = ["Apple","Bananna","Orange","Neel Pai","Cody Leonard","Febreez","MacBook","PC","ExpoMarker"];
productArray.push({Apple:1},{Bananna: 1},{Orange: 2},{NeelPai: .2},{CodyLeonard: 100},{Febreez: 5},{MacBook: 1000},{PC: 500},{ExpoMarker: 10});

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
console.log("You have ordered "+fieldAmount.value+" "+fieldBuy.value);

let obj = productArray.find(item => item)

if(productArray.includes(fieldBuy.value)){
    shoppingCart.innerHTML+=("You have ordered "+fieldAmount.value+" "+fieldBuy.value+"<br />");
}
else{
    alert("We do not sell that item. Please check you spelling and try again.");
};


});