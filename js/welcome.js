var welcome=document.getElementById("welcome");
var logoutBtn=document.getElementById("logoutBtn");

if(localStorage.getItem("username") !=null){

    welcome.innerHTML=`welcome ${localStorage.getItem("username")}`
}

function logout(){
    localStorage.removeItem("username")
}

logoutBtn.addEventListener("click",logout)