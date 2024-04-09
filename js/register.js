document.getElementById("imageChanger").addEventListener("click", ImageChange);
document.getElementById("regBtn").addEventListener("click", Register);
document.getElementById("icon1").addEventListener("click", function () {
    changeIcon("./img/icon1.png");
});
document.getElementById("icon2").addEventListener("click", function () {
    changeIcon("./img/icon2.png");
});
document.getElementById("icon3").addEventListener("click", function () {
    changeIcon("./img/icon3.png");
});
function ImageChange() {

    let registerImgSection = document.getElementById("registerImgSection");

    registerImgSection.style.visibility = "visible";
    registerImgSection.style.position = "inherit";
    document.getElementById("imageChanger").style.position = "absolute";
    document.getElementById("imageChanger").style.visibility = "hidden";

}



function changeIcon(iconPath) {
    let registerImgSection = document.getElementById("registerImgSection");

    registerImgSection.style.visibility = "hidden";
    registerImgSection.style.position = "absolute";
    document.getElementById("imageChanger").style.position = "inherit";
    document.getElementById("imageChanger").style.visibility = "visible";
    document.getElementById("currentIcon").src = iconPath;
}

function validateRealisticEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(gmail\.com|yahoo\.com|outlook\.com)$/;
    return re.test(String(email).toLowerCase());
}
function validatePassword(password) {

    const isLongEnough = password.length >= 8;

    const hasUpperCase = /[A-Z]/.test(password);

    const hasLowerCase = /[a-z]/.test(password);

    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
    const hasNumber = /\d/.test(password);

    return isLongEnough && hasUpperCase && hasLowerCase && hasSpecialCharacter && hasNumber;
}
function Register() {
    let email = document.getElementById('email').value;
    let nickname = document.getElementById('nickname').value;
    let password = document.getElementById('psw').value;
    let imagePath = document.getElementById('currentIcon').src;

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let confirmPassword = document.getElementById('psw2').value;

    if (password !== confirmPassword) {
        alert("Registration Error: Passwords are different!");
        return;
    }

    if (validateRealisticEmail(email)===false) {
        alert("Registration Error: Email address is invalid!");
        return;
    }
    if (validatePassword(password) === false) {
        alert("Password must contain one uppercase letter, one undercase letter, one digit and one spacial symbol. The minimal length of password is 8 symbols!");
        return;
    }

    sessionStorage.setItem("email", email);
    sessionStorage.setItem("nickname", nickname);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("imagePath", imagePath);

    
    alert("Registration completed!");
    window.location.replace("index.html");

}
