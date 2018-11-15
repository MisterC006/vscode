let list = document.getElementById("list");
let button = document.getElementById("button");
let count = 3;

button.addEventListener("click", x =>{

    for(count = 3; count < 101; count++){
    list.innerHTML+=("<li>This is item number " +count+"</li>");
    console.log("this works");
    }
});



