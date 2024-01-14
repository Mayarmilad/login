var userEmailInput = document.getElementById("useremailinput");
var userNameInput = document.getElementById("usernameinput");
var userPasswordInput = document.getElementById("userpasswordinput");
var signUpBtn = document.getElementById("signUpBtn");
var emailList = [];
var alertMsg = document.getElementById("alertMsg");


if (localStorage.getItem("persons") != null) {
    emailList = JSON.parse(localStorage.getItem("persons"));
}

function signUp() {


    var person = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPasswordInput.value,
    }

    if (checkInputsEmpty() == true) {
        getalert("all input required","red");
    }
    else {
        if(checkEmailExist()==true){

            getalert("email already exists ","red");

        }else{
            emailList.push(person);
            localStorage.setItem("persons", JSON.stringify(emailList));
            clearform();
            getalert("success","green");
        }

        
    }

}
function getalert(text,color) {
    alertMsg.classList.replace("d-none", "d-block");
    alertMsg.innerHTML=text;
    alertMsg.style.color=color;
}

function clearform() {
    userNameInput.value = '';
    userEmailInput.value = '';
    userPasswordInput.value = '';

}

function checkInputsEmpty() {
    if (userNameInput.value == '' || userEmailInput.value == '' || userPasswordInput.value == '') {
        return true
    } else {
        return false
    }
}

function checkEmailExist() {
    for (var i = 0; i < emailList.length; i++) {
        if (emailList[i].email == userEmailInput.value) 
            return true
        

    }
}
signUpBtn.addEventListener("click", signUp)

