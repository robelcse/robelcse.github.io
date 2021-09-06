//select navbar
let sidebar = document.getElementById("sidebar-section")
let closebtn = document.querySelector(".fa-close")
let showbtn = document.querySelector(".fa-bars")

showbtn.style.display = 'block';
closebtn.style.display = 'none';
showbtn.addEventListener("click", function(){

    sidebar.style.marginLeft = '0';
    showbtn.style.display = 'none';
    closebtn.style.display = 'block';
    

})
closebtn.addEventListener("click", function(){
    
    sidebar.style.marginLeft = '-240px';
    closebtn.style.display = 'none';
    showbtn.style.display = 'block';
      
})


//

 