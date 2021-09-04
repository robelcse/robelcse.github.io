console.log("hello worl")

let home = document.getElementById("home")
let aboutsection = document.querySelector(".about")
let homeSection = document.querySelector(".home")
 
home.addEventListener("click", function(){

    aboutsection.classList.toggle("hide-section")
    homeSection.classList.toggle("hide-section")
})