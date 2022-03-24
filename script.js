const button = document.getElementById("submit")
const emailChecked = document.getElementById("email")
const errorMessage = document.getElementById("error")

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

button.addEventListener("click", function(e){

    if(!isValidEmail(emailChecked.value)){
        e.preventDefault();
        email.style.border = "1px solid red";
        errorMessage.innerHTML = "Please provide a valid email address";
    }
    else{

    }
});