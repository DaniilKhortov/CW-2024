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

function Register() {
    var email = document.getElementById('email').value;
    var nickname = document.getElementById('nickname').value;
    var password = document.getElementById('psw').value;
    var imagePath = document.getElementById('currentIcon').src;


    var confirmPassword = document.getElementById('psw2').value;
    if (password !== confirmPassword) {
        alert("Registration Error: Passwords are different!");
        return;
    }
    //var userData = {
    //    email: email,
    //    nickname: nickname,
    //    password: password,
    //    image: imagePath
    //};

    //localStorage.setItem('userData', JSON.stringify(userData));
    alert("Registration completed!");
    window.location.replace("index.html");
/*    localStorage.clear();*/
}
