var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");
var alertMsg = document.getElementById("alertMsg");


var emailList = [];
if (localStorage.getItem("persons") != null) {
    emailList = JSON.parse(localStorage.getItem("persons"))
}

function login() {
    if (checkInputsEmpty() == true) {

        getalert("all input is required", 'red')
    }
    else {
        if (checkEmailPassword() == true) {

            window.location.href = 'welcome.html';

        } else {

            getalert("your email or password is not correct", "red");
        }


    }

}
function getalert(text, color) {
    alertMsg.classList.replace("d-none", "d-block");
    alertMsg.innerHTML = text;
    alertMsg.style.color = color;
}

function checkEmailPassword() {

    for (var i = 0; i < emailList.length; i++) {
        if (emailList[i].email == loginEmail.value && emailList[i].password == loginPassword.value) {
            localStorage.setItem("username", emailList[i].name);
            return true
        }

        
    }
}

function checkInputsEmpty() {
    if (loginEmail.value == '' || loginPassword.value == '') {
        return true
    } else {
        return false
    }
}
loginBtn.addEventListener("click", login)