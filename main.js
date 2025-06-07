let searchch = document.getElementById("search");
let openn = document.getElementById("open");

searchch.addEventListener("click", function () {
    openn.classList.toggle("hidden");
    searchch.style.display ="block";
});




let menuu =document.getElementById("openn");
let navv =document.getElementById("navv");

menuu.addEventListener("click", function (){
    navv.style.display ="flex";
    navv.style.flexDirection ="column";
    navv.style.gap ="1rem";
    navv.style.width ="70vw";
    navv.style.height ="100vh";
    navv.style.backgroundColor ="#494465";
    navv.style.position ="fixed";
    navv.style.top ="0";
    navv.style.right ="0";
    navv.style.alignItems ="center";
    navv.style.justifyContent ="center"
})

let closee =document.getElementById("close");
closee.addEventListener("click", function(){
    navv.style.display ="none";
})