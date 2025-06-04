let searchch = document.getElementById("search");
let openn = document.getElementById("open");

searchch.addEventListener("click", function () {
    openn.classList.toggle("hidden");
    searchch.style.display ="block";
});
