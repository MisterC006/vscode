let userTextField = document.getElementById("userTextField");
let userAnswerLog = "";
userTextField.addEventListener("keypress", x =>{

    console.log("Pizza");
    let keyName = x.key;
    console.log(keyName);
    if(keyName == "Enter"){
        userAnswerLog += userTextField.value+"; ";
        userTextField.value = "";
    }

})