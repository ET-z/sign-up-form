let form = document.getElementById("inputs");

function validatePassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let error = document.getElementsByClassName("error");

    if (password != confirmPassword) {
        for (var i = 0; i < error.length; i++) {
            error[i].innerHTML = "Passwords do not match"
        }
        console.log("F");
        return false;
    } else if (password = confirmPassword) {
        for (var i = 0; i < error.length; i++) {
            error[i].innerHTML = "Passwords match"
        }
        console.log("T");
    }
};

